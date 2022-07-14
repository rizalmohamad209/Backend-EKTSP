'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengawas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      nip: {
        unique: true,
        type: Sequelize.BIGINT
      },
      nama: {
        type: Sequelize.STRING
      },
      golongan: {
        type: Sequelize.STRING
      },
      jabatan: {
        type: Sequelize.STRING
      },
      unitKerja: {
        type: Sequelize.STRING
      },
      password: {
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
    await queryInterface.dropTable('pengawas');
  }
};