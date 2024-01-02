const scriptURL = 'https://script.google.com/macros/s/AKfycbwVJa2LdLG1hyQv_QO1zAD8hUWm_t-4BWaYJsO6wPRJt5eR9AgUSlS166kAJCpwVb-w/exec';
const form = document.forms['reservationForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) , mode: 'no-cors',})
  .then(response => alert("Thank you! Your Reservation Form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})