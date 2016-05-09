// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (filename, callback) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    let sum = [];
    let ints = data.split('\n').parseInt();
    ints.forEach(int => {
      if (int) {
        sum.push(int);
      }
    });
    let ans = sum.reduce((a, b) => a + b);
    callback(null, ans);
  });
};

module.exports = {
  sumLines,
};
