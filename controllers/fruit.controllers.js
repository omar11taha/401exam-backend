"use strict";
const axios = require('axios');
const fruit = require ("../models/fruit.models");

const getfruit =(req , res)=> {
    axios.get("").thien ((foundfruit)=>{
        res.json(foundfruit.data.json);
    })
};

const getuserfruit =(req ,res)=>{
    const email =req.params.email;
    fruit.find({email: email}, (error, foundfruit)=>
    res.json(newfruit)
    );
}

const creatfruit =(req,res=>{
    const {name ,desc , img , email} =req.body;
    const newfruit =new fruit({name ,desc , img , email});
    fruit.find({email: email}, (error, foundfruit)=>
    res.json(newfruit));
});