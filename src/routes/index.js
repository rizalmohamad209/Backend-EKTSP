const mainRoutes = require("express").Router();
const authRoutes = require("./auhtRoute")
const importCsv = require("./importCsvRoute")
const sekolahRoute = require("./sekolahRoute")

mainRoutes.use("/csv", importCsv)
mainRoutes.use("/auth", authRoutes);
mainRoutes.use("/sekolah", sekolahRoute)

module.exports = mainRoutes