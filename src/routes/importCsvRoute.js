const authRoutes = require("express").Router();
const importCsvController = require("../controllers/exportCsvController")
const upload = require("../helpers/uploadMiddleware")


authRoutes.post("/kepsek", upload.single("file"), importCsvController.importKepsekCsv)
authRoutes.post("/operator", upload.single("file"), importCsvController.importOperatorCsv)
authRoutes.post("/komite", upload.single("file"), importCsvController.importKomiteCsv)
authRoutes.post("/sekolah", upload.single("file"), importCsvController.importSekolahCsv)
authRoutes.post("/user", upload.single("file"), importCsvController.importUserAccountCsv)
authRoutes.post("/pengawas", upload.single("file"), importCsvController.importPengawasCsv)


module.exports = authRoutes;