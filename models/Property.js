const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  availability: Boolean,
  propertytype: String,
  sellingprice: Number,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  carparks: Number,
  floorarea: Number,
  homefeatures: String,
  neighborhoodfeatures: String,
  foodhubs: String,
  grocery: String,
  gym: String,
  school: String,
  store: String,
  hospital: String,
  neighborhoodvicinity: String,
  images: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

module.exports = Property = mongoose.model("PropertyDetails", imgSchema);
