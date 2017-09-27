'use strict';
var app = app || {};

(function(module){
  const projectController= {};

  projectController.showAll = function(){
    $('body').show();
    $('#projects').empty();
    module.Project.fetchAll();
  };

  projectController.showAbout = function(){
    $('section').hide();
    $('#about').show();
  };

  projectController.showProjects = function(){
    $('section').hide();
    $('#projects').show();
  };

  projectController.showSkills = function(){
    $('section').hide();
    $('#skills').show();
  };

  projectController.showMe = function(){
    $('section').hide();
    $('#findMe').show();
  };

  module.projectController = projectController;
})(app);
