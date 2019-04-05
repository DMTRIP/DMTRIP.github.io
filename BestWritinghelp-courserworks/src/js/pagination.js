
//pagination

var pgElem = document.querySelectorAll('.page-item');
console.log(pgElem);

pgElem[0].addEventListener('click', evt => {
    for(var i = 0;i < pgElem.length - 1;i++){
        pgElem[i].classList.remove('active');
    }
    pgElem[0].classList.add('active');
});


pgElem[1].addEventListener('click', evt => {
    for(var i = 0;i < pgElem.length - 1;i++){
        pgElem[i].classList.remove('active');
    }
    pgElem[1].classList.add('active');
});



pgElem[2].addEventListener('click', evt => {
    for(var i = 0;i < pgElem.length - 1;i++){
        pgElem[i].classList.remove('active');
    }
    pgElem[2].classList.add('active');
});

pgElem[3].addEventListener('click', evt => {
    for(var i = 0;i < pgElem.length - 1;i++){
        pgElem[i].classList.remove('active');
    }
    pgElem[3].classList.add('active');
});

//select

