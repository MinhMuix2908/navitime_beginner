require('dotenv').config();

const navitimeConfig = {
  domain: process.env.API_DOMAIN || 'error',
  cid: process.env.API_CID || 'error',
  signature: process.env.API_SIGNATURE || 'error',
  requestCode: process.env.API_REQUEST_CODE || 'error',
};

const serverConfig = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};

module.exports = {
  navitimeConfig,
  serverConfig
};
