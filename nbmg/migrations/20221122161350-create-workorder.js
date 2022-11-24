'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      WorkOrderID: {
        type: Sequelize.INTEGER
      },
      EmployeeID: {
        type: Sequelize.INTEGER
      },
      CustomerID: {
        type: Sequelize.INTEGER
      },
      PriorityID: {
        type: Sequelize.INTEGER
      },
      StatusID: {
        type: Sequelize.INTEGER
      },
      SubmittedDate: {
        type: Sequelize.DATE
      },
      WorkOrderDescription: {
        type: Sequelize.STRING
      },
      StartDate: {
        type: Sequelize.DATE
      },
      DueDate: {
        type: Sequelize.DATE
      },
      ClosedDate: {
        type: Sequelize.DATE
      },
      Notes: {
        type: Sequelize.STRING
      },
      ProjectName: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('workorders');
  }
};