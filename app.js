'use strict'

function Project(name, url, imageLink, date){
  this.name = name;
  this.url = url;
  this.imageLink = imageLink;
  this.date = date;

  var appendSpot = document.getElementById('projects');

  this.addToDoc = function(){
    var projectTitle = document.createElement('h3');
    projectTitle.innerHTML = this.name;
    appendSpot.appendChild(projectTitle);

    var projectImage = document.createElement('img');
    projectImage.setAttribute('src', this.imageLink);
    appendSpot.appendChild(projectImage);

    var projectURL = document.createElement('a');
    projectURL.innerText = 'link to the ' + this.name + ' project';
    projectURL.href = this.url;
    appendSpot.appendChild(projectURL);

    var endDate = document.createElement('p');
    endDate.innerHTML = 'Completed on ' + this.date;
    appendSpot.appendChild(endDate);
  }
}

var salmonCookies = new Project('Salmon Cookies', 'https://maxawolff.github.io/cookie-stand/', 'images/salmonCookies.png', '8/18/17');
var busMall = new Project('Bus Mall', 'https://maxawolff.github.io/bus-mall/', 'images/busMall.png', '8/25/2017');
var barksNRec = new Project('Barks N Rec', 'https://chelseadole.github.io/barks-and-rec/index.html', 'images/barksNRec.png', '8/31/2017');

barksNRec.addToDoc();
busMall.addToDoc();
salmonCookies.addToDoc();
