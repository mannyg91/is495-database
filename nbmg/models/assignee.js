'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assignee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assignee.init({
  	AssigneeID: DataTypes.INTEGER,
	EmployeeID: DataTypes.INTEGER,
	WorkOrderID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'assignee',
  });
  return assignee;
};
