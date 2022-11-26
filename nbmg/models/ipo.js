'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ipo.init({
    IPOID: DataTypes.INTEGER,
    IPODATE: DataTypes.DATE,
    CreationDatee: DataTypes.DATE,
    PaymentDate: DataTypes.DATE,
    IPOStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ipo',
  });
  return ipo;
};
