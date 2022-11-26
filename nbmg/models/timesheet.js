'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timesheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  timesheet.init({
    TimeSheetID: DataTypes.INTEGER,
    WorkOrderID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    EntryTypeID: DataTypes.INTEGER,
    BillingTypeID: DataTypes.INTEGER,
    TimeTypeID: DataTypes.INTEGER,
    SericeTypeID: DataTypes.INTEGER,
    IPOID: DataTypes.INTEGER,
    WorkDateTime: DataTypes.DATE,
    TimeWorkedHours: DataTypes.INTEGER,
    WorkPerformed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'timesheet',
  });
  return timesheet;
};
