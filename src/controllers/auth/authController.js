const { operator, kepsek, userAccount } = require("../../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize")

module.exports = {

    signIn: async (req, res) => {
        const { body } = req;

        try {
            let findUserOperator = await userAccount.findOne({
                include: [
                    {
                        model: operator,
                        as: "usersOperator",
                        where: {
                            emailOperator: body.email
                        }

                    },
                ],
            });

            let findUserKepsek = await userAccount.findOne({
                include: [
                    {
                        model: kepsek,
                        as: "usersKepsek",
                        where: {
                            emailKepsek: body.email
                        }
                    }
                ]
            })

            let user = {}

            if (!findUserOperator & !findUserKepsek) {
                res.status(404).send({
                    msg: "Sign In is error",
                    status: 404,
                    error: "User not found",
                });
            }
            if (findUserOperator) {
                user = findUserOperator.dataValues




            } else if (findUserKepsek) {
                user = findUserKepsek.dataValues.usersKepsek

            }


            const isValidPassword = bcrypt.compareSync(
                body.password,
                user.dataValues.password
            );

            if (!isValidPassword) {
                res.status(403).send({
                    msg: "Sign is error",
                    status: 403,
                    error: "Password is invalid",
                });
            }


            const payload = {
                id: user.dataValues.id,
                role: user.dataValues.role,
                email: user.dataValues.email,
            };


            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 86400,
            });

            let data = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                nama: user.dataValues.namaKepsek,
                role: user.dataValues.role
            }

            res.status(200).send({
                msg: "Sign-in Succesfully",
                status: 200,
                data: { ...data, token },
            });

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Could not upload the file: " + req.file.originalname,
            });
        }
    },

    logout: async (req, res) => {
        let blackListToken = req.header("authorization").split(" ")[1];
    },
}