'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operators', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      namaOperator: {
        allowNull: true,
        type: Sequelize.STRING
      },
      noOperator: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      password: {
        type: Sequelize.STRING
      },
      emailOperator: {
        type: Sequelize.STRING
      },
      fotoOperator: {
        allowNull: true,
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operators');
  }
};