const { Router } = require('express');
const Ship = require('../models/Ship');

module.exports = Router()
  .get('/', async (req, res) => {
    const ship = await Ship.getGreeting();

    console.log(`|| ship >`, ship);

    res.json(ship);

  });
