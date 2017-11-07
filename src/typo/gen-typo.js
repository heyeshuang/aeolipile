#!/usr/bin/env node
//output typo.css from customTheme

var fs = require("fs");
var Typography = require('typography')
var customTheme = require('./typography-theme-custom.js')
// Add custom options here.
var options = customTheme
var typography = new Typography(options)

var css = typography.toString()

fs.writeFile('typo.css', css,  function(err) {
   if (err) {
       return console.error(err);
   }})
