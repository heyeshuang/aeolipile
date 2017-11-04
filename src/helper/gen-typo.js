var fs = require("fs");
var Typography = require('typography')
// Add custom options here.
var options = {}
var typography = new Typography(options)

var css = typography.toString()

fs.writeFile('typo.css', css,  function(err) {
   if (err) {
       return console.error(err);
   }})
