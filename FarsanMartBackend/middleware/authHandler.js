const jwt = require("jsonwebtoken");

const authHandler = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, "FarsanMartBaka");
        const {email, password} = decodedToken;
        if(email === req.body.email){
            next();
        }else{
            throw "Invalid email ID.";
        }
    } catch {
        res.status(401).json({message: "User not Authorized."})
    }
};

module.exports = authHandler;