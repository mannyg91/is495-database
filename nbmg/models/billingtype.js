'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class billingtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  billingtype.init({
	  BillingTypeID: DataTypes.INTEGER,
	  BillingType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'billingtype',
  });
  return billingtype;
};
