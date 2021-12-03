'use strict';

const { S3, DynamoDB } = require('aws-sdk');

exports.handler = async (event) => {
    return {
        event
    };
};