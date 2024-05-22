//const express = require("express");
// const mongoose = require('mongoose');
//const port = 3000;
//const app = express();
//app.use(express.json());
//async function run() {
//  await mongoose.connect('mongodb://127.0.0.1:27017/sensordb');
//  const authschema = new mongoose.Schema({
//    email: {
//        type: String,
//        required: true
//      },
//      password: {
//        type: String,
//        required: true
//      }
//  });
//  
//  const Auth = await mongoose.model("Auth" , authschema);
//  const auth = new Auth({
//    email:"tasneem@gmail.com",
//    password:"1234"
//  });
//  auth.save();

  //await mongoose.model('User').findOne(); // Works!
//}

//const mongo =  mongoose.connect("mongodb://127.0.0.1:27017/sensordb" , {useNewUrlParser: true});
//// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));
//
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to bezkoder application." });
//});
//app.listen(port, () => {
//  console.log(`Server is running on port ${port}.`);
//});
module.exports = mongoose => {
  const authschema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

  //schema.method("toJSON", function() {
  //  const { __v, _id, ...object } = this.toObject();
  //  object.id = _id;
  //  return object;
  //});

  const Auth = mongoose.model("Auth" , authschema);
  return Auth;
  
};