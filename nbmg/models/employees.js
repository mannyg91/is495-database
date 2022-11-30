'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init({
    EmployeeID: DataTypes.INTEGER,
    FirsName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    EmployeeAddress: DataTypes.STRING,
    City: DataTypes.STRING,
    EmpState: DataTypes.STRING,
    ZipCode: DataTypes.INTEGER,
    DepartmentID: DataTypes.INTEGER,
    JobTitleID: DataTypes.INTEGER,
    EmployeeTypeID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};