const authController = require("../controllers/auth/authController");
const authRoutes = require("express").Router();
authRoutes.post("/signin-operator", authController.signInOperator)
authRoutes.post("/signin-kepsek", authController.signInKepsek)

module.exports = authRoutes;