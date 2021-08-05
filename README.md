# Serverless Demo with Firebase Functions

This template provides an example on how to use serverless infrastructure to integrate RELE.AI. This example is built using Google Firebase Functions.

This template is associated with [Going Serverless with Google Firebase Functions](http://docs.rele.ai/tutorials/serverless/gcp-fbf) tutorial

## Requirements
- Google Cloud Account
- [Firebase CLI](https://firebase.google.com/docs/cli)
- Latest [RELE.AI CLI](https://docs.rele.ai/guide/installation)

## Usage

Initiate a project using this template by running the `rb create` command:

```
rb create serverless -t rele-ai/firebase-functions-integration-template#main
```

it will ask you for a `Region` and a `Project ID`
```
? Google Functions Region `us-central1`
? Google Project ID `[Project-ID]`
```
Note: you can view your ProjectID by going to project settings -> general.

## Install Dependencies
From the `serverless/functions` directory, install the local dependencies:

```shell
npm install
```

## Deploy the Functions and Workflows

From the `serverless/functions` directory, run the following command:

```shell
npm run deploy
```

# Clean Up

To remove the workflows and the cloud functions, run the following command:

```shell
npm run cleanup
```
