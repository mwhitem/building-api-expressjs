const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.use(cors());
app.use(express.json());
app.use('/api', apiRoute);


app.listen(3000);