const openPopEdit = document.querySelector(".profile__button-edit"); //edit button
const closePop = document.querySelector(".popup__close"); //close button
let popEditForm = document.querySelector(".popup__form-edit"); //edit profile popup
let popUpEdit = document.querySelector(".popup__edit-profile");
const submitPop = document.querySelector(".popup__save");
let nameInput = popEditForm.querySelector(".popup__input-name");
let jobInput = popEditForm.querySelector(".popup__input-bio");
let profileName = document.querySelector(".profile__name");
let profileBio = document.querySelector(".profile__bio");

// App card pop variables
const openPopAdd = document.querySelector(".profile__button-add");
const closePopAdd = document.querySelector(".popup__close-add"); //close button
let popAddForm = document.querySelector(".popup__form-add");
let popUpAdd = document.querySelector(".popup__add-card");
let titleInput = popAddForm.querySelector(".popup__input-title");
let linkInput = popAddForm.querySelector(".popup__input-link");
let addCardPop = document.querySelector('.profile__button-add')
let cardName = document.querySelector(".card__title")
let cardLink = document.querySelector(".card__image")

function openCloseEdit () {
        popUpEdit.classList.toggle('popup_opened');
}

function openCloseAdd () {
        popUpAdd.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileBio.textContent = jobInput.value;
  openClose();
}

function formSubmitHandlerAdd(evt) {
  evt.preventDefault();


  openCloseAdd();
}

openPopEdit.addEventListener("click", () => {
  openClose();
  nameInput.value = profileName.textContent
  jobInput.value = profileBio.textContent
});

openPopAdd.addEventListener("click", () => {
  openCloseAdd();
});

closePop.addEventListener("click", () => {
  openClose();
});

closePopAdd.addEventListener("click", () => {
  openCloseAdd();
});

popEditForm.addEventListener("submit", formSubmitHandler);
popAddForm.addEventListener("submit", formSubmitHandlerAdd)