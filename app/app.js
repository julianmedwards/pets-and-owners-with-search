'use strict'

// Change working directory for relative imports
// due to api & app being under same node package.
process.chdir('app')

const express = require('express'),
    morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('combined'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    const ownersReq = await fetch('http://localhost:5000/owners', {
        method: 'GET',
    })

    const data = await ownersReq.json()
    res.render('index', {data})
})

app.get('/owners/:id', async (req, res) => {
    const ownerReq = await fetch(
        `http://localhost:5000/owners/${req.params.id}`,
        {
            method: 'GET',
        }
    )

    const data = await ownerReq.json()
    console.log(data)
    res.render('owner', {data: data[0]})
})

app.get('/pets/:id', async (req, res) => {
    const petReq = await fetch(`http://localhost:5000/pets/${req.params.id}`, {
        method: 'GET',
    })

    const data = await petReq.json()
    console.log(data)
    console.log(data[0].vaccines)

    data[0].vaccines.forEach((vaccine) => {
        vaccine.vaccinationRecord.administrationDate = parseMySQLDateTime(
            vaccine.vaccinationRecord.administrationDate
        )
    })

    res.render('pet', {data: data[0]})
})

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('Express APP listening on port:', PORT)
})

function parseMySQLDateTime(MySQLDate) {
    let date = new Date(MySQLDate)
    return date.toLocaleDateString()
}
