const calcul = document.getElementById('calcul');
const fourthButton = document.getElementById('fourthButton');
const telephone = document.getElementById('telephoneInput');
const hoverClickButton = document.getElementById('hoverClickButton');

calcul.innerHTML += +JSON.parse(localStorage.getItem('first')) + +JSON.parse(localStorage.getItem('second')) + +JSON.parse(localStorage.getItem('third')) + '$';

function formatPhoneNumber() {
    var input = document.getElementById('telephoneInput');
    var numbers = input.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
    var formattedNumber = '';

    if (numbers.length > 0) {
        formattedNumber += '+'; // Добавляем символ +
        formattedNumber += numbers.substring(0, 3); // Добавляем код страны
        if (numbers.length > 3) {
            formattedNumber += '(' + numbers.substring(3, 5) + ')'; // Добавляем первые две цифры кода
        }
        if (numbers.length > 5) {
            formattedNumber += numbers.substring(5, 8) + '-'; // Добавляем следующие три цифры
        }
        if (numbers.length > 8) {
            formattedNumber += numbers.substring(8, 10) + '-'; // Добавляем последние две цифры
        }
        if (numbers.length > 10) {
            formattedNumber += numbers.substring(10, 12); // Добавляем оставшиеся цифры
        }
    }

    input.value = formattedNumber; // Присваиваем отформатированное значение обратно в поле ввода
}

telephone.addEventListener('input', formatPhoneNumber)

emailjs.init("O7eKYdKRQt__pK38V");

    // Функция для отправки данных формы на почту
function sendEmail() {
    // Получаем данные из формы
    var telephone = document.getElementById('telephoneInput').value;

    // Определяем параметры для отправки письма
    var templateParams = {
        telephone: telephone,
        price: calcul.innerHTML
    };


    if(telephone.length === 17) {
        // Отправляем письмо с помощью EmailJS
        emailjs.send("service_vcp27nj","template_zqale41", templateParams)
        .then(function(response) {
            console.log('Письмо успешно отправлено!', response);
            // Здесь вы можете добавить дополнительную логику, если необходимо
        }, function(error) {
            console.error('Произошла ошибка при отправке письма', error);
            // Здесь вы можете обработать ошибку, если необходимо
        });
        hoverClickButton.innerHTML = 'Спасибо, данные успешно отправлены, наш менеджер свяжется с Вами в течении 30 минут';
    }

}