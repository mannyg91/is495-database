'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init({
    EmployeeID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.INTEGER,
    EmpAddress: DataTypes.STRING,
    City: DataTypes.STRING,
    EmpState: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER,
    DepartmentID: DataTypes.INTEGER,
    JobTitleID: DataTypes.INTEGER,
    EmployeeTypeID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};