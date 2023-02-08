const express = require('express');

const app = express();

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json());

// Created routes

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

module.exports = app;
