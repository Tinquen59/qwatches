import { ObjectId } from "bson";
import multer from "multer";

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
}

/**
 * download the file to the pc and change the name of the field
 */
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/images");
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const fileId = new ObjectId();
        callback(null, fileId + "-" + Date.now() + '.' + extension);
    }
});


export const upload = multer({ storage });