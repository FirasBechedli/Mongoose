const express = require("express");

const mongoose = require('mongoose');
const app = express();
require("dotenv").config({ path: "./.env" });

const Person=require("./models/UserModel");

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('the database is connected...'))
.catch((err)=>console.log(err));


Person.findByIdAndRemove({_id:"5ff070520635840cf47a455e"}).then(Person=>console.log(Person)).catch(err=>console.log(err));
Person.find().then((Person)=>console.log(Person)).catch((err)=>console.log(err));
app.listen(process.env.Port, () => {
    console.log(`The Server is Running ${process.env.Port}....`);
});