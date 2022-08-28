'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pets.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    unitOfWeight: DataTypes.STRING,
    health: DataTypes.STRING,
    owner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pets',
  });
  return pets;
};