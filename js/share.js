importScripts("compress.js")

self.onmessage = function (e) {
  const stringView = StringView.from(e.data);
  const link = stringView.join("+")
  console.log(self.location + "?embed=" + link)
}
