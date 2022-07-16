const { kepsek, operator, komite, sekolah, userAccount, pengawas } = require("../models")
const fs = require("fs");
const { uuid } = require('uuidv4');
const csv = require("fast-csv");
const bcrypt = require("bcrypt")

module.exports = {
    importKepsekCsv: (req, res) => {

        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let kepsekCsv = [];
            let path = "./public/csv/" + req.file.filename;
            let saltRounds = 4

            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {

                    let newData = {
                        ...row,

                        password: bcrypt.hashSync(row.password, saltRounds)


                    }
                    kepsekCsv.push(newData);

                })
                .on("end", () => {
                    kepsek.bulkCreate(kepsekCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "Ssccess import to database:" + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error.message,
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }


    },
    importOperatorCsv: (req, res) => {

        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let operatorCsv = [];
            let path = "./public/csv/" + req.file.filename;
            let saltRounds = 4
            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    console.log(row.password);
                    let newData = {
                        ...row,


                        password: bcrypt.hashSync(row.password, saltRounds)
                    }
                    operatorCsv.push(newData);

                })
                .on("end", () => {
                    operator.bulkCreate(operatorCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "SUccess import to database: " + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error.message,
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }


    },
    importKomiteCsv: (req, res) => {
        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let komiteCsv = [];
            let path = "./public/csv/" + req.file.filename;
            let saltRounds = 4
            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    console.log(row.password);
                    let newData = {
                        ...row,


                        password: bcrypt.hashSync(row.password, saltRounds)
                    }
                    komiteCsv.push(newData);

                })
                .on("end", () => {
                    komite.bulkCreate(komiteCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "SUccess import to database: " + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error.message,
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }
    },
    importSekolahCsv: (req, res) => {
        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let sekolahCsv = [];
            let path = "./public/csv/" + req.file.filename;
            let saltRounds = 4

            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    let newData = {
                        ...row,
                        password: bcrypt.hashSync(row.password, saltRounds)


                    }
                    sekolahCsv.push(newData);

                })
                .on("end", () => {
                    sekolah.bulkCreate(sekolahCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "SUccess import to database: " + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error.message,
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }
    },
    importUserAccountCsv: (req, res) => {
        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let sekolahCsv = [];
            let path = "./public/csv/" + req.file.filename;

            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    let newData = {
                        ...row,


                    }
                    sekolahCsv.push(newData);

                })
                .on("end", () => {
                    userAccount.bulkCreate(sekolahCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "SUccess import to database: " + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error.message,
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }
    },
    importPengawasCsv: (req, res) => {
        try {
            if (req.file == undefined) {
                return res.status(400).send("Please upload a CSV file!");
            }
            let pengawasCsv = [];
            let path = "./public/csv/" + req.file.filename;
            let saltRounds = 4
            fs.createReadStream(path)
                .pipe(csv.parse({ headers: true }))
                .on("error", (error) => {
                    throw error.message;
                })
                .on("data", (row) => {
                    console.log(row.password);
                    let newData = {
                        ...row,



                        password: bcrypt.hashSync(row.password, saltRounds)
                    }
                    pengawasCsv.push(newData);

                })
                .on("end", () => {
                    pengawas.bulkCreate(pengawasCsv)
                        .then(() => {
                            res.status(200).send({
                                message:
                                    "Success import to database: " + req.file.originalname,
                            });
                        })
                        .catch((error) => {
                            res.status(500).send({
                                message: "Fail to import data into database!",
                                error: error
                            });
                        });
                });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }
    },
}