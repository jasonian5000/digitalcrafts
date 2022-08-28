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
   await queryInterface.bulkInsert('pets', [{
      name: 'Garfield',
      species: 'cat',
      age: 40,
      weight: "40",
      unitOfWeight: "lbs",
      health: "fair",
      owner: "Jon",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'Clifford',
      species: 'dog',
      age: 4,
      weight: "400",
      unitOfWeight: "lbs",
      health: "good",
      owner: "Sally",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'Trigger',
      species: 'horse',
      age: 100,
      weight: "500",
      unitOfWeight: "lbs",
      health: "old",
      owner: "Roy",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'Jiminy',
      species: 'cricket',
      age: 120,
      weight: "1",
      unitOfWeight: "lbs",
      health: "great",
      owner: "Walt",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'Gendry',
      species: 'dog',
      age: 5,
      weight: "40",
      unitOfWeight: "lbs",
      health: "wild",
      owner: "Jason",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
