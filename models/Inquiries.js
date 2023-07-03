const mongoose = require("mongoose");

const CustomerInquiries = new mongoose.Schema(
  {
    fname: String,
    mname: String,
    lname: String,
    contact: String,
    email: String,
    address: String,
    occupation: String,
    message: String,
    status: String,
  },
  {
    collection: "Inquiries",
  }
);

mongoose.model("Inquiries", CustomerInquiries);
