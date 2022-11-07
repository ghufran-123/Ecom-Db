// connecting from database and requiring schema
const mongoose = require("mongoose");
const { Schema, model } = mongoose();
const url = "mongodb://localhost:27017/Ecom";
mongoose.connect(url);

// exporting Models
const { username, password, namePat } = require("../Models/models");

// exporting errMaker
const err = require("./errorMaker");

// creating user Schema
const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
    validator: {
      validate: namePat(value),
    },
  },
  Username: {
    type: String,
    required: true,
    validator: {
      validate: username(value),
    },
  },
  Password: {
    type: String,
    required: true,
    validator: {
      validate: password(value),
    },
  },
  Contactno: {
    type: Number,
    required: true,
    min: [10, "Invailide Contact Number"],
    max: [10],
  },
  Address: {
    type: String,
    required: true,
  },
  customerId: {
    type: Number,
    required: true,
    unique: true,
  },
});

// creating product schema
const productSchema = new Schema({
  prName: {
    type: String,
    required: true,
  },
  prId: {
    type: Number,
    required: true,
    unique: true,
  },
  prRate: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  emailofOwner: {
    type: String,
    required: true,
    validator: emailPat(value),
  },
});

// creating product selling Schema
const BillSchema = new Schema({
  prName: {
    type: String,
    required: true,
  },
  prId: {
    type: Number,
    required: true,
    unique: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  prRate: {
    type: Number,
    required: true,
  },
  purchasedBy: {
    type: String,
    required: true,
    validator: {
      validate: namePat(value),
    },
  },
  userId: {
    type: Number,
    required: true,
  },
});

// exporting all Functions
var Ecom = {};
Ecom.getUserSchema = async () => {
  return await mongoose.model("users", userSchema);
};
Ecom.getProductSchema = async () => {
  return await mongoose.model("Product", productSchema);
};
Ecom.getProductSellSchema = async () => {
  return await mongoose.model("ProductSell", BillSchema);
};
module.exports = Ecom;
