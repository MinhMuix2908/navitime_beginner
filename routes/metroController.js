const express = require('express');
const router = express.Router();
const { findMetroStation, getMetroRoute } = require('../handlers/metroHandler')


router.get('/detail_route', async (req, res) => {
  try {
    var { start, goal } = req.query;
    var detailCar = await getMetroRoute(start, goal);
    res.json({ detail: detailCar });
  } catch (error) {
    console.error('Error in /draw_car_map route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/find_station', async (req, res) => {
  try {
    var { word } = req.query;
    var metroList = await findMetroStation(word);
    res.json(metroList);
  } catch (error) {
    console.error('Error in /find_station route:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
