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
  })

  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const getShipById = await Ship.getShipById(id);

    res.json(getShipById);
  })
  
  .patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const getShip = await Ship.getShipById(id);
    try {
      if (!getShip) {
        const error = new Error(`Ship ${id} not found`);
        error.status = 404;
        throw error;
      }

      // const name = req.body.name ?? getShip.name;
      // const faction = req.body.faction ?? getShip.name;
      // const class_specifications = req.body.class_specifications ?? getShip.class_specifications;
      // const crew_compliment = req.body.crew_compliment ?? getShip.crew_compliment;
      // const length_meters = req.body.length_meters ?? getShip.length_meters;

      const shipObj = {
        name: req.body.name ?? getShip.name,
        faction: req.body.faction ?? getShip.name,
        class_specifications: req.body.class_specifications ?? getShip.class_specifications,
        crew_compliment: req.body.crew_compliment ?? getShip.crew_compliment,
        length_meters: req.body.length_meters ?? getShip.length_meters,
      };

      const updateShip = await Ship.updateById(id, shipObj);

      res.send({ ...updateShip });
    } catch (error) {
      next(error);
    }

  });
