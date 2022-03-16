const { Router } = require('express');
const Ship = require('../models/Ship');

module.exports = Router()
  .post('/', async (req, res) => {
    const ship = await Ship.findAll();

    res.json(ship);

  })

  .get('/', async (req, res) => {
    const ships = await Ship.findAll();
    console.log(`|| ships >`, ships);
    res.json(ships);
  });
