$(document).ready(function () {
   $('.sidenav').sidenav();
});

//============//

$('.select').on('click','.placeholder',function(){
   var parent = $(this).closest('.select');
   if ( ! parent.hasClass('is-open')){
      parent.addClass('is-open');
      $('.select.is-open').not(parent).removeClass('is-open');
   }else{
      parent.removeClass('is-open');
   }
}).on('click','ul>li',function(){
   var parent = $(this).closest('.select');
   parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
   parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
});

//


$('.md-select').on('click', function(){
   $(this).toggleClass('active')
});

$('.md-select ul li').on('click', function() {
   var v = $(this).text();
   $('.md-select ul li').not($(this)).removeClass('active');
   $(this).addClass('active');
   $('.md-select label button').text(v)
});

var addHover = document.querySelectorAll('.about-item-in-wrapper article');
var onHover = document.querySelectorAll('.about-item-icon div');

// easy writing block
if(window.matchMedia('(min-width:762px)').matches) {



   onHover[0].addEventListener('pointerover', event = function () {
      addHover[0].classList.add('about-item-event');
   });
   onHover[0].addEventListener('pointerout', event = function () {
      addHover[0].classList.remove('about-item-event');
   });

   addHover[0].addEventListener('pointerover', event = function () {
      onHover[0].classList.add('bg-white');
   });

   addHover[0].addEventListener('pointerout', event = function () {
      onHover[0].classList.remove('bg-white');
   });


   onHover[1].addEventListener('pointerover', event = function () {
      addHover[1].classList.add('about-item-event');
   });
   onHover[1].addEventListener('pointerout', event = function () {
      addHover[1].classList.remove('about-item-event');
   });

   addHover[1].addEventListener('pointerover', event = function () {
      onHover[1].classList.add('bg-white');
   });

   addHover[1].addEventListener('pointerout', event = function () {
      onHover[1].classList.remove('bg-white');
   });

//============


   onHover[2].addEventListener('pointerover', event = function () {
      addHover[2].classList.add('about-item-event');
   });
   onHover[2].addEventListener('pointerout', event = function () {
      addHover[2].classList.remove('about-item-event');
   });

   addHover[2].addEventListener('pointerover', event = function () {
      onHover[2].classList.add('bg-white');
   });

   addHover[2].addEventListener('pointerout', event = function () {
      onHover[2].classList.remove('bg-white');
   });

//===============

   onHover[3].addEventListener('pointerover', event = function () {
      addHover[3].classList.add('about-item-event');
   });
   onHover[3].addEventListener('pointerout', event = function () {
      addHover[3].classList.remove('about-item-event');
   });

   addHover[3].addEventListener('pointerover', event = function () {
      onHover[3].classList.add('bg-white');
   });

   addHover[3].addEventListener('pointerout', event = function () {
      onHover[3].classList.remove('bg-white');
   });
}

//======================

var easyImg = document.querySelectorAll('.about-item-icon img');

easyImg[0].addEventListener('pointerover', event = function () {
   addHover[0].classList.add('art-display');
});

easyImg[0].addEventListener('pointerout', event = function () {
   addHover[0].classList.remove('art-display');
});


easyImg[1].addEventListener('pointerover', event = function () {
   addHover[1].classList.add('art-display');
   addHover[1].classList.add('art-display-2-pos');
});

easyImg[1].addEventListener('pointerout', event = function () {
   addHover[1].classList.remove('art-display');
});

//

easyImg[2].addEventListener('pointerover', event = function () {
   addHover[2].classList.add('art-display');
   addHover[2].classList.add('art-display-3-pos');
});

easyImg[2].addEventListener('pointerout', event = function () {
   addHover[2].classList.remove('art-display');
});

//

easyImg[3].addEventListener('pointerover', event = function () {
   addHover[3].classList.add('art-display');
   addHover[3].classList.add('art-display-4-pos');
});

easyImg[3].addEventListener('pointerout', event = function () {
   addHover[3].classList.remove('art-display');
});

$('.md-select').on('click', function(){
   $(this).toggleClass('active')
});

$('.md-select ul li').on('click', function() {
   var v = $(this).text();
   $('.md-select ul li').not($(this)).removeClass('active');
   $(this).addClass('active');
   $('.md-select label button').text(v)
});

console.log('2');