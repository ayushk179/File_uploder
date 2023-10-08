const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const User = require("../model/user");
const user = require("../model/user");
const UrlShortener = require('../utils/urlShortener');
const urlController = require('../controller/urlController');


router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path,{resource_type:"auto"});
    // Create new user
    const short_id=  UrlShortener.generateShortUrl();
    const base_url="https://uplodify.onrender.com/user/";
    const short=base_url.concat(short_id)
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
      shortUrl : short
    });
     
    // Save user
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    const id=req.params.id;
    let user = await User.findById(id);
   
    if(user){
       // Delete image from cloudinary
     await cloudinary.uploader.destroy(user.cloudinary_id);
     // Delete user from db
      await user.remove();
      res.json(user);
    }
    else{
      return res.status(404).send('No document found');
    }
  } catch (err) {
    alert(err);
  }
});

router.get("/:id", urlController.redirectToOriginalUrl);


module.exports = router;