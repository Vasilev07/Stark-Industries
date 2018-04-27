'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('contactInfos', [{
            name: 'Main HQ',
            value: 'Stark Tower, New York, NYC',
            icon: 'home',
            isPrimary: true,
            isMappable: true,
            latitude: 40.758738,
            longtitude: -73.984961,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        },
        {
            name: 'LA Facilities',
            value: 'Los Angeles, California, CA',
            icon: 'satellite',
            isPrimary: false,
            isMappable: true,
            longtitude: 33.901506,
            latitude: -118.383915,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('contactInfos', [{
            name: 'Main HQ',
            value: 'Stark Tower, New York, NYC',
            icon: 'home',
            isPrimary: true,
            isMappable: true,
            latitude: 40.758738,
            longtitude: -73.984961,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        },
        {
            name: 'LA Facilities',
            value: 'Los Angeles, California, CA',
            icon: 'satellite',
            isPrimary: false,
            isMappable: true,
            longtitude: 33.901506,
            latitude: -118.383915,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        }], {});
    },
};
