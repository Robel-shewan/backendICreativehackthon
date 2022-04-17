import express from "express";

const router = express.Router();

import {
  registerOrder,
  getOrderById,
  getOrders,
  deleteOrder,
} from "../controllers/orderController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);

// router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getOrderById).delete(deleteOrder);
router.route("/").post(registerOrder).get(getOrders);

export default router;
