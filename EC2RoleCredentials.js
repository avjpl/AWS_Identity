const AWS = require('aws-sdk');

const region = process.env['AWS_REGION'] ? process.env['AWS_REGION'] : 'eu-west-1';

AWS.CredentialProviderChain.defaultProviders = [
  () => new AWS.EnvironmentCredentials('AWS'),
  () => new AWS.SharedIniFileCredentials({ profile: 'default' }),
  () => new AWS.EC2MetadataCredentials()
];

module.exports.init = init = () => {
  const chain = new AWS.CredentialProviderChain();

  return new Promise((resolve, reject) => {
    chain.resolve((err, credentials) => {
      if (err) {
        reject(err);
      } else {
        resolve({ credentials, region });
      }
    });
  });
}
