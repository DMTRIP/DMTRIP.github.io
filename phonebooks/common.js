var addContactButton = document.querySelector('.add-popup');
var popup = document.querySelector('.popup-container');
var cancel = document.querySelector('.cancel');
var search = document.querySelector('.search');
var addContact = document.querySelector('.add-contact');
var numbers = ['1','2','3','4','5','6','7','8','9'];

//inputs

var phoneInput = document.querySelector('.phone-input');
var lastNameInput = document.querySelector('.last-name-input');
var initialsInput = document.querySelector('.initials-input');
var houseInput = document.querySelector('.house-input');
var flatInput = document.querySelector('.flat-input');

// add contact variables
var addPhone = document.querySelector('.add-phone');
var addLastName = document.querySelector('.add-last-name');
var addHouse = document.querySelector('.add-house');
var addFlat = document.querySelector('.add-flat');
var addInitials = document.querySelector('.add-initials');
//Styles
var checkEror = document.querySelectorAll('.form-1 .form-2');
    for(var i = 0; i < checkEror.length; i++) {
        checkEror.addEventListener('focus', function () {
            checkEror.style.borderColor = '#ced4da';
        });
    }



// End Styles


addContactButton.addEventListener('click', event = function () {
        popup.style.display = 'block';
}
);
cancel.addEventListener('click', event = function(){
   popup.style.display = 'none';
});

//checkbox



function phoneValidate(number) {
    return number.length === 10 && number[0] === '0';
}

function lastNameValidate(lastName){
    if(lastName.length < 3) return false;
    for(var i = 0; i <lastName.length;i++){
        for(var j =0;j<numbers.length;j++){
            if(lastName[i] === numbers[j]){
                return false;
            }
        }
    }
    return true;
}

function houseValidation(elem){
    if(isNaN(elem) || elem.length <= 3 && elem > 0){
        return true;
    }
}

function flatValidation(elem) {
    if(isNaN(elem) || elem.length <= 3 && elem > 0){
        return true;
    }
}

function initialVatidation(elem) {
    var pattern = /[а-яА-Я]{3,25}\s[а-яА-Я]\.\s[а-яА-Я]\./;
    return pattern.test(elem);
}

function validate(number,lastName,initials,house,flat){
    if(phoneValidate(number) && lastNameValidate(lastName) && houseValidation(house) && flatValidation(flat) && initialVatidation(initials))return true;


}


var phoneBook = [];

function Contact(phone = false,lastName = false,initials = false,houseNumber = false, flatNumber = false){
    this.phone = phone;
    this.lastName = lastName;
    this.initials = initials;
    this.houseNumber = houseNumber;
    this.flatNumber = flatNumber;

}

var phoneError = document.querySelectorAll('.add-phone,.phone-input');
for(let i = 0; i < phoneError.length; i++) {
        phoneError[i].addEventListener('change',function () {
            if(!phoneValidate(this.value)){this.style.borderColor = 'red';} else this.style.borderColor = '#ced4da';
        });
 }

var lastNameError = document.querySelectorAll('.last-name-input,.add-last-name');
for(let i = 0; i < phoneError.length; i++) {
    lastNameError[i].addEventListener('change',function () {
        if(!lastNameValidate(this.value)){this.style.borderColor = 'red';} else this.style.borderColor = '#ced4da';
    });
}

var initialsError = document.querySelectorAll('.add-initials,.initials-input');
for(let i = 0; i < phoneError.length; i++) {
    initialsError[i].addEventListener('change',function () {
        if(!initialVatidation(this.value)){this.style.borderColor = 'red';} else this.style.borderColor = '#ced4da';
    });
}

var houseFlatError = document.querySelectorAll('.house-input, .flat-input, .add-house, .add-flat');
console.log(houseFlatError);
for(let i = 0; i < houseFlatError.length; i++) {
    houseFlatError[i].addEventListener('change',function () {
        if(this.value.length <= 3 && this.value > 0){this.style.borderColor = '#ced4da';} else this.style.borderColor = 'red';
    });
}

addContact.addEventListener('click', event = function () {
    var phone = document.querySelector('.add-phone').value;
    var lastName = document.querySelector('.add-last-name').value;
    var initials = document.querySelector('.add-initials').value;
    var house = document.querySelector('.add-house').value;
    var flat = document.querySelector('.add-flat').value;

    var phoneValid;
    var lastNameValid;
    var initialsValid;
    var houseValid;
    var flatValid;


    if(phone === '' && lastName === '' && house === '' && flat === '' && initials === ''){
        alert('Enter some data');
    }
    //==============================

    if(phone === ''){
        phoneValid = true;
    }else{
        phoneValid = phoneValidate(phone);
    }


    //================================

    if(lastName === '' || lastName === ' '){
        lastNameValid = true;
    }else{
        lastNameValid = lastNameValidate(lastName);
    }


    //================================

    if(initials === ''){
        initialsValid = true;
    }else{
        initialsValid = initialVatidation(initials);
    }

    // ================================
    if(house === ''){
        houseValid = true;
    }else{
        houseValid = houseValidation(house);
    }



    //================================

    if(flat === ''){
        flatValid = true;
    }else{
        flatValid = flatValidation(flat);
    }



    if(phoneValid && lastNameValid && initialsValid && houseValid && flatValid){
        var tmp = new Contact(phone,lastName,initials,house,flat);
        phoneBook.push(tmp);
        console.log(phoneBook);
        console.log('true validate');
    }

});

