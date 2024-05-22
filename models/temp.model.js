  module.exports = mongoose => {
    const tempschema = new mongoose.Schema({
        payload:Number,
        temperature:Number,
        createdAt: { type: Date, default: Date.now }
    });
  
    
  
    const Temp = mongoose.model("Temp" , tempschema);
    return Temp;
    
  };  
  ///////////////till here the original code 
//  const mongoose = require('mongoose');
//mongoose.connect("mongodb://127.0.0.1:27017/sensordb" , {useNewUrlParser: true}); 
//const tempschema = new mongoose.Schema({
//    location:String,
//    temperature:Number,
//});
//const Temp = mongoose.model("Temp" , tempschema);
//const temperature = new Temp({
//        location:"helwan",
//        temperature:30
//    });
//    temperature.save();
//    console.log("running");