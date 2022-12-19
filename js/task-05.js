const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    outputEl.textContent = inputEl.value.trim();

    if (event.target.value.length <= 0) {
        outputEl.textContent = 'Anonymous';
    }
});
