const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const wrapper = document.querySelector('#counter');
const decrementBtn = wrapper.firstElementChild;
const incrementBtn = wrapper.lastElementChild;

decrementBtn.addEventListener('click', () => {
    counterValue.textContent = counterValue.textContent - 1;
});

incrementBtn.addEventListener('click', () => {
    counterValue.textContent = +counterValue.textContent + 1;
})