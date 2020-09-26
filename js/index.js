

const text = document.getElementById("type");


window.addEventListener('load', (event) => {

if (location.hash.length!==0){
    const work = new Worker("js/embed.js");
    work.postMessage(location.hash);
    console.log(location.hash)

  for (let element of document.getElementsByClassName("edit")){
   element.style.display="none";
  }

    work.onmessage = function (e){
      text.innerText(e.data);
    };
} else {

    const worker = new Worker("js/share.js");

    text.addEventListener("keypress",debounce(worker.postMessage(text.value),500))

    worker.onmessage = function (e) {
      window.copyText = e.data;
      document.getElementById("copy").addEventListener("click", clip);
    }
  }

  function clip() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  function debounce (fn, delay) {
    var timeoutID = null;
    return function () {
      clearTimeout(timeoutID);
      var args = arguments;
      var that = this;
      timeoutID = setTimeout(function () {
        fn.apply(that, args);
      }, delay);
    }
  }
});
window.onhashchange = function(e) {
   console.log("hash", e);
   location.reload();
 };
