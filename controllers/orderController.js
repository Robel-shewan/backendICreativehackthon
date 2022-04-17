import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";

const registerOrder = asyncHandler(async (req, res) => {
  const { name, email, service, status } = req.body;

  const order = await Order.create({
    name,
    email,
    service,
    status,
  });

  if (order) {
    res.status(201).json({
      user: order._id,
      email: order.email,
      service: order.service,
      status: order.status,
    });
  } else {
    res.status(400);
    throw new Error("Invalid  order data");
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({});
  res.json(order);
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await order.findById(req.params.id);

  if (order) {
    const result = await order.remove();
    res.json({ result });
  } else {
    res.status(404);
    throw new Error("order not found");
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("order not found");
  }
});

export { registerOrder, getOrders, deleteOrder, getOrderById };
