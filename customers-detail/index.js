const { full } = require('../fakerData')
module.exports = async function (context, req) {
    const id = context.bindingData.id;
    if(!id) {
        context.res = {
            status: 404,
            body: "Customer not found"
        }
        return;
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(full[id])
    };
}