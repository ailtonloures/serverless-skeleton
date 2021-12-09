'use strict';

const { DynamoDBClient, S3Client, SQSClient } = require('../commom/aws-client');

exports.handler = async (event) => {
    console.log(event);
};