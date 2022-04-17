import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "user",
  },
  email: {
    type: String,
    required: true,
  },
  service: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;
