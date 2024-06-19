function showSidebar(){
    const sidebar = document.querySelector('.side_bar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.side_bar')
    sidebar.style.display = 'none'
}

// const slide = document.querySelectorAll('.testimonial-box-left img')
// let slideIndex = 0;
// let intervalId = null;

// // initalizeSlider();
// document.addEventListener("DOMContentLoaded", initalizeSlider)

// function initalizeSlider(){

//     slides[slideIndex].classList.add("displaySlide");

// }

// function showSlide(index){

// }

// function prevSlide(){

// }

// function nextSlide(){
    
// }

// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.testimonial-box-left img');
//     const texts = document.querySelectorAll('.testimonial-box-right .testimonial-text p');

//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }

//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === currentSlide);
//     });

//     texts.forEach((text, i) => {
//         text.classList.toggle('active', i === currentSlide);
//     });
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// // Initial display
// showSlide(currentSlide);

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-box');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initial display
showSlide(currentSlide);