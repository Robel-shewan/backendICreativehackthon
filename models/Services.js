import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Service = mongoose.model("service", serviceSchema);

export default Service;
