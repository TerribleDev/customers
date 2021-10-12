const { full } = require('../SharedCode/fakerData.js')
module.exports = async function (context, req) {
    const id = context.bindingData.id;
    if(!id || !full[id]) {
        context.res = {
            status: 404,
            body: "Customer not found"
        }
        return;
    }
    context.res.send(full[id])
}