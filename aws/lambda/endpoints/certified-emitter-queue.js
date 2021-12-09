'use strict';

const { DynamoDBClient, S3Client } = require('../commom/aws-client');

exports.handler = async ({ Records }) => {
    Records.forEach((record) => {
        console.log(record);
    });
};