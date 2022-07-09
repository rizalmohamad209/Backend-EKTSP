'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('komites', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      namaKomite: {
        allowNull: true,
        type: Sequelize.STRING
      },
      noHpKomite: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      emailKomite: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      alamatKomite: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fotoKomite: {
        allowNull: true,
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
    await queryInterface.dropTable('komites');
  }
};