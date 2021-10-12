const { slim } = require('../SharedCode/fakerData.js')
module.exports = function (context, req) {
    context.res.send(slim)
}