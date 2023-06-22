const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const auth = require("./middleware/authHandler");


const app = express();
app.use(cors({
    credentials: true,
    origin: ["*"]
}));

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/FarsanMart', {useNewUrlParser:true, useUnifiedTopology:true});

//on Connection
mongoose.connection.on('connected', ()=>{
    console.log("Connected to database @ 27017");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log("Server listening on port " + port + ".")
    });
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("Error occured while connecting.."+err);
    }
});


app.use("/auth/", require("./routes/authentcationRoutes"));

