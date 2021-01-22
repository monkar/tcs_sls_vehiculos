const { TABLA_VEHICULOS, dynamoDB } = require('./commons');

module.exports = (id) => {
    console.log(`Obteniendo vehiculo: ${id}.`);
    const params = {
        TableName: TABLA_VEHICULOS,
        Key: {
            id: id
        }
    };
    return dynamoDB.get(params).promise()
        .catch(error => { throw new Error(error) });
};

