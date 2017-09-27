'use strict';
var app = app || {};

(function(module){

  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback){
    $.get('/github/user/repos')
      .then(results => {
        repos.all = results;
      }, err =>{
        console.error(err);
      }).then(callback);
  };

  module.repos = repos;

})(app);
