// Slider

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex, "slider_mta");

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
   
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//    ;  
// }

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n, "slider_mta");
}


showSlides(slideIndex, "slider_devGaming");

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1, "slider_devGaming");
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1, "slider_devGaming");  
// }

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n, "slider_devGaming");
}

/* Основная функция слайдера */
function showSlides(n, selectorName) {
    let i;
    const slides = document.getElementsByClassName(selectorName);
   
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
 
    slides[slideIndex - 1].style.display = "block";
 
}

const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slider = document.querySelectorAll('.slider');

slider.forEach((item)=>{

  item.addEventListener('click',(e)=> {
    console.dir(e.target);
    if(e.target && e.target.textContent == "❮"){
      if(e.target.className == "prev mta"){
        showSlides (slideIndex += 1, "slider_mta");
      }else{
       
        showSlides (slideIndex += 1, "slider_devGaming");
      }
     
    }
    if(e.target && e.target.textContent == "❯"){
      if(e.target.className == "prev mta"){
        showSlides (slideIndex -= 1, "slider_mta");
      }else{
       
        showSlides (slideIndex -= 1, "slider_devGaming");
      }
    }

    
   
  
  });
});

next.addEventListener('click', ()=>  showSlides(slideIndex -= 1, "slider_mta"));

