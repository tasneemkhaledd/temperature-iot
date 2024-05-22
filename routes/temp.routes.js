module.exports = app => {
    const temps = require("../controllers/temp.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", temps.create);
  
    // Retrieve all Tutorials
    router.get("/", temps.getAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", temps.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", temps.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", temps.delete);
  
    // Create a new Tutorial
    router.delete("/", temps.deleteAll);

  
    app.use("/temps", router);
  };
  