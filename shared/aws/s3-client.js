'use strict'

const S3 = require('aws-sdk/clients/s3');

const S3Client = {
    // Props
    bucket: null,
    client: new S3(),
    // Methods
    setBucket(bucket) {
        this.bucket = bucket;
    },
    async get({ fileName }) {
        const object = await this.client.getObject({
            Bucket: this.bucket,
            Key: fileName
        }).promise();

        if (!object)
            throw new Error(`S3Client :: This file not found ${fileName}`);

        return object;
    },
    async put({ fileName, data, contentType }) {
        const object = await this.client.putObject({
            Bucket: this.bucket,
            Key: fileName,
            Body: data,
            ContentType: contentType
        }).promise();

        if (!object)
            throw new Error(`S3Client :: There was an error writing this file ${fileName}`);

        return object;
    }
};

module.exports = S3Client;