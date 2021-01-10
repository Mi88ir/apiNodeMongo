const express = require("express");
const router = express.Router();
const Post = require('../models/post.js');

router.get('/', (req, res) => {
    res.send("We are on posts");
});

router.get('/numbers', (req, res) => {
    res.send("We are on numbers.")
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //to save to database
    const savedPost = await post.save(function(err){
        if(err){
             console.log(err);
             return;
        }
        res.json({ token: generateToken(user), user: user });
  });


});


module.exports = router;