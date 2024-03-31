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