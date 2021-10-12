const { slim } = require('../SharedCode/fakerData.js')
module.exports = function (context, req) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(slim)
    };
}