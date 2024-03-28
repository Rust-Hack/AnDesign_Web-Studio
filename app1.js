const firstForm = document.getElementById('firstForm');
const firstButton = document.getElementById('firstButton');

firstButton.addEventListener('click', () => {
    let firstSelected = firstForm.querySelector('input[name="1"]:checked');
    localStorage.setItem('first', JSON.stringify(firstSelected.value));
})


