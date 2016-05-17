'use strict';
const Router = require('express').Router;
const Character = require(__dirname + '/../models/characters');
const bodyParser = require('body-parser').json();

let gameofthronesRouter = module.exports = exports = Router();

gameofthronesRouter.route('/characters')

.post(bodyParser, (req, res) => {
  let newCharacter = new Character(req.body);
  newCharacter.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(data);
  });
})
.get((req, res) => {
  Character.find((err, character) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(character);
  });
});

gameofthronesRouter.route('/characters/:character_id')

.get((req, res) => {
  Character.findById(req.params.character_id, (err, character) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(character);
  });
})
.put(bodyParser, (req, res) => {
  Character.findByIdAndUpdate(req.params.character_id, req.body, (err, character) => {
    if (err) {
      res.send(err);
    }
    character.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json({ msg: 'Successfully updated!' });
    });
  });
})
.delete((req, res) => {
  Character.remove({
    _id: req.params.character_id
  }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'Successfully deleted!' });
  });
});
