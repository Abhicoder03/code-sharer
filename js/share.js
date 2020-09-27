importScripts("lzma-c.js");



self.onmessage = function (e) {

//the message here is code
console.log(e.data)
// to LZMA
  LZMA.compress(e.data, 9, function(result, error) {
    if (error) console.error(error);
    const base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
    self.postMessage(self.location.origin + "/#" + base64String);
    console.log(base64String);
  });


}
