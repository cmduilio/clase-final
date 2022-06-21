'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let repositories = []

    repositories.push(
      {
        name: 'perritos',
        visibility: false
      });
    repositories.push(
      {
        name: 'gatitos'
      });
    await queryInterface.bulkInsert('Repositories', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Repositories', null, {});
  }
};
