importScripts("lzma-c.js");

var test = LZMA.compress("hkdk kjl jkk ")

console.log(typeof test)


self.onmessage = function (e) {

//the message here is code

// to LZMA
// LZMA.compress(e.data, on_finish(result, error) {
//   console.log(result)
//   self.lz = result;
// });
// to base64
console.log(typeof lz)
const conv = atob(lz)
// construct url from base64

const link = self.location.origin + "#" + conv

console.log(link)
console.log(typeof link)

self.postMessage(link)

}
