'use strict';

const { DynamoDB, SQS, S3 } = require('aws-sdk');

exports.handler = async (event) => {
    return {
        event,
        env: process.env
    };
};