const multer = require("multer");
const path = require("path");

const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("pdf", "csv")) {
        cb(null, true);
    } else {
        cb("Please upload only csv file.", false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/csv");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, `${Date.now()}-ektsp-${file.originalname}`);
    },
});


const uploadFile = multer({ storage: storage, fileFilter: csvFilter });
module.exports = uploadFile;
