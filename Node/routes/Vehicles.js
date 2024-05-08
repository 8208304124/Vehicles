const router = require("express").Router();
const Vehicle = require("../Model/Vehicle");
const Joi = require("joi");
const user = require("../Model/user");
const schema = Joi.object({
  company: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.string().required(),
  type: Joi.string().required(),
});
const RegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  now: Joi.string().required(),
  typeOfVehicle: Joi.string().required(),
  model: Joi.string().required(),
  dateFrom: Joi.string().required(),
  dateTo: Joi.string().required()
});
// register the vehicle
router.post("/vehicles", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error)
    return res.json({ status: false, error: error.details[0].message });
  const vehicle = new Vehicle({
    company: req.body.company,
    model: req.body.model,
    year: req.body.year,
    type: req.body.type,
  });
  try {
    const vehicleSaved = await vehicle.save();
    res.send(vehicleSaved);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).send({ error: "Duplicate entry not allowed" });
    } else {
      // Other errors
      res.status(500).send({ error: "Internal server error" });
    }
  }
});

// Route to get unique vehicle types
router.get("/vehicles/types", async (req, res) => {
  try {
    const uniqueTypes = await Vehicle.distinct("company");
    res.status(200).send(uniqueTypes);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});



router.get("/vehicles/models", async (req, res) => {
  try {
    const { type, company } = req.query;
    const models = await Vehicle.find({ type, company });
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/vehicles/checkDate", async (req, res) => {
    try {
      const { type, company, model, startDate, endDate } = req.query;
      const users = await user.find({
        now: type,
        typeOfVehicle: company,
        model: model,
        dateFrom: { $lte: endDate }, // DateFrom should be less than or equal to endDate
        dateTo: { $gte: startDate } // DateTo should be greater than or equal to startDate
      });
  
      const isAvailable = users.length === 0; // If no overlapping bookings found, it's available
  
      res.status(200).json({ isAvailable: isAvailable });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/vehicles/register", async (req, res) => {
  const { error } = RegisterSchema.validate(req.body);
  if (error)
  return res.json({ status: false, error: error.details[0].message });
const userRegister = new user({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  now: req.body.now,
  typeOfVehicle: req.body.typeOfVehicle,
  model: req.body.model,
  dateFrom: req.body.dateFrom,
  dateTo: req.body.dateTo
});
try {
  const userSaved = await userRegister.save();
    res.send(userSaved);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).send({ error: "Duplicate entry not allowed" });
    } else {
      // Other errors
      res.status(500).send({ error: "Internal server error" });
    }
  }
})

module.exports = router;
