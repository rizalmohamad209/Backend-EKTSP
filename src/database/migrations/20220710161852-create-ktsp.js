'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ktsps', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      operatorId: {
        type: Sequelize.UUID
      },
      sekolahId: {
        type: Sequelize.UUID
      },
      ektsp: {
        type: Sequelize.TEXT
      },
      status: {
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
    await queryInterface.dropTable('ktsps');
  }
};