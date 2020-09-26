importScripts("lzma-d.js");

var BASE64_MARKER = ';base64,';
var LZMA64_MARKER = ';bxze64,';

function zipToString(data) {
  var array = base64ToByteArray(data);
  LZMA.decompress(array, function(result, error) {
    if (!(typeof result === 'string')) result = new Uint8Array(result)
    if (error) console.error(error);
  });
}


function decompressDataURI(dataURI) {
  var base64Index = dataURI.indexOf(LZMA64_MARKER);
  if (base64Index > 0) {
    var base64 = dataURI.substring(base64Index + LZMA64_MARKER.length);
    console.log("if: ", base64)
    // zipToString(base64, function(result) {
    //     self.decoded = (dataURI.substring(0, base64Index) + BASE64_MARKER + '' + data.split(',')[1])
    // })
  } else {
    console.log("else: ", base64)
  }
}

function base64ToByteArray(base64) {
  var raw = atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));
  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

self.onmessage = function (e) {

//the message here is a url hash


decompressDataURI(e.data);
// const array = base64ToByteArray(decoded)
//
//  LZMA.decompress(array, function(result, error) {
//    if (!(typeof result === 'string')) result = new Uint8Array(result)
//    if (error) console.error(error);
//    console.log("Decoded result is:" + result)
//  });



}
