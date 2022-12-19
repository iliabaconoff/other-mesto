// Edit Profile Popup
const popup = document.querySelectorAll('.popup')
const openEditPop = document.querySelector(".profile__button-edit");
const closePop = document.querySelector(".popup__close");
const submitPop = document.querySelector(".popup__save");
let popEditForm = document.querySelector(".popup__form-edit");
let nameInput = popEditForm.querySelector(".popup__input_type_name");
let jobInput = popEditForm.querySelector(".popup__input_type_bio");
let profileName = document.querySelector(".profile__name");
let profileBio = document.querySelector(".profile__bio");
// Add Cards Popup
const openAddPop = document.querySelector('.profile__button-add');
let popAddForm = document.querySelector(".popup__form-add");
let titleInput = popAddForm.querySelector(".popup__input_type_title");
let linkInput = popAddForm.querySelector(".popup__input_type_link");
let cardTitle = document.querySelector('.card__title')
let cardImage = document.querySelector('.card__image')

function openClose () {
  popup.forEach(element => {
    element.classList.toggle('popup_opened')
  });
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileBio.textContent = jobInput.value;
  openClose();
}

function addFormSubmitHandler (evt) {
  evt.preventDefault();

  titleInput.textContent = cardTitle.value;
  linkInput.textContent = cardImage.value;

}

openEditPop.addEventListener("click", () => {
  openClose();
  nameInput.value = profileName.textContent
  jobInput.value = profileBio.textContent
});

openAddPop.addEventListener("click", {
  openClose();
  
})

closePop.addEventListener("click", () => {
  openClose();
});

popEditForm.addEventListener("submit", editFormSubmitHandler);
popAddForm.addEventListener("submit", addFormSubmitHandler);