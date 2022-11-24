'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init({
    CustomerID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    EmailAddress: DataTypes.STRING,
    PhoneNumber: DataTypes.INTEGER,
    EmpAddress: DataTypes.STRING,
    City: DataTypes.STRING,
    EmpState: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER,
    DepartmentID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};