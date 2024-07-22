const app = require('./app');
const { serverConfig } = require('./config/allConfig');

const { host, port } = serverConfig;

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
