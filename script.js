const btns = document.querySelectorAll("button");
const div = document.querySelector(".modal-1");
const buttonActive = document.querySelector('.button-modal-1')

const toggleModal = (e) => {
  for (const button of btns) {
    if (button === e.target) div.classList.toggle("hidden");
  }
  (e.target !== div) ? console.log() : div.classList.toggle("hidden");
};

const elementsEvent = [buttonActive, div];

elementsEvent.forEach((el) => {
  el.addEventListener("click", (e) => toggleModal(e));
});
