"use strict"

const express = require('express');
const Router = express.Router();

const indexController = require('./controller/index');

Router.get("/", indexController.showIndex);

module.exports = Router;