import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  authUser,
  disableUser,
  makeAdmin,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.post("/me/admin", makeAdmin);
// router.route("/profile").get(protect,getUserProfile).put(updateUserProfile);
router.route("/:id").get(protect, getUserById).put(protect, updateUser);
router.route("/disable/:id").get(disableUser);
router.route("/").get(getUsers).post(registerUser);

export default router;
