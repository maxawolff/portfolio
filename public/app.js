'use strict';
var app = app || {};

(function (module) {
  var projects = [];

  function Project(rawDataObj){
    this.title = rawDataObj.title;
    this.url = rawDataObj.url;
    this.image = rawDataObj.image;
    this.date = rawDataObj.date;
  }

  Project.prototype.toHtml = function(){

    var sourceHTML = $('#template').html();
    var actualTemplate = Handlebars.compile(sourceHTML);
    var newRawHTML = actualTemplate(this);
    return newRawHTML;
  };

  Project.loadAll = function(rawData){
    rawData.forEach(function(projectObj){
      projects.push(new Project(projectObj));
    });
  };

  Project.addToPage = function(){
    projects.forEach(function(project){
      $('#projects').append(project.toHtml());
    });
  };

  Project.fetchAll = function() {
    if(localStorage.rawData){
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.addToPage();
    }
    else{
      $.get('/data.json')
        .then(function(response){
          localStorage.setItem('rawData', JSON.stringify(response));
          Project.loadAll(JSON.parse(localStorage.rawData));
          Project.addToPage();
        });
    }
  };

  var $aboutSec = $('section:eq(0)');
  var $projectSec = $('section:eq(1)');
  var $skillsSec = $('section:eq(2)');
  var $findSec = $('section:eq(3)');

  var $aboutBtn = $('nav p:eq(0)');
  $aboutBtn.on('click', function(){
    $aboutSec.show();
    $projectSec.hide();
    $skillsSec.hide();
    $findSec.hide();
  });

  var $projectBtn = $('nav p:eq(1)');
  $projectBtn.on('click', function(){
    $aboutSec.hide();
    $projectSec.show();
    $skillsSec.hide();
    $findSec.hide();
  });

  var $skillsBtn = $('nav p:eq(2)');
  $skillsBtn.on('click', function(){
    $aboutSec.hide();
    $projectSec.hide();
    $skillsSec.show();
    $findSec.hide();
  });

  var $findBtn = $('nav p:eq(3)');
  $findBtn.on('click', function(){
    $aboutSec.hide();
    $projectSec.hide();
    $skillsSec.hide();
    $findSec.show();
  });

  document.getElementsByTagName('i')[0].addEventListener('click', showMenu);
  var isDisplayed = true;

  function showMenu(){
    var nav = document.getElementsByTagName('nav')[0];

    if(isDisplayed){
      nav.style.display = 'block';
      isDisplayed = false;
    }
    else if(!isDisplayed){
      nav.style.display = 'none';
      isDisplayed = true;
    }
  }
  module.Project = Project;
})(app);
