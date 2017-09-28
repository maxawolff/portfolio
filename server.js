'use strict';


const EXPRESS = require('express');
const APP = EXPRESS();
const requestProxy = require('express-request-proxy');
const pg = require('pg');
const PORT = process.env.PORT || 3000;
const conString = 'postgres://postgres:potato@localhost:5432/portfolio';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

APP.use(EXPRESS.static('public'));

APP.get('/', function(request, response){
  response.sendFile('index.html', {root: '.public'});
});

APP.get('/github/*', proxyGitHub);

function proxyGitHub(req, res){
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}


APP.listen(PORT, function() {
  console.log(`Express server currently running on port ${PORT}`);
});
