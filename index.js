const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// ------------loder tranform------------
const sections = document.querySelectorAll("section");
const observer_opacity = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
sections.forEach((client) => {
    observer_opacity.observe(client);
});




// mobile nav
let navbtn = document.querySelector('.nav-btn')

let body = document.querySelector('body')
let slidebar = document.querySelector('.slider-bar');
navbtn.addEventListener('click', () => {
    slidebar.classList.toggle('active')
    navbtn.classList.toggle('active')    //nav button icon change
})

var lastscroltop = 0;
window.addEventListener("scroll", function () {
    var scrolToTop = window.scrollY || this.document.documentElement.scrollTop
    if (scrolToTop > lastscroltop) {
        slidebar.classList.remove("active")
        navbtn.classList.remove('active')    //nav button icon change
    }
})

// catagorylists options
let catagorylists = document.querySelectorAll(".catagory-list");
let textOptions = document.querySelectorAll(".list");
if (catagorylists) {
    catagorylists[0].classList.add("active")
    textOptions[0].classList.add("active")
    catagorylists.forEach((item, index) => {
        console.warn(index);

        item.addEventListener("click", () => {
            textOptions.forEach(option => {
                option.classList.remove("active")

            })
            catagorylists.forEach(menuItem => {
                menuItem.classList.remove("active");
            })
            textOptions[index].classList.add("active")
            // textOptions.classList.add("visible");

            item.classList.add("active");
        })
    })
}

