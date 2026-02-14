const messages = [
      "Is this for real?",

"Really??",

"Are you sure you don’t want to?",

"Just say yes, please...",

"Try thinking about it again!",

"If you say no, I’ll be really sad 😞...",

"Honestly, I’d be super sad...",

"Just kidding, say yes please! ❤️",
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