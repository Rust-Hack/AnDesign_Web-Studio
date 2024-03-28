const secondForm = document.getElementById('secondForm');
const secondButton = document.getElementById('secondButton');

secondButton.addEventListener('click', () => {
    let  secondSelected = secondForm.querySelector('input[name="2"]:checked');
    localStorage.setItem('second', JSON.stringify(secondSelected.value));
})

console.log(JSON.parse(localStorage.getItem('first')));
