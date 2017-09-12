'use strict'

function Project(name, url, imageLink, date){
  this.name = name;
  this.url = url;
  this.imageLink = imageLink;
  this.date = date;

  var appendSpot = document.getElementById('projects');

  this.addToDoc = function(){
    var projectTitle = document.createElement('p');
    projectTitle.innerHTML = this.name;
    appendSpot.appendChild(projectTitle);

    var projectImage = document.createElement('img');
    projectImage.setAttribute('src', imageLink);
    appendSpot.appendChild(projectImage);
  }
}

var busMall = new Project('Bus Mall', '', '', '');
var barksNRec = new Project('Barks N Rec', 'https://chelseadole.github.io/barks-and-rec/index.html', 'images/barksNRec.png', '8/30');
// busMall.addToDoc();
barksNRec.addToDoc();
