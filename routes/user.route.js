import express from "express";
import { deleteUser } from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/jwt.js";
// import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
// router.get("/:id");
// router.get("/test",)

export default router;