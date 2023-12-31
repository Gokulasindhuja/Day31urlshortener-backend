const express = require("express");

const router = express.Router();

const Url = require("../models/Url");

// : app.get(/:code)==>end of a string
// 

// @route       GET /:code
// @description    Redirect to the long/original URL 
router.get("/:code",
    async (req, res) => {
        try {
            const url = await Url.findOne({ urlCode: req.params.code });
            if (url) {
                url.counter++;
                url.save();
                return res.redirect(url.longUrl);
            } else {
                return res.status(404).json("No URL Found");
            }

        } catch (err) {
            console.error(err);
            res.status(500).json("Server Error");
        }
    });

router.get("/",
    function(request, response) {

        response.render("index.pug",
            {
                title: "URL Shortner Application"
            });
    });

module.exports = router;
