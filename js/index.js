let menuButton = document.getElementById("menu-btn");
let menuWindow = document.getElementById("menu-window");
let menuCloseButton = document.getElementById("menu-close-btn");
let cardButtons = document.querySelectorAll(".tastes-item-btn");
let overlays = document.querySelectorAll(".tastes-card");

menuButton.addEventListener("click", function () {
    menuWindow.classList.toggle("is-open");
});

menuCloseButton.addEventListener("click", function () {
    menuWindow.classList.toggle("is-open");
});

document.addEventListener("click", function (event) {
    let isClickInsideMenu =
        menuWindow.contains(event.target) || menuButton.contains(event.target);
    if (!isClickInsideMenu && !menuWindow.classList.contains("is-open")) {
        // Клик снаружи меню, и меню не открыто, поэтому ничего не делаем
        return;
    }
    if (!isClickInsideMenu && menuWindow.classList.contains("is-open")) {
        // Клик снаружи меню, и меню открыто, поэтому закрываем его
        menuWindow.classList.remove("is-open");
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Объявляем переменную для хранения текущего открытого оверлея
let currentOverlay = null;

// Добавляем обработчик клика к каждой кнопке
cardButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        // Если текущий оверлей открыт и не является текущим оверлеем, скрываем его
        if (currentOverlay && currentOverlay !== overlays[index]) {
            currentOverlay.classList.remove('called');
        }

        // Если текущий оверлей открыт и является текущим оверлеем, ничего не делаем
        if (currentOverlay && currentOverlay === overlays[index]) {
            return;
        }

        // Добавляем класс для отображения оверлея
        overlays[index].classList.add('called');

        // Обновляем текущий открытый оверлей
        currentOverlay = overlays[index];

        // Добавляем обработчик клика за пределами оверлея для его закрытия
        const closeOverlayOutside = (event) => {
            if (!overlays[index].contains(event.target) && !cardButtons[index].contains(event.target)) {
                // Если клик произошел за пределами оверлея и кнопки, удаляем класс для скрытия оверлея
                overlays[index].classList.remove('called');
                // Удаляем обработчик клика за пределами оверлея после закрытия
                document.removeEventListener('click', closeOverlayOutside);
                // Обнуляем текущий открытый оверлей
                currentOverlay = null;
            }
        };
        document.addEventListener('click', closeOverlayOutside);
    });
});