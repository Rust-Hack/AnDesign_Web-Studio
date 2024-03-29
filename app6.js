emailjs.init("O7eKYdKRQt__pK38V");

    // Функция для отправки данных формы на почту
function sendForm() {
    // Получаем данные из формы
    var phoneNumber = document.querySelector('.more-details-entry-field[type="tel"]').value;
    var email = document.querySelector('.more-details-entry-field[type="email"]').value;
    // Определяем параметры для отправки письма
    var templateParams = {
        telephone: phoneNumber,
        email: email,
        web: 'сайт компании'
    };


    if(phoneNumber.length === 13) {
        // Отправляем письмо с помощью EmailJS
        emailjs.send("service_vcp27nj","template_f9e6yls", templateParams)
            .then(function(response) {
                console.log('Письмо успешно отправлено!', response);
                // Здесь вы можете добавить дополнительную логику, если необходимо
            }, function(error) {
                console.error('Произошла ошибка при отправке письма', error);
                // Здесь вы можете обработать ошибку, если необходимо
            });
    }

}

document.querySelector('.more-details-entry-field-submit[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    sendForm(); // Вызываем функцию отправки формы
});