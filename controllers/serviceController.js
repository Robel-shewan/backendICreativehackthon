import asyncHandler from "express-async-handler";
import Service from "../models/Services.js";

const registerService = asyncHandler(async (req, res) => {
  const { name, description, price, images } = req.body;

  const service = await Service.create({
    user: req.user,
    name,
    description,
    price,
    images,
  });

  if (service) {
    res.status(201).json({
      user: service._id,
      name: service.name,
      description: service.description,
      price: service.price,
      images: service.images,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getServices = asyncHandler(async (req, res) => {
  const service = await Service.find({});
  res.json(service);
});

const deleteServices = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    const result = await service.remove();
    res.json({ result });
  } else {
    res.status(404);
    throw new Error("service not found");
  }
});

const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    res.json(service);
  } else {
    res.status(404);
    throw new Error("service not found");
  }
});

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    service.name = req.body.name || service.name;
    service.description = req.body.description || service.description;
    service.price = req.body.price;
    service.images = req.body.images;

    const updatedservice = await service.save();

    res.json({
      _id: updatedservice._id,
      name: updatedservice.name,
      description: updatedservice.description,
      price: updatedservice.price,
      images: updateService.images,
    });
  } else {
    res.status(404);
    throw new Error("Service  not found");
  }
});

export {
  registerService,
  getServices,
  deleteServices,
  getServiceById,
  updateService,
};
