require('dotenv').config();

const rabidapiConfig = {
  car_domain: process.env.CAR_DOMAIN || 'error',
  car_key: process.env.CAR_KEY || 'error',
  geo_domain: process.env.GEO_DOMAIN || 'error',
  geo_key: process.env.GEO_KEY || 'error',
};

const serverConfig = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};

module.exports = {
  rabidapiConfig,
  serverConfig
};
