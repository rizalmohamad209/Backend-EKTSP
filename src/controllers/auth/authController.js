const { operator, kepsek, userAccount, pengawas, sekolah } = require("../../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Op } = require("sequelize")

module.exports = {

    signIn: async (req, res) => {
        const { body } = req;

        try {
            // let findUserOperator = await userAccount.findOne({
            //     include: [
            //         {
            //             model: operator,
            //             as: "usersOperator",
            //             where: {
            //                 emailOperator: body.email
            //             }

            //         },
            //     ],
            // });

            // console.log(findUserOperator);

            let findUserPengawas = await userAccount.findOne({
                include: [
                    {
                        model: pengawas,
                        as: "usersPengawas",
                        where: {
                            nip: body.email
                        }

                    },
                ]
            })


            let findUserSekolah = await userAccount.findOne({
                include: [
                    {
                        model: sekolah,
                        as: "usersSekolah",
                        where: {
                            npsn: body.email
                        }

                    },
                ],
            });


            // let findUserKepsek = await userAccount.findOne({
            //     include: [
            //         {
            //             model: kepsek,
            //             as: "usersKepsek",
            //             where: {
            //                 emailKepsek: body.email
            //             }
            //         }
            //     ]
            // })

            let user = {}

            if (!findUserPengawas && !findUserSekolah) {
                res.status(404).send({
                    msg: "Sign In is error",
                    status: 404,
                    error: "User not found",
                });
            }


            if (findUserPengawas) {
                user = findUserPengawas.dataValues.usersPengawas
            }
            else if (findUserSekolah) {
                user = findUserSekolah.dataValues.usersSekolah
            }
            console.log('====================================');
            console.log(user);
            console.log('====================================');

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

            };


            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 86400,
            });



            res.status(200).send({
                msg: "Sign-in Succesfully",
                status: 200,
                data: { ...user.dataValues, token },
            });

        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: "Signin Failed",
            });
        }
    },

    logout: async (req, res) => {
        let blackListToken = req.header("authorization").split(" ")[1];
    },
}