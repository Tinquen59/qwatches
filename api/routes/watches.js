import express from "express";
const router = express.Router();

import auth from "../middleware/auth";
import { upload } from "../middleware/multerConfig";

import {
    newWatch,
    searchWatches,
    detailWatch,
    allWatches,
    getMyWatches,
    removeMyWatches
} from "../controllers/watches";

router.get("/all-watches", auth, allWatches);
router.post("/search-watches", auth, searchWatches);
router.post("/detail-watch", auth, detailWatch);
router.post("/new-watch", auth, upload.single("watchImage"), newWatch);
router.post("/my-watches", auth, getMyWatches);
router.delete("/my-watch/:id", auth, removeMyWatches);

export default router;