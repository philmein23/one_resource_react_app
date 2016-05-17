'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
const gameofthronesRouter = require(__dirname + '/routes/game_of_thrones_routes');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gameofthrones_db');

app.use('/api', gameofthronesRouter);

module.exports = app.listen(PORT, () => console.log('server on ' + PORT + ' is up!'));
