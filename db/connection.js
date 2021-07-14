const mysql = require('mysql2');
const pass = require('./pass');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: pass.password,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;