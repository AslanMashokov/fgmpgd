const tabHeaders = document.querySelectorAll('[data-tab]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
        tabContent.forEach(function (item) {
            item.classList.add('hidden');
        });
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden')
    });
});



new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});


const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});