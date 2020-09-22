const encoder = new TextEncoder()

self.onmessage = function (e) {
const view = encoder.encode(e.data)
  const link = view.join("+")
  console.log(self.location + "?embed=" + link)
}

//nah, just use assassin
//oh no...I think I need to use free s3
