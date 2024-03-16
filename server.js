const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/config/db');
const routes = require('./src/routes');
const jwt = require('jsonwebtoken');

const app = express();
const port = 2000;


app.use(bodyParser.urlencoded({ extended: false })); // Để xử lý dữ liệu form-urlencoded
app.use(bodyParser.json()); // Để xử lý dữ liệu JSON
//db.connect();

app.use('/api',routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });