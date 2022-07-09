'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sekolahs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      idSekolah: {
        type: Sequelize.INTEGER
      },
      kodeSekolah: {
        type: Sequelize.STRING
      },
      komiteId: {
        type: Sequelize.UUID
      },
      kepsekId: {
        type: Sequelize.UUID
      },
      operatorId: {
        type: Sequelize.UUID
      },
      namaSekolah: {
        type: Sequelize.STRING
      },
      emailSekolah: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      alamatSekolah: {
        type: Sequelize.STRING
      },
      kecamatanSekolah: {
        type: Sequelize.STRING
      },
      kodePos: {
        type: Sequelize.INTEGER
      },
      telpon: {
        type: Sequelize.BIGINT
      },
      nss: {
        type: Sequelize.BIGINT
      },
      instansiPemberiIzin: {
        type: Sequelize.STRING
      },
      nomorSuratIzin: {
        type: Sequelize.STRING
      },
      tglSuratIzin: {
        type: Sequelize.STRING
      },
      akreditasi: {
        type: Sequelize.STRING
      },
      angkaAkreditasi: {
        type: Sequelize.INTEGER
      },
      tahunAkreditasi: {
        type: Sequelize.INTEGER
      },
      lembagaMenaungi: {
        type: Sequelize.STRING
      },
      subRayon: {
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