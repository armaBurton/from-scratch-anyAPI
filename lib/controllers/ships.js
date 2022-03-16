const { Router } = require('express');
const Ship = require('../models/Ship');

module.exports = Router()
  .post('/', async (req, res) => {
    const ship = await Ship.insert({ ...req.body });

    res.json(ship);
  })

  .get('/', async (req, res) => {
    const ships = await Ship.findAll();
    
    res.json(ships);
  });
