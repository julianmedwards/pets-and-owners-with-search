'use strict'

module.exports = (app, db) => {
    // GET all vaccines
    app.get('/vaccines', (req, res) => {
        db.vaccines.findAll().then((vaccines) => {
            res.json(vaccines)
        })
    })

    // GET one vaccine by id
    app.get('/vaccine/:id', (req, res) => {
        const id = req.params.id
        db.vaccines
            .findAll({
                where: {id: id},
            })
            .then((vaccines) => {
                res.json(vaccines)
            })
    })

    // POST single vaccine
    app.post('/vaccines', (req, res) => {
        const name = req.body.name
        const base_price = req.body.base_price
        db.vaccines
            .create({
                name: name,
                base_price: base_price,
            })
            .then((newVaccine) => {
                res.json(newVaccine)
            })
    })

    // PATCH single vaccine
    app.patch('/vaccines/:id', (req, res) => {
        const id = req.params.id
        const updates = req.body.updates
        db.vaccines
            .findAll({
                where: {id: id},
            })
            .then((vaccine) => {
                return vaccine.updateAttributes(updates)
            })
            .then((updatedVaccine) => {
                res.json(updatedVaccine)
            })
    })

    app.delete('/vaccines/:id', (req, res) => {
        const id = req.params.id
        db.vaccines
            .destroy({
                where: {id: id},
            })
            .then((deletedVaccine) => {
                res.json(deletedVaccine)
            })
    })
}
