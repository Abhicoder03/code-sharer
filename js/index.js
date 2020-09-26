const text = document.getElementById("type");


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
     };
   };

 function clip() {
     navigator.clipboard.writeText(copyText);
     var tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copied!";
 }


 window.addEventListener('load', (event) => {

 if (location.hash.length!==0){
     const work = new Worker("js/embed.js");
     work.postMessage(location.hash);
     console.log(location.hash);

   for (let element of document.getElementsByClassName("edit")){
    element.style.display="none";
   }

     work.onmessage = function (e){
       text.innerText(e.data);
     };
 } else {

     const worker = new Worker("js/share.js");

     text.addEventListener("keypress",send);

     function send(){
       setTimeout(function(){worker.postMessage(text.value)}, 3000)
     }

     worker.onmessage = function (e) {
       window.copyText = e.data;
       document.getElementById("copy").addEventListener("click", clip);
     }
   }

 });
 window.onhashchange = function(e) {
    console.log("hash", e);
    location.reload();
  };
