import AWS from 'aws-sdk';

const accessKeyId = 'AKIAW3MEAGPEVWKIQJ7T'; 
const secretAccessKey = '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'; 
const region = 'ap-south-1'; 

AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region
});

const s3 = new AWS.S3();

export { s3 };