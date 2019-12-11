'use strict';

/*
const mongoose = require('mongoose')
const Promise = require('bluebird')
const validator = require('validator')
const MatchaModel = require('./model/matcha')
mongoose.Promise = Promise;

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'text/plain' },
  body: message || 'Incorrect id',
});

*/

//test function
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Go Serverless ! This is test function !',
        input: event,
      }, null, 2
     ),
  };
};

/*
//default list get data
module.exports.matcha = (event, context, callback) => {
  if (!validator.isAlphanumeric(event.pathParameters.id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'))
    return;
  }
    MatchaModel
      .find({ _id: event.pathParameters.id })
      .then(user => callback(null, { statusCode: 200, body: JSON.stringify(user) }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
};

//create data
module.exports.createMatcha = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const matcha = new MatchaModel({
    name: data.name,
    shortcode: data.shortcode
  });

  if (matcha.validateSync()) {
    callback(null, createErrorResponse(400, 'Incorrect user data'));
    return;
  }
    matcha.save()
      .then(() => callback(null, {
        statusCode: 200,
        body: JSON.stringify({ id: user.id }),
      }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
};

//delete data
module.exports.deleteMatcha = (event, context, callback) => {
  if (!validator.isAlphanumeric(event.pathParameters.id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    return;
  }
    MatchaModel.remove({ _id: event.pathParameters.id })
      .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
      .catch(err => callback(null, createErrorResponse(err.statusCode, err.message)))
};

//update data, default no used
module.exports.updateMatcha = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect id'));
    return;
  }
  const matcha = new MatchaModel({
    _id: id,
    shortcode: data.shortcode
  });
  if (matcha.validateSync()) {
    callback(null, createErrorResponse(400, 'Incorrect parameter'));
    return;
  }
    MatchaModel.findByIdAndUpdate(id, user)
      .then(() => callback(null, { statusCode: 200, body: JSON.stringify('Ok') }))
      .catch(err => callback(err, createErrorResponse(err.statusCode, err.message)))
};
*/