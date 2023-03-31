module.exports = {
    vaccineData: [
        {
            name: 'Vaccine#123a',
            basePrice: 37,
        },
        {
            name: 'Vaccine#456b',
            basePrice: 92,
        },
        {
            name: 'Vaccine#789c',
            basePrice: 180,
        },
    ],
    petOwnerData: [
        {
            name: 'Julian Edwards',
            role: 'admin',
            pets: [
                {
                    name: 'Tigerlily',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2013, 2, 14),
                            endPrice: 20,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2024, 0, 5),
                            endPrice: 42,
                        },
                    ],
                },
                {
                    name: 'Ginger',
                    type: 'cat',
                },
            ],
        },
        {
            name: 'Frank Zappa',
            role: 'admin',
            pets: [{name: 'Fido', type: 'dog'}],
        },
        {
            name: 'Erik de Jong',
            role: 'user',
            pets: [
                {
                    name: 'Picasso',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2009, 5, 19),
                            endPrice: 10,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2009, 7, 20),
                            endPrice: 33,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2024, 8, 3),
                            endPrice: 110,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Sarah Smith',
            role: 'user',
            pets: [
                {
                    name: 'Polly',
                    type: 'Parrot',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2015, 1, 5),
                            endPrice: 37,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2014, 11, 7),
                            endPrice: 92,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2024, 3, 25),
                            endPrice: 180,
                        },
                    ],
                },
                {
                    name: 'Bluestar',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2010, 2, 2),
                            endPrice: 25,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2010, 3, 3),
                            endPrice: 60,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Monica Dames',
            role: 'user',
            pets: [
                {
                    name: 'Wobke',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2016, 6, 29),
                            endPrice: 12,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2016, 7, 5),
                            endPrice: 40,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2024, 6, 5),
                            endPrice: 100,
                        },
                    ],
                },
                {
                    name: 'Mona',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2024, 6, 5),
                            endPrice: 100,
                        },
                    ],
                },
                {
                    name: 'Dodger',
                    type: 'cat',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2024, 6, 5),
                            endPrice: 100,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Peter Kunst',
            role: 'user',
            pets: [
                {
                    name: 'Rex',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2011, 10, 11),
                            endPrice: 0,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2011, 11, 15),
                            endPrice: 5,
                        },
                    ],
                },
            ],
        },
        {
            name: 'Leo Lemniscaat',
            role: 'user',
            pets: [
                {
                    name: 'Bernard',
                    type: 'dog',
                    vaccinations: [
                        {
                            vaccine: 'Vaccine#123a',
                            administrationDate: new Date(2023, 9, 1),
                            endPrice: 20,
                        },
                        {
                            vaccine: 'Vaccine#456b',
                            administrationDate: new Date(2023, 9, 1),
                            endPrice: 40,
                        },
                        {
                            vaccine: 'Vaccine#789c',
                            administrationDate: new Date(2023, 9, 27),
                            endPrice: 90,
                        },
                    ],
                },
            ],
        },
    ],
}
