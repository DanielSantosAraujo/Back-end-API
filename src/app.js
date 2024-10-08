const express = require('express');
const router = require('./routes/router');
const routerUsers = require('./routes/router-users');
const routerAuth = require('./routes/router-auth')
const app = express();
app.use(express.json());

app.use(router);
app.use(routerUsers);
app.use(routerAuth);

module.exports = app;