const thirdButton = document.getElementById('thirdButton');
const thirdForm = document.getElementById('thirdForm');

thirdButton.addEventListener('click', () => {
    let thirdSelected = thirdForm.querySelector('input[name="3"]:checked');
    localStorage.setItem('third', JSON.stringify(thirdSelected.value));
})
