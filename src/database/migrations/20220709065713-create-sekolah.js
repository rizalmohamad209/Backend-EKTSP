'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sekolahs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      idSekolah: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      kodeSekolah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      komiteId: {
        allowNull: true,
        type: Sequelize.UUID
      },
      kepsekId: {
        allowNull: true,
        type: Sequelize.UUID
      },
      operatorId: {
        allowNull: true,
        type: Sequelize.UUID
      },
      namaSekolah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      emailSekolah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      alamatSekolah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kecamatanSekolah: {
        allowNull: true,
        type: Sequelize.STRING
      },
      kodePos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      telpon: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      nss: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      instansiPemberiIzin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nomorSuratIzin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tglSuratIzin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      akreditasi: {
        allowNull: true,
        type: Sequelize.STRING
      },
      angkaAkreditasi: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      tahunAkreditasi: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      lembagaMenaungi: {
        allowNull: true,
        type: Sequelize.STRING
      },
      subRayon: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('sekolahs');
  }
};