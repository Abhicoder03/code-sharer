const encoder = new TextEncoder()

self.onmessage = function (e) {
const view = encoder.encode(e.data)
  const link = view.join("+")
  console.log(self.location + "?embed=" + link)
}
