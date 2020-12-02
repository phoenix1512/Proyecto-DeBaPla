const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { render, renderFile } = require('pug');
const app = express();
const about = require('./about.json');

app.use('/about', about);

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

app.use(express.static(__dirname + '/public/'));

