'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.hasOne(models.reviewer, {foreignKey: 'reviewer_id'})
      models.review.hasOne(models.restaurant, {foreignKey: 'restaurant_id'})
    }
  }
  review.init({
    reviewer_id: DataTypes.NUMBER,
    stars: {
      type: DataTypes.NUMBER,
      validate: {
        min: 0,
        max: 5,
      }
    },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurant_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};