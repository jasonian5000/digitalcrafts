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
   await queryInterface.bulkInsert(
     "Users",
     [
       {
         username: "Jasonian5000",
         password: "hahayeahright",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         username: "DadJOEkes",
         password: "hipassword",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         username: "GendrytheDog",
         password: "ilikepoop",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         username: "Batman",
         password: "darkknight",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
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
