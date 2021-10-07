import express from "express";
const router = express.Router();

// import auth from "../middleware/auth";
import {
    loginController,
    newUserController,
    getAccountInformation,
    setAccountController,
} from "../controllers/account";

router.post("/login", loginController);

router.post("/signup", newUserController);

router.post("/my-account", getAccountInformation);
router.put("/my-account", setAccountController);

export default router;