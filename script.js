const messages = [
      "ini beneran lopp?",
       "beneran??",
       "ihh ilop gamau maafin aku yaa 😞...",
       "maafin aku please...",
       "coba pikirin lagi deh!",
       "kalau kamu ga maafin aku sedih bgt 😞...",
       "asli sedih bgt ini mah...",
       "I will be very very very sad...",
       "Ok fine, I will stop asking...",
       "Just kidding, say yes please! ❤️"
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