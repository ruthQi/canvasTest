'use strict';
var yule = require('./pages/yule');
var trail = require('./pages/trail');
var run = require('./pages/run');
var perticle = require('./pages/particle');
var canvasVideo = require('./pages/canvasVideo');
var canvasTest = require('./pages/canvasTest');
var canvasLeaf = require('./pages/canvasLeaf');

module.exports = function(app) {
   app.use('/yule', yule);
   app.use('/trail', trail);
   app.use('/run', run);
   app.use('/particle', perticle);
   app.use('/canvasVideo', canvasVideo);
   app.use('/canvasTest', canvasTest);
   app.use('/canvasLeaf', canvasLeaf);

};