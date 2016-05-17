'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
  name: { type: String, unique: true },
  family: { type: String },
  rank: { type: String }
});

module.exports = mongoose.model('Character', CharacterSchema);
