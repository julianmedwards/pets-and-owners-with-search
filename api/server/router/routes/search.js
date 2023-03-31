'use strict'

module.exports = (app, db) => {
    // GET owners or pets by name
    app.get('/search/:name', (req, res) => {
        const name = req.params.name
        const ownerSearch = db.owners.findAll({
            attributes: ['id', 'name'],
            where: {name: {[db.Sequelize.Op.like]: `%${name}%`}},
        })
        const petSearch = db.pets.findAll({
            attributes: ['id', 'name'],
            where: {name: {[db.Sequelize.Op.like]: `%${name}%`}},
        })

        Promise.all([ownerSearch, petSearch]).then((results) => {
            res.json({owners: results[0], pets: results[1]})
        })
    })
}
