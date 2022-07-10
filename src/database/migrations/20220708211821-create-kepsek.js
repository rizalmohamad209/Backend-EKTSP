'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kepseks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      namaKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      emailKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      alamatKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fotoKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nipKepsek: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      golKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nikKepsek: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      npwpKepsek: {
        allowNull: true,
        type: Sequelize.STRING
      },
      noHpKepsek: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      password: {
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
    await queryInterface.dropTable('kepseks');
  }
};