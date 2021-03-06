'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'TonyStark',
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tonystark@starkindustries.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 3,
    }, {
      userName: 'Vladi',
      firstName: 'Vladimir',
      lastName: 'Tumbev',
      email: 'vladi@tumbev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Joro',
      firstName: 'Georgi',
      lastName: 'Vasilev',
      email: 'georgi@vasilev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Jarvis',
      firstName: 'Tonys',
      lastName: 'Toy',
      email: 'jarvis@starkindustries.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Honeybee',
      firstName: 'Honey',
      lastName: 'Bee',
      email: 'honey@bee.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Tick42',
      firstName: 'Tick',
      lastName: '42',
      email: 'tick@42.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Veshoff',
      firstName: 'Marto',
      lastName: 'Veshev',
      email: 'marto@veshev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'BogaNaDotDotDot',
      firstName: 'Boga',
      lastName: 'AKABOG',
      email: 'boga@dot.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'DonchoWorry',
      firstName: 'Doncho',
      lastName: 'Minkov',
      email: 'doncho@minkov.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Valio',
      firstName: 'Valentin',
      lastName: 'Anchev',
      email: 'valentin@anchev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Classic',
      firstName: 'Martin',
      lastName: 'Donevski',
      email: 'marto@donevskiakaClassic.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'FakeStark',
      firstName: 'Stark',
      lastName: 'Tony',
      email: 'fake@stark.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      userName: 'TonyStark',
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tonystark@starkindustries.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 3,
    }, {
      userName: 'Vladi',
      firstName: 'Vladimir',
      lastName: 'Tumbev',
      email: 'vladi@tumbev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Joro',
      firstName: 'Georgi',
      lastName: 'Vasilev',
      email: 'georgi@vasilev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Jarvis',
      firstName: 'Tonys',
      lastName: 'Toy',
      email: 'jarvis@starkindustries.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 2,
    }, {
      userName: 'Honeybee',
      firstName: 'Honey',
      lastName: 'Bee',
      email: 'honey@bee.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Tick42',
      firstName: 'Tick',
      lastName: '42',
      email: 'tick@42.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Veshoff',
      firstName: 'Marto',
      lastName: 'Veshev',
      email: 'marto@veshev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'BogaNaDotDotDot',
      firstName: 'Boga',
      lastName: 'AKABOG',
      email: 'boga@dot.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'DonchoWorry',
      firstName: 'Doncho',
      lastName: 'Minkov',
      email: 'doncho@minkov.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Valio',
      firstName: 'Valentin',
      lastName: 'Anchev',
      email: 'valentin@anchev.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'Classic',
      firstName: 'Martin',
      lastName: 'Donevski',
      email: 'marto@donevskiakaClassic.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }, {
      userName: 'FakeStark',
      firstName: 'Stark',
      lastName: 'Tony',
      email: 'fake@stark.com',
      password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    }]);
  },
};
