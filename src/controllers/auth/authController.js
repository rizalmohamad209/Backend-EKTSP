const { operator, kepsek } = require("../../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize")

module.exports = {

    signInOperator: async (req, res) => {
        const { body } = req;

        let findOperator = await operator.findOne({
            where: {
                [Op.or]: [{ emailOperator: body.email }, { emailOperator: body.email }],
            },
        });
        if (!findOperator) {
            res.status(404).send({
                msg: "Sign In is error",
                status: 404,
                error: "User not found",
            });
        }

        const isValidPassword = bcrypt.compareSync(
            body.password,
            findOperator.dataValues.password
        );

        if (!isValidPassword) {
            res.status(403).send({
                msg: "Sign is error",
                status: 403,
                error: "Password is invalid",
            });
        }

        const payload = {
            id: findOperator.dataValues.id,
            username: findOperator.dataValues.username,
            role: findOperator.dataValues.role,
            email: findOperator.dataValues.email,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 86400,
        });

        delete findOperator.dataValues.password;

        res.status(200).send({
            msg: "Sign-in Succesfully",
            status: 200,
            data: { ...findOperator.dataValues, token },
        });
    },
    signInKepsek: async (req, res) => {
        const { body } = req;
        console.log(body);

        let findUser = await kepsek.findOne({
            where: {
                [Op.or]: [{ emailKepsek: body.email }, { emailKepsek: body.email }],
            },
        });
        console.log(findUser.dataValues);
        if (!findUser) {
            res.status(404).send({
                msg: "Sign In is error",
                status: 404,
                error: "User not found",
            });
        }

        const isValidPassword = () => {
            return body.password === findUser.dataValues.password

        }

        if (!isValidPassword) {
            res.status(403).send({
                msg: "Sign is error",
                status: 403,
                error: "Password is invalid",
            });
        }

        const payload = {
            id: findUser.dataValues.id,
            username: findUser.dataValues.username,
            role: findUser.dataValues.role,
            email: findUser.dataValues.email,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 86400,
        });

        delete findUser.dataValues.password;

        res.status(200).send({
            msg: "Sign-in Succesfully",
            status: 200,
            data: { ...findUser.dataValues, token },
        });
    },
    logout: async (req, res) => {
        let blackListToken = req.header("authorization").split(" ")[1];
    },
}