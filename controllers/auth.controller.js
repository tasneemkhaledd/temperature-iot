const config = require("../config/db.config");
const db = require("../models");
const Auth = db.auths;
exports.signup = (req, res) => {
  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
  });
  auth.save()
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the record."
    });
  });
  res.send({ message: "You were registered successfully." });
};


exports.login = async(req, res) => {
  try {
    // check if the user exists
    const auth = await Auth.findOne({ email: req.body.email });
    if (auth) {
      //check if password matches
      //const result = req.body.password === user.password;
      if (req.body.password === auth.password) {
         res.status(200).send({
                      email: auth.email,
                      password:auth.password
                   }); 
                   
                   
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
