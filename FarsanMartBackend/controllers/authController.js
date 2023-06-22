const User = require("../models/users");
const asyncHandler = require("express")
const jwt = require("jsonwebtoken");
const registerUser = (req, res) => {
    res.json({message: "Registered User."});
}

const loginUser = asyncHandler(async (req, res) => {
    // User.find((err, users))
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email, password: password});
        if(user){
            res.json(generateToken(user));
        }
        else{
            res.status(400).json({message: "Email or Password is not valid."});
        }
    }catch(e) {
            res.status(400).json({message: "Some error occured."});
    }
});

const generateToken = (user) => {
    const token = jwt.sign({
        email : user.email,
        password: user.password
    }, "FarsanMartBaka", {
        expiresIn: "1d"
    });
    user.token = token;
    return user;
}

module.exports = { registerUser, loginUser };
