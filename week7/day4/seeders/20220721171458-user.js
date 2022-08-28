"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // SCHEMA columns are: id, firstName, lastName, email, createdAt, updatedAt
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Joe",
          lastName: "Doe",
          email: "joe@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "June",
          lastName: "Doe",
          email: "june@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jamie",
          lastName: "Doe",
          email: "jamie@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jordan",
          lastName: "Doe",
          email: "jordan@john.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};