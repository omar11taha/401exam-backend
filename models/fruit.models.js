'use strict';
const mongoose = require("mongoose");

const Fruits = new mongoose.Schema({
    name: {type:String},
    desc: {type:String},
    img: {type:String},
    email: {type:String},
});

const fruit = mongoose.model("fruit", Fruits);

module.exports( fruit);