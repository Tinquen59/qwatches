import express from "express";
const router = express.Router();

import { loginController, newUserController } from "../controllers/connection";

router.get("/login/:email", (req, res) => {
    loginController(req, res);
})

router.post("/signup", (req, res) => {
    newUserController(req, res);
})

export default router;