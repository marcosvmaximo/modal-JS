const btns = document.querySelectorAll("button");
const div = document.querySelector(".modal-1");
const buttonActive = document.querySelector('.button-modal-1')

const toggleAriaHidden = () => {
  if(div.getAttribute('aria-hidden') === 'true'){
    div.setAttribute('aria-hidden', 'false')
  } else {
    div.setAttribute('aria-hidden', 'true')
  }
}

const toggleModal = (e) => {
  for (const button of btns) {
    if (button === e.target) div.classList.toggle("hidden");
  }
  (e.target !== div) ? console.log() : div.classList.toggle("hidden");

  toggleAriaHidden()
};

const elementsEvent = [buttonActive, div];

elementsEvent.forEach((el) => {
  el.addEventListener("click", (e) => toggleModal(e));
});
