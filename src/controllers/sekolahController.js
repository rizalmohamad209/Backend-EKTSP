const { sekolah } = require("../models")

module.exports = {
    getAllSekolah: (req, res) => {
        try {

            sekolah.findAll().then((data) => {
                res.status(200).send({
                    msg: "Success get all sekolah",
                    status: 200,
                    data: data
                })
            }).catch((err) => {
                res.status(500).send({
                    msg: "Failed when get all sekolah",
                    status: 500,
                    err: err.message
                })
            })
        } catch (error) {
            res.status(500).send({
                message: "Could not get all sekolah",
            });

        }
    }
}