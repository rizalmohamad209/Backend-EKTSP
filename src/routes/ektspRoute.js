const ektspRoute = require("express").Router()
const ektspController = require("../controllers/ektspController")
const authMiddleware = require("../helpers/authMiddleware")
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinary = require("../helpers/cloudinary")

ektspRoute.post("/", authMiddleware.checkLogin, ektspController.createEKtsp)
ektspRoute.get("/", authMiddleware.checkLogin, ektspController.getKtspByUser)
ektspRoute.put("/:id", authMiddleware.checkLogin, uploadMiddleware.single("file"), cloudinary, ektspController.updateKtspByUser)
ektspRoute.get("/:id", authMiddleware.checkLogin, ektspController.getKtespById)



module.exports = ektspRoute