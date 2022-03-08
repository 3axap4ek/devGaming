// Slider


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

    // Обработчик события проверяет на нажимаемый слайдер и именно его перелистывает
 
    // Листает назад
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
    // Листает вперед
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


// sticky hat
const menu = document.querySelector('.menu'),
      up = document.querySelector('.up_block');
// обработчик события на window
window.addEventListener('scroll', ()=>{
  
  // eсли scroll top больше 50 меняем поизицию nav
  if(document.documentElement.scrollTop >= 50){
      menu.style.position = 'sticky';
      menu.style.top = '0px';
  }
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop >= 350){
      up.style.display = 'block';
      up.style.position = 'fixed';
      up.style.top = '35px';
      up.style.right = '1px';
  }else{
    up.style.display = 'none';
  }
});
// Функция установки скролла
function getScrollTop(i){
  document.documentElement.scrollTop = i;
}

// обработчик события для кнопки вверх
up.addEventListener('click', ()=>{
  getScrollTop(0);
});


// навигационное меню
menu.addEventListener('click', (e)=>{
 // проверяем куда нажимает пользователь и после скролим на выбранный заголовок
   if(e.target && e.target.className == 'mta'){
    getScrollTop(350);
   }

   if(e.target && e.target.className == 'lua'){
    getScrollTop(950);
   }
   if(e.target && e.target.className == 'rp'){
    getScrollTop(1400);
   }
   if(e.target && e.target.className == 'devgaming'){
    getScrollTop(2820);
   }
});


