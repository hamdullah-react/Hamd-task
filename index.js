const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modalbox");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".hide");


images.forEach((image) => {
  image.addEventListener("click", () => {
    
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("show");

    close.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  });
});