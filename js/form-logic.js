window.onload = function () {
    document
        .getElementById("review-form")
        .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            var name = document.getElementById("form-name").value;
            var email = document.getElementById("form-email").value;
            var phoneNumber = document.getElementById("form-number").value;
            var comment = document.getElementById("form-comment").value;

            // Check if the terms and conditions checkbox is checked
            var policyCheckbox = document.getElementById("form-policy");
            if (!policyCheckbox.checked) {
                alert("Please accept the terms and conditions.");
                return;
            }

            // Send data to specific email address (replace 'your-email@example.com' with your actual email address)
            var mailtoLink =
                "mailto:spirit14081992@gmail.com" +
                "?subject=" +
                encodeURIComponent("Feedback") +
                "&body=" +
                encodeURIComponent(
                    "Name: " +
                        name +
                        "\nEmail: " +
                        email +
                        "\nPhone Number: " +
                        phoneNumber +
                        "\nComment: " +
                        comment
                );
            window.location.href = mailtoLink;

            // Show thank you message
            alert("Спасибо за Ваш отзыв!");

            // Clear form fields
            document.getElementById("form-name").value = "";
            document.getElementById("form-email").value = "";
            document.getElementById("form-number").value = "";
            document.getElementById("form-comment").value = "";
            policyCheckbox.checked = false;
        });
};

// Функция для проверки имени
function validateName() {
    const nameInput = document.getElementById("form-name");
    const nameLabel = nameInput
        .closest(".form-field-item")
        .querySelector(".field-item-label");
    const nameRegex = /^[a-zA-Z\s]+$/; // Регулярное выражение для проверки имени

    if (!nameRegex.test(nameInput.value)) {
        nameLabel.classList.add("error");
    } else {
        nameLabel.classList.remove("error");
    }
}

// Функция для проверки email
function validateEmail() {
    const emailInput = document.getElementById("form-email");
    const emailLabel = emailInput
        .closest(".form-field-item")
        .querySelector(".field-item-label");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email

    if (!emailRegex.test(emailInput.value)) {
        emailLabel.classList.add("error");
    } else {
        emailLabel.classList.remove("error");
    }
}

// Функция для проверки номера телефона
function validatePhoneNumber() {
    const phoneInput = document.getElementById("form-number");
    const phoneLabel = phoneInput
        .closest(".form-field-item")
        .querySelector(".field-item-label");
    const phoneRegex = /^[+0-9]+$/; // Регулярное выражение для проверки номера телефона

    if (!phoneRegex.test(phoneInput.value)) {
        phoneLabel.classList.add("error");
    } else {
        phoneLabel.classList.remove("error");
    }
}

// Функция для проверки всех полей при отправке формы
function validateForm(event) {
    event.preventDefault(); // Отменяем стандартное действие отправки формы

    // Проверяем каждое поле
    validateName();
    validateEmail();
    validatePhoneNumber();

    // Если хотя бы одно поле имеет класс input-error, форма не будет отправлена
    const inputs = document.querySelectorAll(".form-input");
    let isValid = true;
    inputs.forEach((input) => {
        const inputLabel = input
            .closest(".form-field-item")
            .querySelector(".field-item-label");
        if (inputLabel.classList.contains("error")) {
            isValid = false;
        }
    });

    if (isValid) {
        document.getElementById("review-form").submit();
    }
}

// Добавляем обработчики событий для каждого поля
document.getElementById("form-name").addEventListener("blur", validateName);
document.getElementById("form-email").addEventListener("blur", validateEmail);
document
    .getElementById("form-number")
    .addEventListener("blur", validatePhoneNumber);

// Добавляем обработчик события отправки формы
document.getElementById("review-form").addEventListener("submit", validateForm);
