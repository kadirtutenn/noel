document.addEventListener("DOMContentLoaded", () => {
  const santaContainer = document.getElementById("santa-container");
  const speechBubble = document.getElementById("speech-bubble");
  const giftBox = document.getElementById("gift-box");
  const mirrorContainer = document.getElementById("mirror-container");
  const christmasMessage = document.getElementById("christmas-message");

  const messages = [
    "Seni bu kadar beklettiğim için özür dilerim.",
    "İşim başımdan aşkın maalesef...",
    "Sürekli küçük çocukları kendime inandırmak için dolaşıyorum.",
    "Bana olan inancını kaybetmediğin için teşekkürler.",
    "Senin için de bir hediyem var.",
    "Benim yetişmem gereken çocuklar var, seneye görüşürüz.",
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
      setTimeout(displayMessage, 2500); // Her mesaj 2.5 saniye kalır
    } else {
      // Tüm mesajlar bittiğinde konuşma balonunu gizle ve Noel Baba'yı gönder
      speechBubble.style.display = "none";
      santaContainer.style.animation = "moveSantaOutRight 3s ease-in-out forwards";

      // Noel Baba ekrandan çıktıktan sonra hediye kutusunu göster
      santaContainer.addEventListener("animationend", () => {
        santaContainer.style.display = "none";
        giftBox.style.display = "block";
      });
    }
  }

  // Hediye kutusuna tıklanınca görsel ve mesaj göster
  giftBox.addEventListener("click", () => {
    // Görsel ve mesaj kutusunu göster
    mirrorContainer.style.display = "block";

    // Konfeti efekti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  });

  setTimeout(() => {
    christmasMessage.style.display = "block";
  }, 3000); // 3 saniye gecikme

});
