const {Pool} = require('pg');
const dotEnv = require('dotenv');
dotEnv.config();


const connection = new Pool({
    connectionString: process.env.URL_DB,
    ssl: true

});

module.exports = connection;