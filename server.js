const app = require('./app');
// require('dotenv').config();

const HOST = '0.0.0.0';
const PORT = process.env.NODE_PORT;

console.log(process.env.NODE_PORT);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
