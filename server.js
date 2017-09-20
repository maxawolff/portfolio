'use strict';

const bodyParser = require('body-parser').urlencoded({extended: true});
const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.post('/articles', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
});

APP.listen(PORT, function() {
  console.log(`Express server currently running on port ${PORT}`);
});
