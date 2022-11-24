'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerID: {
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      EmailAddress: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.INTEGER
      },
      EmpAddress: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      EmpState: {
        type: Sequelize.STRING
      },
      ZipCode: {
        type: Sequelize.INTEGER
      },
      DepartmentID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};