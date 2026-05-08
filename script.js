const messages = [
      "beneran ruy?",

"benran?",

"Kamu benran gamau ngomong sama aku ya?",

"Kenapa ruy?",

"Anjirr beneran gamau ngomong lagi",

"sedih banget si ruy 😞...",

"aku bener bener se sedih itu...",

"kita ngobrol lagi ruy di dc ayoo dongg ❤️",
   ];
   
   let messageIndex = 0;
   
   function handleNoClick() {
       const noButton = document.querySelector('.no-button');
       const yesButton = document.querySelector('.yes-button');
       noButton.textContent = messages[messageIndex];
       messageIndex = (messageIndex + 1) % messages.length;
       const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
       yesButton.style.fontSize = `${currentSize * 1.5}px`;
   }
   
//    function handleYesClick() {
//        window.location.href = "yes_page.html";
//    }