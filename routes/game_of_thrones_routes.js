'use strict';
const Router = require('express').Router;
const Character = require(__dirname + '/../models/characters');
const bodyParser = require('body-parser').json();

let gameofthronesRouter = module.exports = exports = Router();
