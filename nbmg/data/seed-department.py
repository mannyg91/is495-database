#!/usr/bin/python3

import csv

header = """
'use strict\';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */

       await queryInterface.bulkInsert('departments',[
"""

print(header)


with open('IS495DB-DEPARTMENT-BCK.csv',newline='\n') as csvfile:
    csv_reader = csv.DictReader(csvfile,delimiter=',')
    for row in csv_reader:
        print(row)
        print(',')

tail = """
  ],{});

     /*
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('departments', null, {});
  }
}; """
print(tail)
