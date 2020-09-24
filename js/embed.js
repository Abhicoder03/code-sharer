importScripts("lzma-d.js");


self.onmessage = function (e) {

//the message here is a url hash

console.log(e.data)
console.log(typeof e.data)


//deconstruct url
const link = btoa(e.data)
console.log(typeof link)

LZMA.decompress(link, 9, function(result, error) {
    if (error) console.error(error);
    console.log(result)
    self.postMessage(result)
  });

}