search.addEventListener('click', evt => {
    var phone = document.querySelector('.phone-input').value;
    var lastName = document.querySelector('.last-name-input').value;
    var initials = document.querySelector('.initials-input').value;
    var house = document.querySelector('.house-input').value;
    var flat = document.querySelector('.flat-input').value;

    var phoneValid;
    var lastNameValid;
    var initialsValid;
    var houseValid;
    var flatValid;

    var phoneIndexFullMatch = [];
    var lastNameIndex = [];
    var houseIndex = [];
    var flatIndex = [];

    
    if(phone === '' && lastName === '' && house === '' && flat === '' && initials === ''){
        alert('Enter some data');
    }
    //==============================

    if(phone === ''){
        phoneValid = true;
    }else{
        phoneValid = phoneValidate(phone);
    }


    //================================

    if(lastName === '' || lastName === ' '){
        lastNameValid = true;
    }else{
        lastNameValid = lastNameValidate(lastName);
    }



    //================================

    if(initials === ''){
        initialsValid = true;
    }else{
        initialsValid = initialVatidation(initials);
    }


   // ================================
    if(house === ''){
        houseValid = true;
    }else{
        houseValid = houseValidation(house);
    }



    //================================

    if(flat === ''){
        flatValid = true;
    }else{
        flatValid = flatValidation(flat);
    }



    //=================================



if(phoneValid && lastNameValid && initialsValid && houseValid && flatValid){
    var radio = document.getElementsByName('prim');
    var checkRadio;
    for(var k = 0;k < radio.length;k++){
        if(radio[k].checked){
            checkRadio = radio[k].value;
        }
    }

    // проверка формы на заполнение
    var checkPhone,
        checkLastName,
        checkInitials,
        checkHouse,
        checkFlat;
    if(phone !== '') checkPhone = true;
    if(lastName !== '') checkLastName = true;
    if(initials !== '') checkInitials = true;
    if(house !== '') checkHouse = true;
    if(flat !== '') checkFlat = true;

    if(checkRadio === 'byFirstLetters'){
        console.log('by-first-letters');
    }
    else if(checkRadio === 'fullMatch'){
        console.log('full-match');

        //ищем полное совпадение по заполеным формам

        for(var i = 0; i  < phoneBook.length; i++){
            if(checkPhone && checkLastName && checkInitials && checkHouse && checkFlat){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat && phoneBook[i].initials === initials){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkLastName && checkHouse && checkFlat){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkLastName && checkHouse && checkInitials){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house && phoneBook[i].initials === initials){
                    console.log(phoneBook[i]);
                }

            }
            else if(checkPhone && checkLastName && checkFlat && checkInitials){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].flatNumber === flat && phoneBook[i].initials === initials){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkHouse && checkFlat && checkInitials){
                if(phoneBook[i].phone === phone && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat && phoneBook[i].initials === initials){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkLastName && checkHouse && checkFlat && checkInitials){
                if(phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat && phoneBook[i].initials === initials) {
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkLastName && checkHouse){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house){
                    console.log(phoneBook[i]);
                }

            }
            else if(checkPhone && checkLastName && checkFlat){
                if(phoneBook[i].phone === phone && phoneBook[i].lastName === lastName && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkHouse && checkFlat){
                if(phoneBook[i].phone === phone && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkLastName && checkHouse && checkFlat){
                if(phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat) {
                    console.log(phoneBook[i]);
                }
            }
            else if(checkPhone && checkFlat){
                if(phoneBook[i].phone === phone && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkLastName && checkHouse){
                if(phoneBook[i].lastName === lastName && phoneBook[i].houseNumber === house){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkLastName && checkFlat){
                if(phoneBook[i].lastName === lastName && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkHouse && checkFlat){
                if(phoneBook[i].houseNumber === house && phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }else if(checkPhone){
                if(phoneBook[i].phone === phone){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkLastName){
                if(phoneBook[i].lastName === lastName){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkHouse){
                if(phoneBook[i].houseNumber === house){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkFlat){
                if(phoneBook[i].flatNumber === flat){
                    console.log(phoneBook[i]);
                }
            }
            else if(checkInitials){
                if(phoneBook[i].initials === initials){
                    console.log(phoneBook[i]);
                }
            }
            else{
                console.log('not found');
            }

        }



    }
    else if(checkRadio === 'overLap'){
        console.log('overlap');
    }


}


});
