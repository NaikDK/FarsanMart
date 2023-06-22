const express = require('express');
const {registeredUser, loginUser} = require("../controllers/authController");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../models/users');
const auth = require("../middleware/authHandler");

router.post("/register", async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.create(req.body);
        res.status(200).json({message: "Successfully created record."})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.route("/login").post(loginUser);


router.route("/user", auth).get((req, res) => {

    console.log("LoggedIn successfully");

});



module.exports = router;