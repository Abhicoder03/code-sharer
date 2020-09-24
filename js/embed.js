importScripts("lzma-d.js");


self.onmessage = function (e) {

//the message here is a url hash

console.log(e.data)
console.log(typeof e.data)


//deconstruct url
const link = btoa(e.data)
console.log(typeof link)

LZMA.decompress(link, on_finish(result, error) {
  console.log(result)
  self.postMessage(result)
});


}
