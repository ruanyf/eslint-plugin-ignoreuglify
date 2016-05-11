/**
 * @fileoverview exclude uglified files from Eslint
 * @author Ruan Yifeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import processors
module.exports.processors = {
  '.js': {
    preprocess: function(text, filename) {
      var lines = text.split('\n');
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].length > 500) break;
      }
      if (i === lines.length) return lines;
      return [];
    },
  }
}

