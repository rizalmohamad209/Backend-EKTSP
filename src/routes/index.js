const mainRoutes = require("express").Router();
const authRoutes = require("./auhtRoute")
const importCsv = require("./importCsvRoute")
const sekolahRoute = require("./sekolahRoute")
const ektspRoute = require("./ektspRoute")

mainRoutes.use("/csv", importCsv)
mainRoutes.use("/auth", authRoutes);
mainRoutes.use("/sekolah", sekolahRoute)
mainRoutes.use("/ektsp", ektspRoute)

module.exports = mainRoutes