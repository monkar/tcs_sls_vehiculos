const { TABLA_VEHICULOS, dynamoDB } = require('./commons');
const uuid = require('short-uuid');
const moment = require('moment');

module.exports = (data) => {
    console.log("Guardando vehiculo.");
    var now = moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

    data.id = uuid.generate();
    data.creado = now;
    data.modificado = now;

    const params = {
        TableName: TABLA_VEHICULOS,
        Item: data,
    };

    return dynamoDB.put(params).promise().then(() => data)
        .catch(error => { throw new Error(error) });
};



