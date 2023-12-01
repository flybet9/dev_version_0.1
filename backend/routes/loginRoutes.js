import express from "express";
import { adminLogin, userByUsername, userLogin} from "../controller/user-controller.js";

const router = express.Router();

router.post("/admin", adminLogin); 
router.post("/user", userLogin); 
router.post("/user/:username", userByUsername); 

export default router;
