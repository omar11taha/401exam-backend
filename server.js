'use strict';
const express = require('express') ;
const axios = require('axios');
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/_YOUR_DB_NAME_", { useNewUrlParser: true });
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect();


const {
    getfruit,
    creatfruit,
    updatefruit,
    deletfruit,
    getuserfruit,
}

app.get("/fruit",getfruit );
app.get("/fruit/:email",creatfruit );
app.get("/fruit",updatefruit );
app.get("/fruit/:id",deletfruit );
app.get("/fruit/:id",getuserfruit );