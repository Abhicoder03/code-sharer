var assert = require('assert');
var LZMA = require("lzma");


LZMA.compress("string", 9, function(result, error) {
  global.array = result;
});

describe('Lempel-Ziv-Markov algorithm', function () {
  describe('string compression', function () {
    it('should make a string shorter in length', function () {
    assert.notEqual("string",array);
    });
  });
});

//Please write more unit tests.

/*
LZMA.decompress(array, function(result, error) {
  if (!(typeof result === 'string')) result = new Uint8Array(result);
  global.base64 = result;
});

//got stuck trying to write the unit test because atob() and btoa()
//(a.k.a. the base64 conversion functions) are not available in node

*/
