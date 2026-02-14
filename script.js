const messages = [
       "ini beneran key?",
       "beneran??",
       "beneran gamau?",
       "yes aja please...",
       "coba pikirin lagi deh!",
       "kalau kamu bilang no aku sedih bgt 😞...",
       "asli sedih bgt ini mah...",
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