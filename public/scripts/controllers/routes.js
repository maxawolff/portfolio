'use strict';
var app = app || {};

page('/', app.projectController.showAll);
page('/about', app.projectController.showAbout);
page('/projects', app.projectController.showProjects);
page('/skills', app.projectController.showSkills);
page('/find', app.projectController.showMe);

page();
