const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    listUrl = [
      {name: '[HTML]map: default', url: '/map/default', description: 'Get the default map of Japan'},
      {name: '[HTML]map: point', url: '/map/point?lat=35.632548&lon=139.881327', description: 'Display a specific point when coordinates are provided'},
      {name: '[API]car: find_spot', url: '/car/find_spot?word=tok', description: 'Search for some points on the map by providing the name of the point'},
      {name: '[HTML]car: draw_car_map', url: '/car/draw_car_map?start=35.632548,139.881327&goal=35.673581,139.760239&transits=35.679769,139.807961,35.666007,139.717035', description: 'Draw a car route from point A to B, with intermediate stops at C and D. Provide the coordinates of the points'},
      {name: '[HTML]car: draw_car_map_by_navi_time', url: '/car/draw_car_map_by_navitime?start=35.632548,139.881327&goal=35.673581,139.760239&transits=35.679769,139.807961,35.666007,139.717035', description: 'Draw a car route from point A to B, with intermediate stops at C and D. Provide the coordinates of the points'},
      {name: '[API]car: detail_car_map', url: '/car/detail_car_map?start=35.632548,139.881327&goal=35.673581,139.760239&transits=35.679769,139.807961,35.666007,139.717035', description: 'Data for a car route from point A to B, with intermediate stops at C and D. Provide the coordinates of the points'},
      {name: '[API]bus: find_station', url: '/bus/find_station?word=tok', description: 'Search for some bus stops. Provide the name of the stop'},
      {name: '[API]bus: detail_route', url: '/bus/detail_route?start=00083097&goal=00288905', description: 'Search for some routes from A to B. Provide the IDs of points A and B'},
      {name: '[API]metro: find_station', url: '/metro/find_station?word=東京', description: 'Search for some train stations. Provide the name of the station'},
      {name: '[API]metro: detail_route', url: '/metro/detail_route?start=00000096&goal=00006668', description: 'Search for some routes from A to B. Provide the IDs of stations A and B'}      
    ]
    res.render('index.ejs', { listUrl });
  } catch (error) {
    console.error('Error in / route:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
