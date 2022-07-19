/*Loader*/
setTimeout(() => {
    document.querySelector('.preloader').style.display = "none"
}, 560);

/*NAVBAR RESPONSIVE*/

$ (document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    })
})

/*
var navItems = document.querySelector(".menu")
var openNavBtn = document.querySelector("#open__nav-btn")
var closeNavBtn = document.querySelector("#close__nav-btn")

openNavBtn.addEventListener("click", ()=>{
    navItems.classList.add("active");
});

closeNavBtn.addEventListener("click", ()=>{
    navItems.classList.remove("active");
});
*/
/* Open and close Navbar Smal Screen*/

const navItems =document.querySelector(".menu")
const openNavBtn =document.querySelector("#open__nav-btn")
const closeNavBtn =document.querySelector("#close__nav-btn")
 
openNavBtn.addEventListener('click', ()=>{
    navItems.style.display ='inline-block';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='block';
    
})
const closeNav=()=>{
    navItems.style.display ='none';
    openNavBtn.style.display='block';
    closeNavBtn.style.display='none';
}



closeNavBtn.addEventListener('click', closeNav);






/*Slider*/
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for (let i = 0; i < nbr__img; i++) {
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', () => {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', () => {
    etape--;
    if (etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})

setInterval(function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 3000)


/*Date et copyright*/
const date = document.querySelector('.date')
const currentYear = new Date().getFullYear();
date.textContent = currentYear

/* fin Date et copyright*/



//ScrolToTOPBUTTON
/*
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener("click", function(){
    //window.scrollTo(0, 0);

    window.scrollTo({
        top:0,
        left :0,
        behavior:"smooth"
    })
    
})
*/






// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // RESPONSIVE BREAKPOINTS

    breakpoints: {
        // when windows width is > = 600px

        600: {
            slidesPerView: 2,
        },
        // when windows width is > = 1024px

        1024: {
            slidesPerView: 3,
        }

    }
});