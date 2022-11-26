'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iporate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  iporate.init({
    IPORateID: DataTypes.INTEGER,
    ServiceRateID: DataTypes.INTEGER,
    IPOID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'iporate',
  });
  return iporate;
};
