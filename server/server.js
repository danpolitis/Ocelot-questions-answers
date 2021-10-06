const express = require('express');
const morgan = require('morgan');
const loaderio = require('../')

const server = express()
const routes = require('./routes')

server.use(morgan('dev'));
server.use(express.json());
server.use('/', routes)

module.exports = server;