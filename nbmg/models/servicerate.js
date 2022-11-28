'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicerate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicerate.init({
    ServiceRateID: DataTypes.INTEGER,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    FiscalYear: DataTypes.STRING,
    Rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'servicerate',
  });
  return servicerate;
};
