importScripts("lzma-c.js");





self.onmessage = function (e) {

//the message here is code
console.log(e.data)
// to LZMA
// LZMA.compress(e.data, 9, function(result, error) {
//     if (error) console.error(error);
//     self.lz = result
//   });
// to base64
// console.log(typeof lz)
// const conv = atob(lz)
// construct url from base64

// const link = self.location.origin + "#" + conv

console.log(link)
console.log(typeof link)

self.postMessage(link)

}
