const authController = require("../controllers/auth/authController");
const authRoutes = require("express").Router();
authRoutes.post("/signin", authController.signIn)


module.exports = authRoutes;