const infoBtn = document.querySelector('.info_btn');
const popupContainer = document.querySelector('.popup_container');
const popup = popupContainer.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

infoBtn.addEventListener('click', () => {
  popupContainer.classList.add('active');
});

popupClose.addEventListener('click', () => {
  popupContainer.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (
    popupContainer.classList.contains('active') &&
    !popup.contains(e.target) &&
    !infoBtn.contains(e.target)
  ) {
    popupContainer.classList.remove('active');
  }
});
