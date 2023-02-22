let slideIndex = 1 
showSlides(slideIndex)


function currentSlide(n) {
  showSlides(slideIndex = n)
}

function plusSlides(n) {
  showSlides(slideIndex += n)
}



function showSlides(n) {

  let i = 0; 
  slides = document.getElementsByClassName('review-mobile')
  dots = document.getElementsByClassName('dot')
  
  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }

  slides[slideIndex -1].style.display = "flex";
  dots[slideIndex -1].classList.add("active");

}




// FAQ 

let faqQuestions = document.getElementsByClassName('faq-question')
let faqAnswer = document.getElementsByClassName('faq-answer')
let iconUp = document.getElementById('fa-chevron-up')



for (let i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener('click', function() {
    faqAnswer[i].classList.toggle('active-faq')
    iconUp.classList.toggle('active-faq')
  })
}

