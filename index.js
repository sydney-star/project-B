const express = require('express');
const bodyparser = require('body-parser');
const { pool } = require('./connection')

const app = express();
const port = process.env.PORT || 5000;

pool.getConnection((err) => {
    if (err) throw err;
    console.log('DB connected');
})

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening to port ${port}`)
})