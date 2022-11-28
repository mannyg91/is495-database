'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workorder.init({
    WorkOrderID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    CustomerID: DataTypes.INTEGER,
    PriorityID: DataTypes.INTEGER,
    StatusID: DataTypes.INTEGER,
    SubmittedDate: DataTypes.DATE,
    WorkOrderDescription: DataTypes.STRING,
    StartDate: DataTypes.DATE,
    DueDate: DataTypes.DATE,
    ClosedDate: DataTypes.DATE,
    Notes: DataTypes.STRING,
    ProjectName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'workorder',
  });
  return workorder;
};