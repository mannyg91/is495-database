'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobtitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobtitle.init({
    JobTitleID: DataTypes.INTEGER,
    JobTitle: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'jobtitle',
  });
  return jobtitle;
};
