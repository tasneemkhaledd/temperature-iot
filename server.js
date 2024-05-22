const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
const dbconfig = require("./config/db.config.js");
const nodemailer = require('nodemailer');
//const db = require("../models");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Temp = db.temps;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mostafatarek7274@gmail.com",
      pass: "hkzb ocbi sfxt dxbn",
    },
  });
  
  
  async function checkTemperatureAndSendEmail() {
    try {
      
      const latestTemperature = await Temp.findOne().sort({ _id: -1 }).limit(1);
       
  
      if ( latestTemperature && latestTemperature.payload > 25) {
        
        const mailOptions = {
          from: "mostafatarek7274@gmail.com",
          to: "tasneemk115@gmail.com",
          subject: "High Temperature Alert",
          text: `Temperature is above 25 degrees: ${latestTemperature.payload}°C`,
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });
      } 
    else {
        console.log("Temperature is not above 25 degrees. No email sent.");
      }
    } catch (error) {
      console.error("Error checking temperature:", error);
    }
  }
  
  
  setInterval(checkTemperatureAndSendEmail, 30000);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/temp.routes.js")(app);
require("./routes/auth.routes.js")(app);


const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${PORT}.`);
});
