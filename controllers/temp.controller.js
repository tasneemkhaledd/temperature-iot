const db = require("../models");
const Temp = db.temps;





exports.create = (req, res) => {
    const theplace = req.body.location;
    const thetemperature = req.body.temperature;
    const temperature = new Temp({
        location:theplace,
        temperature:thetemperature
    });
    temperature.save()
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the record."
        });
      });
  };
  exports.getAll = async(req, res) => {
    const temperatures /*rates */ = await Temp.find({})
      .then((data) => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  exports.findOne = async(req, res) => {
     const id = req.params._id;
    

   
     Temp.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No record found for a patient with this id " + _id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving patient with id="  });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Temp.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update record with id=${_id}. Maybe Record was not found!`
          });
        } else res.send({ message: "record was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating record with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const _id = req.params.id;
  
    Temp.findByIdAndDelete(_id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete record with id=${_id}. Maybe record was not found!`
          });
        } else {
          res.send({
            message: "Record was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Record with id=" + _id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Temp.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Records were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all records."
        });
      });
  };
  