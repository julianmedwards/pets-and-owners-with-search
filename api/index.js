'use strict'

// Change working directory for relative imports
// due to api & app being under same node package.
process.chdir('api')

const express = require('express'),
    morgan = require('morgan'),
    db = require('./server/config/db.js'),
    env = require('./server/config/env'),
    router = require('./server/router/index')

const app = express()
const PORT = env.PORT

app.use(express.json())
app.use(morgan('combined'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'application/json')
    next()
})

router(app, db)

const {vaccineData, petOwnerData} = require('./server/config/defaultData')

// drop and resync with { force: true },
// comment/delete insertDefaultData() to not duplicate data if removing.
db.sequelize.sync().then(() => {
    // insertDefaultData(vaccineData, petOwnerData)

    app.listen(PORT, () => {
        console.log('Express API listening on port:', PORT)
    })
})

function insertDefaultData(vaccineData, petOwnerData) {
    // Generate default data.
    vaccineData.forEach((vaccine) => {
        db.vaccines.create({
            name: vaccine.name,
            basePrice: vaccine.basePrice,
        })
    })

    petOwnerData.forEach((owner) => {
        db.owners
            .create({
                name: owner.name,
                role: owner.role,
            })
            .then((ownerInst) => {
                owner.pets.forEach((pet) => {
                    db.pets
                        .create({
                            name: pet.name,
                            ownerId: ownerInst.id,
                            type: pet.type,
                        })
                        .then((petInst) => {
                            insertVaccine(pet, petInst)
                        })
                })
            })
    })
}

function insertVaccine(petData, petInst) {
    if (petData.vaccinations) {
        petData.vaccinations.forEach((vaccination) => {
            db.vaccines
                .findOne({
                    where: {name: vaccination.vaccine},
                })
                .then((vaccine) => {
                    petInst.addVaccine(vaccine, {
                        through: {
                            administrationDate: vaccination.administrationDate,
                            endPrice: vaccination.endPrice,
                        },
                    })
                })
        })
    }
}
