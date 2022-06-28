'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let repositories = []

    repositories.push(
      {
        name: 'perritos',
        visibility: false,
        userId: 1,
        createdAt: new Date,
        updatedAt: new Date,
      });
    repositories.push(
      {
        name: 'gatitos',
        visibility: true,
        userId: 1,
        createdAt: new Date,
        updatedAt: new Date,
      });
    await queryInterface.bulkInsert('Repositories', repositories, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Repositories', null, {});
  }
};
