const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    outputEl.value = 'Anonymous';
    outputEl.textContent = inputEl.value.trim();
});
