document.addEventListener("DOMContentLoaded", () => {
    const santaContainer = document.getElementById("santa-container");
    const speechBubble = document.getElementById("speech-bubble");
    const giftBox = document.getElementById("gift-box");
    const mirrorContainer = document.getElementById("mirror-container");
    const messages = [
      "Seni bu kadar beklettiğim için özür dilerim.",
      "İşim başımdan aşkın maalesef...",
      "Sürekli küçük çocukları kendime inandırmak için dolaşıyorum.",
      "Bana olan inancını kaybetmediğin için teşekkürler.",
      "Senin için de bir hediyem var.",
      "Seneye görüşürüz.",
    ];
  
    let currentMessage = 0;
  
    // Noel Baba ortada durduğunda konuşma balonunu göster
    santaContainer.addEventListener("animationend", () => {
      if (currentMessage === 0) {
        speechBubble.style.display = "block";
        displayMessage();
      }
    });
  
    // Mesajları sırayla yazdır
    function displayMessage() {
      if (currentMessage < messages.length) {
        speechBubble.textContent = messages[currentMessage];
        currentMessage++;
        setTimeout(displayMessage, 3000); // Her mesaj 3 saniye kalır
      } else {
        // Tüm mesajlar bittiğinde hediye kutusunu göster
        speechBubble.style.display = "none";
        giftBox.style.display = "block";
      }
    }
  
    // Hediye kutusuna tıklanınca ayna ve Noel Baba'nın çıkışı
    giftBox.addEventListener("click", () => {
        openCamera();
      });
    
      // Kamerayı açma fonksiyonu
      async function openCamera() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
          cameraStream.srcObject = stream; // Kamera akışını video elementine bağla
          cameraContainer.style.display = "block";
        } catch (err) {
          console.error("Kamera açılamadı:", err);
          alert("Kameranıza erişim sağlanamadı.");
        }
      }
    });
  