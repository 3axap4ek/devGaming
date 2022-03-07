// Slider

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex, "slider_mta");

showSlides(slideIndex, "slider_devGaming");

showSlides(slideIndex, "slider_devGamingpl");


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
      }else if(e.target.className == "prev devGamingpl"){
        showSlides (slideIndex += 1, "slider_devGamingpl");
      }
      else{
        showSlides (slideIndex += 1, "slider_devGaming");
      }
     
    }
    if(e.target && e.target.textContent == "❯"){
      if(e.target.className == "next mta"){
        showSlides (slideIndex -= 1, "slider_mta");
      }else if(e.target.className == "next devGamingpl"){
        showSlides (slideIndex -= 1, "slider_devGamingpl");
      }
      else{
       
        showSlides (slideIndex -= 1, "slider_devGaming");
      }
    }

  });
});



