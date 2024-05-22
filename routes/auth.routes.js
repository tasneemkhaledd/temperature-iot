module.exports = app => {
    const auths = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/signup", auths.signup);
  
    
    router.post("/login", auths.login);
  
    app.use("/auths", router);
  };
  