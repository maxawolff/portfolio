'use strict'

var projects = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.url = rawDataObj.url;
  this.image = rawDataObj.image;
  this.date = rawDataObj.date;
}

Project.prototype.toHtml = function(){
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h3').text(this.title);
  console.log(this.title);
  $newProject.find('img').attr('src', this.image);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('a').html('This is a link to the ' + this.title + ' website');
  $newProject.find('p').text(this.date);


  return $newProject;
}

rawData.forEach(function(projectObj){
  projects.push(new Project(projectObj));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
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
