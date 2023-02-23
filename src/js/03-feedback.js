const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};
populateTextForn();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(populateStorageValue, 500));

function populateStorageValue(evt) {
  feedbackFormData[evt.target.name] = evt.target.value;
  const objJSON = JSON.stringify(feedbackFormData);
  localStorage.setItem(STORAGE_KEY, objJSON);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (textarea.value.trim() === '' || input.value.trim() === '') {
    alert('Всі поля мають бути заповнені');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(`email: ${feedbackFormData.email}`);
  console.log(`message: ${feedbackFormData.message}`);
}

function populateTextForn() {
  const savedTextForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedTextForm) {
    input.value = savedTextForm.email;
    textarea.value = savedTextForm.message;
  }
}
