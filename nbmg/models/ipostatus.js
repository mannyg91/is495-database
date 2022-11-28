'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ipostatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ipostatus.init({
    IPOstatusID: DataTypes.INTEGER,
    IPOstatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ipostatus',
  });
  return ipostatus;
};
