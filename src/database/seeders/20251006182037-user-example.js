'use strict';
const brcypt = require('bcryptjs');
const salt = brcypt.genSaltSync(10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Jose',
        lastName: 'Benitez',
        password: brcypt.hashSync('123456', salt),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ana',
        lastName: 'Gomez',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
     return await queryInterface.bulkDelete('users', null, {});
  }
};
