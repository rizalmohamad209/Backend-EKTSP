const sekolahRoute = require("express").Router();
const sekolahController = require("../controllers/sekolahController")
sekolahRoute.get("/", sekolahController.getAllSekolah)

module.exports = sekolahRoute