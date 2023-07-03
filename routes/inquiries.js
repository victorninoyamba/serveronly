const express = require("express");
const router = express.Router();
const Inquiries = require("../models/Inquiries");

router.post("/sendinquiry", async (req, res) => {
  const {
    fname,
    mname,
    lname,
    contact,
    email,
    address,
    occupation,
    message,
    status,
  } = req.body;
  try {
    await Inquiries.create({
      fname,
      mname,
      lname,
      contact,
      email,
      address,
      occupation,
      message,
      status,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

router.get("/getAllInquiries", async (req, res) => {
  try {
    const allInquiries = await Inquiries.find({});
    res.send({ status: "ok", data: allInquiries });
  } catch (error) {
    console.log(error);
  }
});

router.post("/deleteInquiry", async (req, res) => {
  const { inquiryid } = req.body;
  try {
    Inquiries.deleteOne({ _id: inquiryid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
