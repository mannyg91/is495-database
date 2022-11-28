'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workorderpriority extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workorderpriority.init({
    PriorityID: DataTypes.INTEGER,
    PriorityType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'workorderpriority',
  });
  return workorderpriority;
};
