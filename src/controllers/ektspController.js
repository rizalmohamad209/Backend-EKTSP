
const { ktsp, sekolah } = require("../models")
const { uuid } = require("uuidv4")


module.exports = {
    createEKtsp: (req, res) => {
        let { body } = req;
        let newData = {
            ...body,
            pengawasId: req.deCodeToken.id
        }

        ktsp.create(newData).then((data) => {
            res.status(200).send({
                msg: "Success create ktsp",
                status: 200,
                data: data
            })
        }).catch((err) => {
            res.status(500).send({
                msg: "Failed create ktsp",
                status: 500,
                error: err.message
            })
        })
    },
    getKtspByUser: (req, res) => {
        ktsp.findAll({
            include: [
                {
                    model: sekolah,
                    as: "sekolahs",
                    attributes: ['namaSekolah']


                },
            ],
            where: {
                pengawasId: req.deCodeToken.id
            }
        }).then((data) => {
            res.status(200).send({
                msg: "Success get all ktsp",
                status: 200,
                data: data
            })
        }).catch((err) => {
            res.status(500).send({
                msg: "Failed get all ktsp",
                status: 500,
                error: err.message
            })
        })
    },
    updateKtspByUser: async (req, res) => {
        const { id } = req.params;
        let { body } = req;



        try {
            let findKtsp = await ktsp.findOne({
                where: { id }
            })

            if (findKtsp === null) {
                res.status(404).send({
                    msg: "Update ktsp failed",
                    status: 404,
                    error: "Data not found",
                });
            }

            if (req.image !== undefined) {


                let newData = {
                    ...body,
                    pdfUrl: req.image.url
                }


                ktsp.update(newData, { where: { id }, individualHooks: true }).then((data) => {
                    const resObject = { ...findKtsp.dataValues, ...body };
                    res.status(200).send({
                        msg: "Succes update ktsp",
                        status: 200,
                        data: resObject,
                    });
                }).catch((err) => {
                    res.status(500).send({
                        msg: "Failed while update ktsp",
                        status: 500,
                        error: err,
                    });

                })

            } else {

                let newData = {
                    ...body,
                }


                ktsp.update(newData, { where: { id }, individualHooks: true }).then((data) => {
                    const resObject = { ...findKtsp.dataValues, ...body };
                    res.status(200).send({
                        msg: "Succes update ktsp",
                        status: 200,
                        data: resObject,
                    });
                }).catch((err) => {
                    res.status(500).send({
                        msg: "Failed while update ktsp",
                        status: 500,
                        error: err,
                    });

                })
            }


        } catch (err) {
            res.status(500).send({
                message: "Update ktsp failed",
                error: err.message
            });
        }

    }
    ,
    getKtespById: (req, res) => {
        let { id } = req.params

        ktsp.findOne({ where: { id } }).then((data) => {
            res.status(200).send({
                msg: "Success get ktsp by id",
                status: 200,
                data: data
            })
        }).catch((err) => {
            res.status(500).send({
                msg: "Failed get ktsp by id",
                status: 500,
                error: err.message
            })
        })
    },
    getKtspBySekolah: (req, res) => {


        ktsp.findOne({
            where: {
                sekolahId: req.deCodeToken.id
            }
        }).then((data) => {
            res.status(200).send({
                msg: "Success get ktsp by sekolah",
                status: 200,
                data: data
            })
        }).catch((err) => {
            res.status(500).send({
                msg: "Failed get ktsp by sekolah",
                status: 500,
                error: err.message
            })
        })
    }
}