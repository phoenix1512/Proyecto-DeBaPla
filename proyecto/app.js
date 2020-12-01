const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { render, renderFile } = require('pug');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

app.use(express.static(__dirname + '/public/'));

var url = require('url')

module.exports = {
  handleRequest: function(req, res){
    response.writeHead(200, {'Content-Type': 'text/html'})
  
    var path = url.parse(request.url).pathname
    switch (path) {
      case '/index':
        renderFile('./index.html', response)
        break
      case '/team':
        renderFile('./team.html',response)
        break
      case '/about':
        renderFile('./about',response)
        break
      default:
        response.writeHead('404')
        response.write('Fallo de Routing')
        response.end;
    }

  }
}