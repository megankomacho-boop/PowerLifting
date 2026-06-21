// slideshow.js
document.addEventListener("DOMContentLoaded", () => {
  const photos = [
    "pic/index.jpg",
    "pic/taikai.jpg",
    "pic/record.jpg",
    "pic/download.jpg"
  ];

  let currentIndex = 0;
  const slideImage = document.getElementById("slideImage");

  function slideshow() {
    currentIndex = (currentIndex + 1) % photos.length;
    slideImage.src = photos[currentIndex];
  }

  setInterval(slideshow, 3000); // 3秒ごとに画像切り替え
});
