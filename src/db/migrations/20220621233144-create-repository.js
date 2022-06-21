'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Repositories', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING
      },
      visibility: {
        type:DataTypes.BOOLEAN,
        defaultValue: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Repositories');
  }
};