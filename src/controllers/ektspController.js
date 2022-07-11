const { ktsp } = require("../models")
const { uuid } = require("uuidv4")
module.exports = {
    createEKtsp: (req, res) => {
        let { body } = req;
        let newData = {
            ...body,
            operatorId: req.deCodeToken.id
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
            where: {
                operatorId: req.deCodeToken.id
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
    }
}