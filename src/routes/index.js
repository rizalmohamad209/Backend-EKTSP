const mainRoutes = require("express").Router();
const authRoutes = require("./auhtRoute")


mainRoutes.use("/auth", authRoutes);

module.exports = mainRoutes