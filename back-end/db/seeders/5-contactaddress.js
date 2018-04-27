'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('contactInfos', [{
            name: 'Main HQ',
            value: 'Stark Tower',
            icon: 'home',
            isPrimary: true,
            isMappable: true,
            longtitude: 40.758738,
            latitude: -73.984961,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('contactInfos', [{
            name: 'Main HQ',
            value: 'Stark Tower',
            icon: 'home',
            isPrimary: true,
            isMappable: true,
            longtitude: 40.758738,
            latitude: -73.984961,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        }], {});
    },
};
