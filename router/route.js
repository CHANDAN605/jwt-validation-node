import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createUserlist,
  getUserLogin,
  getUserList,
} from "../controller/user-controller.js";
const router = express.Router();

router.post("/createuser", createUserlist);
router.post("/userlogin", getUserLogin);
router.get("/userlist", verifyToken, getUserList);

export default router;
