// Create web server application with Node.js and Express.js
// By: Geoffrey Jarman
// Date: August 12, 2020
//*********************************************************

// modules

const express = require('express');
const router = express.Router();

// middleware

const auth = require('../middleware/auth');

// model

const Comment = require('../models/Comment');

// route handlers

// route handler for POST to add a comment

router.post('/', auth, async (req, res) => {
    try {
        const newComment = new Comment({
            text: req.body.text,
            user: req.body.user,
            post: req.body.post
        });

        const comment = await newComment.save();
        res.json(comment);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// route handler for GET all comments
