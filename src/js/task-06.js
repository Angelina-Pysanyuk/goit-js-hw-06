const inputEl = document.querySelector('#validation-input');

const minValue = inputEl.dataset.length;
inputEl.addEventListener('blur', (event) => {
    event.target.value = event.target.value.trim();
    if (event.target.value.length === Number(minValue)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});

