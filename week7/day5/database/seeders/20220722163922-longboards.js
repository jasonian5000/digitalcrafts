'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      firstName: "Jason",
      lastName: "Blunck",
      email: "jb@email.com",
      password: "1234",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: "Blk",
      lastName: "Plrn",
      email: "pb@email.com",
      password: "5678",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  }
};
