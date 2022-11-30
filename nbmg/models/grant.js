'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grant.init({
    WorkOrderGrantID: DataTypes.INTEGER,
    WorkOrderID: DataTypes.INTEGER,
    GrantID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grant',
  });
  return Grant;
};
