'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.operator, {
        as: "usersOperator",
        foreignKey: "userId"
      })

      this.belongsTo(models.kepsek, {
        as: "usersKepsek",
        foreignKey: "userId"
      })

      this.belongsTo(models.pengawas, {
        as: "usersPengawas",
        foreignKey: "userId"
      })

      this.belongsTo(models.sekolah, {
        as: "usersSekolah",
        foreignKey: "userId"
      })

    }
  }
  userAccount.init({
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'userAccount',
  });
  return userAccount;
};