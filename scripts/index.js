// Edit Profile Popup
const popup = document.querySelectorAll('.popup')
const openEditPop = document.querySelector(".profile__button-edit");
const closePop = document.querySelectorAll(".popup__close");
const editPopUp = document.querySelector(".popup__edit");
const submitPop = document.querySelector(".popup__save");
let popEditForm = document.querySelector(".popup__form-edit");
let nameInput = popEditForm.querySelector(".popup__input_type_name");
let jobInput = popEditForm.querySelector(".popup__input_type_bio");
let profileName = document.querySelector(".profile__name");
let profileBio = document.querySelector(".profile__bio");
// Add Cards Popup
const openAddPop = document.querySelector('.profile__button-add');
const addPopUp = document.querySelector(".popup__add");
let popAddForm = document.querySelector(".popup__form-add");
let titleInput = popAddForm.querySelector(".popup__input_type_title");
let linkInput = popAddForm.querySelector(".popup__input_type_link");
let cardTitle = document.querySelector('.card__title')
let cardImage = document.querySelector('.card__image')
const likeButton = document.querySelectorAll('.card__like')

function openClose (popEl) {
  popEl.classList.toggle('popup_opened')
}

//editing name and bio in profile
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = jobInput.value;
  openClose(editPopUp);
}

// Get title and link for new cards
function addFormSubmitHandler (evt) {
  evt.preventDefault();
  openClose(addPopUp);
  const formData = new FormData(evt.target)
  const newCard = {name: formData.get('name'), link:formData.get('link')}
  initialCards.splice(0,0,newCard)
  addCard(newCard)
  evt.target.reset()
}

//opening Edit Profile popup
openEditPop.addEventListener("click", () => {
  openClose(editPopUp);
  nameInput.value = profileName.textContent
  jobInput.value = profileBio.textContent
});

//opening Add Cards popup
openAddPop.addEventListener("click",() => {
  openClose(addPopUp);
})

//closing all popups
closePop.forEach(cp => cp.addEventListener("click", () => {
  popup.forEach(popEl => popEl.classList.contains('popup_opened') && openClose(popEl))
}));

popEditForm.addEventListener("submit", editFormSubmitHandler);
popAddForm.addEventListener("submit", addFormSubmitHandler);

//finding parental object
const cardsRoot = document.querySelector('.cards');

//insert cards into parental object
function renderCards(cards = initialCards) {
  initialCards.forEach(addCard)
}

//card template 
function addCard(card) {
  const cardTemplate = `
    <div class="card">
      <img
        src="${card.link}"
        alt="${card.name}"
        class="card__image"
      >
      <div class="card__description">
        <h2 class="card__title">${card.name}</h2>
        <button class="card__like" type="button"></button>
      </div>
    </div>
`
  cardsRoot.insertAdjacentHTML('afterbegin', cardTemplate)
}

function initCardEventListeners() {
  likeButton.addEventListener('click', () => { likeButton.classList.toggle('.card__like_pressed'); })
}

renderCards()