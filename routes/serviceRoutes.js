import express from "express";

const router = express.Router();

import {
  registerService,
  getServices,
  getServiceById,
  updateService,
  deleteServices,
} from "../controllers/serviceController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);

// router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getServiceById).put(updateService);
router.route("/:id").delete(deleteServices);
router.route("/").get(getServices).post(registerService);

export default router;
