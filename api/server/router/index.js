'use strict'

const routes = [
    require('./routes/owners'),
    require('./routes/pets'),
    require('./routes/vaccines'),
]

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
    return routes.forEach((route) => {
        route(app, db)
    })
}
