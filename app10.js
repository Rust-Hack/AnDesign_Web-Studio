function formatPhoneNumber() {
    var input = document.getElementById('sendMessageTel');
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

document.getElementById('sendMessageTel').addEventListener('input', formatPhoneNumber);

emailjs.init('O7eKYdKRQt__pK38V');

// Функция для отправки формы
function sendMessage() {
    // Получаем значения полей формы
    var name = document.getElementById('sendMessageName').value;
    var phoneNumber = document.getElementById('sendMessageTel').value;
    var email = document.getElementById('sendMessageEmail').value;
    var message = document.querySelector('.send-message-form textarea').value;
    var messageSend = document.getElementById('sendMessageText');

    // Параметры для отправки
    var templateParams = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
    };

    if(phoneNumber.length === 17) {
        emailjs.send("service_vcp27nj","template_zqale41", templateParams)
        .then(function(response) {
            console.log('Письмо успешно отправлено!', response);
            // Можно добавить дополнительную логику, если необходимо
        }, function(error) {
            console.error('Ошибка при отправке письма', error);
            // Можно добавить обработку ошибок, если необходимо
        });
        messageSend.innerHTML = 'Спасибо, данные успешно отправлены, наш менеджер свяжется с Вами в течении 30 минут';
    }
    // Отправляем запрос через EmailJS

}

// Добавляем обработчик события для отправки формы при нажатии на кнопку
document.querySelector('.send-message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    sendMessage(); // Вызываем функцию отправки формы
});