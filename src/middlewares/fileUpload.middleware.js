import multer from "multer";

const storageConfigh = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./resume/");  // Destination directory for uploads
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);  // Generating a unique filename
    }
});

export const upload = multer({ storage: storageConfigh });
