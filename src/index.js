const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})