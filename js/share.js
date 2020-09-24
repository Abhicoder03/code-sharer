importScripts("lzma-c.js");

function stringToZip(string, callback) {
  LZMA.compress(string, 9, function(result, error) {
    if (error) console.error(error);
    var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
    return callback(base64String);
  });
}



self.onmessage = function (e) {

//the message here is code
console.log(e.data)
// to LZMA
const lz = stringToZip(e.data)

// to base64
console.log(typeof lz)
// const conv = atob(lz)
// construct url from base64

// const link = self.location.origin + "#" + conv

// console.log(link)
// console.log(typeof link)

self.postMessage(link)

}
