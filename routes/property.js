const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/addproperty", upload.array("Images", 6), (req, res) => {
  const images = req.files.map((file) => {
    return {
      data: fs.readFileSync(file.path),
      contentType: file.mimetype,
    };
  });

  const saveImage = new Property({
    availability: req.body.availability,
    propertytype: req.body.propertytype,
    sellingprice: req.body.sellingprice,
    description: req.body.description,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    carparks: req.body.carparks,
    floorarea: req.body.floorarea,
    homefeatures: req.body.homefeatures,
    neighborhoodfeatures: req.body.neighborhoodfeatures,
    foodhubs: req.body.foodhubs,
    grocery: req.body.grocery,
    gym: req.body.gym,
    school: req.body.school,
    store: req.body.store,
    hospital: req.body.hospital,
    neighborhoodvicinity: req.body.neighborhoodvicinity,
    images: images,
  });

  saveImage
    .save()
    .then(() => {
      console.log("Property Successfully added!");
      res.send("Property Successfully added!");
    })
    .catch((err) => {
      console.log(err, "Error has occurred");
      res.status(500).send("Error occurred while saving images");
    });
});

router.get("/allproperties", async (req, res) => {
  const allData = await Property.find();
  res.json(allData);
});

module.exports = router;
