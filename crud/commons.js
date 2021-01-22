const AWS = require('aws-sdk');

module.exports = {
    dynamoDB: new AWS.DynamoDB.DocumentClient(),
    TABLA_VEHICULOS: process.env.TABLA_VEHICULOS
}