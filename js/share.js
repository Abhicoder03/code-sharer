function str2ab(str) {
  var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

self.onmessage = function (e) {
const view = str2ab(e.data)
  const link = view.join("+")
  console.log(self.location + "?embed=" + link)
}
