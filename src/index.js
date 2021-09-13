const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json())
app.use(routes);

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})