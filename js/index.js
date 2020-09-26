

const text = document.getElementById("type");

<<<<<<< Updated upstream
function sendToWorker(){debounce(worker.postMessage(text.value),500);}

function clip() {
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!"
}
=======
HTMLTextAreaElement.prototype.getCaretPosition = function () { //return the caret position of the textarea
    return this.selectionStart;
};
HTMLTextAreaElement.prototype.setCaretPosition = function (position) { //change the caret position of the textarea
    this.selectionStart = position;
    this.selectionEnd = position;
    this.focus();
};
HTMLTextAreaElement.prototype.hasSelection = function () { //if the textarea has selection then return true
    if (this.selectionStart == this.selectionEnd) {
        return false;
    } else {
        return true;
    }
};
HTMLTextAreaElement.prototype.getSelectedText = function () { //return the selection text
    return this.value.substring(this.selectionStart, this.selectionEnd);
};
HTMLTextAreaElement.prototype.setSelection = function (start, end) { //change the selection area of the textarea
    this.selectionStart = start;
    this.selectionEnd = end;
    this.focus();
};

text.onkeydown = function(event) {

    //support tab on textarea
    if (event.keyCode == 9) { //tab was pressed
        var newCaretPosition;
        newCaretPosition = text.getCaretPosition() + "    ".length;
        text.value = text.value.substring(0, text.getCaretPosition()) + "    " + text.value.substring(text.getCaretPosition(), text.value.length);
        text.setCaretPosition(newCaretPosition);
        return false;
    }
  }

>>>>>>> Stashed changes

window.addEventListener('load', (event) => {

if (location.hash.length!==0){
    const worker = new Worker("js/embed.js");
    worker.postMessage(location.hash);
    console.log(location.hash)

  for (let element of document.getElementsByClassName("edit")){
   element.style.display="none";
  }

    self.onmessage = function (e){
      text.innerText(e.data);
    };
} else {
    const worker = new Worker("js/share.js");



    text.addEventListener("keypress",sendToWorker)

    self.onmessage = function (e) {
      window.copyText = e.data;
      document.getElementById("copy").addEventListener("click", myFunction);
    }
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
