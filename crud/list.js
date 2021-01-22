const { TABLA_VEHICULOS, dynamoDB } = require('./commons');


module.exports = () => {
    console.log("Listando vehiculos.");
    const params = {
        TableName: TABLA_VEHICULOS,
    };
    return dynamoDB.scan(params).promise()
        .catch(error => { throw new Error(error) });
};

