const express = require('express');
const router = express.Router();

router.get('/default', async (req, res) => {
  try {
    res.render('map', { lat: 35.6895, lon: 139.6917, zoom: 6, showMarker: false });
  } catch (error) {
    console.error('Error in /default route:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/point', async (req, res) => {
  try {
    var { lat, lon } = req.query;
    res.render('map', { lat: lat, lon: lon, zoom: 14, showMarker: true });
  } catch (error) {
    console.error('Error in /point route:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
