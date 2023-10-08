const multer = require("multer");
const path = require("path");

// Multer config
var maxsize=25*1024*1024;
module.exports = multer({
  storage: multer.diskStorage({}),
  limits:{
    fileSize:maxsize
  },
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"  && ext !== ".mp4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});