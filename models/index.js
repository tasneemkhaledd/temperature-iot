/* const mongoose = require('mongoose');
const express = require('express');
//import bodyParser from "body-parser";
mongoose.connect("mongodb://127.0.0.1:27017/sensordb" , {useNewUrlParser: true});
const app = express();
const port = 3000;
const Lists = [];
app.use(bodyParser.urlencoded({ extended: true }));
const heartrateschema = new mongoose.Schema({
    name:String,
    rate:Number,
});
//collection
const Heartrate = mongoose.model("Heartrate" , heartrateschema);
//document
const heartrate = new Heartrate({
    name:"Heartrate",
    rate:120,
});

app.get("/" , async(req , res)=>{
    //getting all data from database
        const rates = await Heartrate.find({});
    res.render("index.ejs" , {Lists:rates});
});
 app.post("/" , (req , res)=>{
    const patientname = req.body.newname;
    const patientrate = req.body.newrate;
    const newpatient = new Heartrate({
        name:patientname,
        rate:patientrate
    });
    newpatient.save();
    res.redirect("/");
}); 
app.post("/delete" , async(req , res)=>{
const itemid = req.body.button;
await Heartrate.deleteOne({ _id: itemid });
res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  */
  const dbConfig = require("../config/db.config.js");

  const mongoose = require("mongoose");
  mongoose.Promise = global.Promise;
  
  const db = {};
  db.mongoose = mongoose;
  db.url = dbConfig.url;
  db.temps = require("./temp.model.js")(mongoose);
  db.auths = require("./auth.model.js")(mongoose);
  module.exports = db; 