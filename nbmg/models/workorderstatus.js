'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workorderstatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workorderstatus.init({
    StatusID: DataTypes.INTEGER,
    StatusType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'workorderstatus',
  });
  return workorderstatus;
};
