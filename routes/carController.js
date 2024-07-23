const express = require('express');
const router = express.Router();
const { findSpotAndAddress, detailCarMap, drawCarMap } = require('../handlers/carHandler')

router.get('/draw_car_map', async (req, res) => {
  try {
    var { start, goal, transits } = req.query;
    var startList = start ? start.split(',') : []
    var endList = goal ? goal.split(',') : []
    var transitsList = transits ? transits.split(',') : [];

    var shapeCar = await drawCarMap(start, goal, transitsList);
    res.render('drawCarMap', { shapeCar: shapeCar, startCoordinates: startList, goalCoordinates: endList, coordinatesList: transitsList });
  } catch (error) {
    console.error('Error in /draw_car_map route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/detail_car_map', async (req, res) => {
  try {
    var { start, goal, transits } = req.query;
    var startList = start ? start.split(',') : []
    var endList = goal ? goal.split(',') : []
    var transitsList = transits ? transits.split(',') : [];

    var detailCar = await detailCarMap(start, goal, transitsList);
    res.json({ detail: detailCar, startCoordinates: startList, stopCoordinates: endList, coordinatesList: transitsList });
  } catch (error) {
    console.error('Error in /draw_car_map route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/find_spot', async (req, res) => {
  try {
    var { word } = req.query;
    var spotList = await findSpotAndAddress(word);
    res.json(spotList);
  } catch (error) {
    console.error('Error in /find_spot route:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
