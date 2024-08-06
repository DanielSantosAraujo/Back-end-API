const express = require('express');
const router = require('./routes/router');
const routerUsers = require('./routes/router-users');

const app = express();
app.use(express.json());

app.use(router);
app.use(routerUsers);

module.exports = app;