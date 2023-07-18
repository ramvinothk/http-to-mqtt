<!--
title: 'HTTP to MQTT Serverless NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: ''
authorName: 'Ramvinoth.'
-->

# Serverless Framework Node HTTP to MQTT


## Usage
*Project Requirements:**

✅ Node.js



## Technologies

- Node.js

## Install



Once you've cloned it successfully, install the dependencies:
```bash
npm i
```

### AWS Account Setup
This project will take the AWS credentials from profile.
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
```
Profile dev for development Environment
Profile prod for production Environment 
```

### Deployment

```
$ sls deploy --stage dev    //for dev environment 
$ sls deploy --stage prod   //for production
```

After deploying, you should see output similar to:

```bash
Deploying mqtt-publisher to stage dev (ap-northeast-1)

✔ Service deployed to stack mqtt-publisher-dev (94s)

endpoint: POST - https://h5p50d12cj.execute-api.ap-northeast-1.amazonaws.com/
functions:
  publish: mqtt-publisher-dev-publish (54 MB)

Need a faster logging experience than CloudWatch? Try our Dev Mode in Console: run "serverless dev"

```


### Invocation

After successful deployment, you can call the application via HTTP:

```bash
curl https://xxxxxxx.execute-{region}.amazonaws.com/
```

Which should result in response similar to the following.

```json
{
  "message": "Success"
}
```

### Local development
 
It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

### MQTT Configuration
We can edit the MQTT configuration based on the environment, from the following file.
```
src/config/mqttConfig.js
```
#### sample request 
```shell
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{
"DeviceID": 987654321,
"Result":1,
"Amount":0
}'
```
#### Sample response 
```json
{
    "message": "Success"
}
```