const express = require('express');
const app = express();
const cors = require('cors');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Enable all CORS requests
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Use routes
app.use('/', require('./routes/rootController'));
app.use('/map/', require('./routes/mapController'));
app.use('/car/', require('./routes/carController'));
app.use('/bus/', require('./routes/busController'));
app.use('/metro/', require('./routes/metroController'));

module.exports = app;
