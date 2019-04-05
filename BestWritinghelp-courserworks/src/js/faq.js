
//faq block


var faqItem = document.querySelectorAll('.post-faq-text > h3');
var faqBlock = document.querySelectorAll('.post-faq-item');
var count = 0;

faqItem[0].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[0].style.display = 'none';
    }else{
        faqBlock[0].style.display = 'block';
    }
});

faqItem[1].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[1].style.display = 'none';
    }else{
        faqBlock[1].style.display = 'block';
    }
});

faqItem[2].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[2].style.display = 'none';
    }else{
        faqBlock[2].style.display = 'block';
    }
});


faqItem[3].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[3].style.display = 'none';
    }else{
        faqBlock[3].style.display = 'block';
    }
});

faqItem[4].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[4].style.display = 'none';
    }else{
        faqBlock[4].style.display = 'block';
    }
});

faqItem[5].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[5].style.display = 'none';
    }else{
        faqBlock[5].style.display = 'block';
    }
});

faqItem[6].addEventListener('click', event = function () {
    count++;
    if(count % 2 === 0){
        faqBlock[6].style.display = 'none';
    }else{
        faqBlock[6].style.display = 'block';
    }
});