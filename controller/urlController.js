const mongoose = require("mongoose");
const user = require("../model/user");

class UrlController {

    static async redirectToOriginalUrl(req, res) {
        try {
            const srl = req.protocol + '://' + req.get('host') + req.originalUrl;
            console.log(srl);
            const url = await user.findOne({ shortUrl: srl });
            
            if (!url) {
                return res.status(404).send('URL NOT FOUND');
            }
            res.redirect(url.avatar);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = UrlController;