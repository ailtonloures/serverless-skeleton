'use strict'

const S3Client = require('./s3-client');
const DynamoDBClient = require('./dynamo-db-client');
const SQSClient = require('./sqs-client');

const AWSClient = {
    S3Client,
    DynamoDBClient,
    SQSClient
};

module.exports = AWSClient;