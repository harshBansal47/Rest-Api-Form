//importing mongoose
const mongoose = require('mongoose');

const user= mongoose.Schema({
    user_personal:{
    name:String,
    age:Number,
    batch:String,
    },
    user_login:{
    email:String,
    password:String, 
    },
    user_payment:{
    nameOnCard:String,
    cardNumber:Number,
    expDate:Date,
    cvv:Number
    }
})

const User = mongoose.model("User",user);

module.exports = User;