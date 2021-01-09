const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__mobile-nav");
const menuLine = document.querySelector(".active-link");
const body = document.querySelector("body");
const menuLink = document.querySelector(".header__mobile-link");
const menuLink2 = document.querySelector(".header__mobile-link-2");
const menuLink3 = document.querySelector(".header__mobile-link-3");
const menuLink4 = document.querySelector(".header__mobile-link-4");
const animItems = document.querySelectorAll(".anim-items");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});

menuLink.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});
menuLink2.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});
menuLink3.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});
menuLink4.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 8;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } 
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
};