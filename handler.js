'use strict'

require('dotenv').config()
const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const matcha = require('./model/matcha');

mongoose.Promise = Promise;

const mongoString = process.env.DB_HOST; // MongoDB Url

const dbExecute = (db, fn) => db.then(fn).finally(() => db.close());

function dbConnectAndExecute(dbUrl, fn) {
  return dbExecute(mongoose.connect(dbUrl, { useMongoClient: true }), fn);
}

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
})


//test function
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless ! This is test function !',
        input: event,
      }, null, 2
    )}
};

//default list get data
module.exports.matcha = (event, context, callback) => {
  if (!validator.isAlphanumeric(event.pathParameters.id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'))
    return;
  }
  dbConnectAndExecute(mongoString, () => (
  matcha
      .find({ _id: event.pathParameters.id })
      .then(data => callback(null, { statusCode: 200, body: JSON.stringify(data) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
  ))
};

//create data
module.exports.createMatcha = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Not Support , comming soon...',
        input: event,
      }, null, 2
    )}
};

//delete data
module.exports.deleteMatcha = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Not Support , comming soon...',
        input: event,
      }, null, 2
    )}
}

//update data, default no used
module.exports.updateMatcha = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Not Support , comming soon...',
        input: event,
      }, null, 2
    )}
}