'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('buttons', [{
                name: 'Careers',
                targetURL: '/careers',
                iconURL: 'business_center',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Contacts',
                targetURL: '/contact',
                iconURL: 'contacts',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),

            },
            {
                name: 'Stark Wiki',
                targetURL: 'https://en.wikipedia.org/wiki/Stark_Industries',
                iconURL: 'info',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Twitter',
                targetURL: 'https://twitter.com/StarkIndustr1es',
                iconURL: 'twitter',
                type: 'social',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('buttons', [{
                name: 'Careers',
                targetURL: '/careers',
                iconURL: 'business_center',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Contacts',
                targetURL: '/contact',
                iconURL: 'contacts',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),

            },
            {
                name: 'Stark Wiki',
                targetURL: 'https://en.wikipedia.org/wiki/Stark_Industries',
                iconURL: 'info',
                type: 'link',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Twitter',
                targetURL: 'https://twitter.com/StarkIndustr1es',
                iconURL: 'twitter',
                type: 'social',
                hidden: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },
};
