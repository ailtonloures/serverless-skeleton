'use strict'

const SQS = require('aws-sdk/clients/sqs');

const SQSClient = {
    // Props
    region: null,
    client: new SQS({
        apiVersion: 'latest',
        region: this.region
    }),
    // Methods
    setRegion(region) {
        this.region = region;
    },
    async addQueue({ queueUrl, data }) {
        const queue = await this.client.sendMessage({
            QueueUrl: queueUrl,
            MessageBody: data
        }).promise();

        if (!queue)
            throw new Error(`SQSClient :: There was an error creating this queue ${JSON.stringify(data)}`);
    }
};

module.exports = SQSClient;