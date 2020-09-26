var assert = require('assert');
var LZMA = require("lzma");


LZMA.compress("string", 9, function(result, error) {
  global.array = result;
});


describe('Lempel-Ziv-Markov algorithm', function () {
  describe('string compression', function () {
    it('should make a string shorter in length', function () {
    assert.notEqual("string",array)
    });
  });
});
