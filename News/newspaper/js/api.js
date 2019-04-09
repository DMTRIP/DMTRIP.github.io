
var data = 0;
var indexNews;
function Request(url,callback) {
    var f  = callback || function(data){};

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true,);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            data = JSON.parse(xhr.responseText);
            indexNews = xhr.responseText;
            f(data);
        }
    };
}


// news category api url
var business = 'https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=05cd1448332a4f11bff5033b8815ae15',
    entertainment = 'https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=05cd1448332a4f11bff5033b8815ae15',
    health = 'https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=05cd1448332a4f11bff5033b8815ae15',
    science = 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=05cd1448332a4f11bff5033b8815ae15',
    sports = 'https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=05cd1448332a4f11bff5033b8815ae15',
    technology = 'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=05cd1448332a4f11bff5033b8815ae15',
    topNews = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=05cd1448332a4f11bff5033b8815ae15';

// Top and International news
Request(topNews, function () {
    var topNews = document.querySelectorAll('.top-news li > a');

    for(var i = 0; i < topNews.length; i++){
        topNews[i].setAttribute('href',data.articles[i].url);
        topNews[i].innerHTML = data.articles[i].title;
    }
});

// News Today
Request(topNews, function () {
    var link = document.querySelectorAll('.news-today a');
    var linkH6 = document.querySelectorAll('.news-today a h6 > b');
    var date = document.querySelectorAll('.news-today div p');
    for(var i = 0, j = 4; i < link.length; i++, j++) {
     link[i].setAttribute('href',data.articles[j].url);
     linkH6[i].innerHTML = data.articles[j].title;
        var monthNumber = parseInt(data.articles[j].publishedAt.slice(6,7));
        var year = data.articles[j].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[j].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[j].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
 }
});

// featured-post
Request(business, function () {
    var imgLink = document.querySelectorAll('.business .post-thumb a');
    var image = document.querySelectorAll('.business .post-thumb a img');
    var titleLink = document.querySelectorAll('.business .post-title');
    var title = document.querySelectorAll('.business .post-title h6');
    var author = document.querySelectorAll('.business .post-author a');
    var description = document.querySelectorAll('.business .post-excerp');
    var postMeta = document.querySelectorAll('.business .post-meta');
    for(var i = 0; i < image.length; i++){
        console.log(data.articles[i].url);
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        if(postMeta[i].childElementCount > 2){
            author[i].setAttribute('href',data.articles[i].url);
            author[i].innerHTML = data.articles[i].author;
            description[i].innerHTML = data.articles[i].description;
        }

    }
});

function postCategory(){
    var bussiness = document.querySelectorAll('.business .post-catagory');
    var entent = document.querySelectorAll('.entertainment .post-catagory');
    var sdBusiness = document.querySelectorAll('.sd-business .post-catagory');
    var sdSports = document.querySelectorAll('.sd-sports .post-catagory');
    var sdEntert = document.querySelectorAll('.sd-entertainment .post-catagory');
    var sdTehnology = document.querySelectorAll('.sd-technology .post-catagory');

    for(let i = 0; i < bussiness.length; i++) {
        bussiness[i].innerHTML = 'Світ';
    }
    for(let i = 0; i < entent.length; i++) {
        entent[i].innerHTML = 'Шоу-бізнес';
    }
    for (let i = 0; i < sdBusiness.length ; i++) {
        sdBusiness[i].innerHTML = 'Світ';
    }
    for (let i = 0; i < sdSports.length ; i++) {
        sdSports[i].innerHTML = 'Спорт';
    }
    for (let i = 0; i < sdEntert.length ; i++) {
        sdEntert[i].innerHTML = 'Шоу-бізнес';
    }
    for (let i = 0; i < sdTehnology.length ; i++) {
        sdTehnology[i].innerHTML = 'Технології';
    }
}
postCategory();

// Show business
Request(entertainment,function () {
    var imgLink = document.querySelectorAll('.entertainment .post-thumb a'),
        image = document.querySelectorAll('.entertainment .post-thumb a img'),
        titleLink = document.querySelectorAll('.entertainment .post-title'),
        title = document.querySelectorAll('.entertainment .post-title h6');
        postCategory = document.querySelectorAll('.entertainment .post-catagory');
    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        postCategory[i].innerHTML = 'Шоу-бізнес';
    }
});

// technology
Request(technology,function () {
    var imgLink = document.querySelectorAll('.technology .post-thumb a'),
        image = document.querySelectorAll('.technology .post-thumb a img'),
        titleLink = document.querySelectorAll('.technology .post-title'),
        title = document.querySelectorAll('.technology .post-title h6'),
        date = document.querySelectorAll('.technology .post-date');

    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;

        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});

// science
Request(science,function () {
    var imgLink = document.querySelectorAll('.science .post-thumb a'),
        image = document.querySelectorAll('.science .post-thumb a img'),
        titleLink = document.querySelectorAll('.science .post-title'),
        title = document.querySelectorAll('.science .post-title h6'),
        date = document.querySelectorAll('.science .post-date');

    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;

        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});

// sidebar
Request(sports,function () {
    var imgLink = document.querySelectorAll('.sd-sports .post-thumb a'),
        image = document.querySelectorAll('.sd-sports .post-thumb a img'),
        titleLink = document.querySelectorAll('.sd-sports .post-title'),
        title = document.querySelectorAll('.sd-sports .post-title h6'),
        date = document.querySelectorAll('.sd-sports .post-date');
        postCategory = document.querySelectorAll('.sd-sports .post-catagory');
    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        postCategory[i].innerHTML = 'Спорт';
        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});
Request(business,function () {
    var imgLink = document.querySelectorAll('.sd-business .post-thumb a'),
        image = document.querySelectorAll('.sd-business .post-thumb a img'),
        titleLink = document.querySelectorAll('.sd-business .post-title'),
        title = document.querySelectorAll('.sd-business .post-title h6'),
        date = document.querySelectorAll('.sd-business .post-date');
        postCategory = document.querySelectorAll('.sd-business .post-catagory');
    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        postCategory[i].innerHTML = 'Світ';
        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});
Request(entertainment,function () {
    var imgLink = document.querySelectorAll('.sd-entertainment .post-thumb a'),
        image = document.querySelectorAll('.sd-entertainment .post-thumb a img'),
        titleLink = document.querySelectorAll('.sd-entertainment .post-title'),
        title = document.querySelectorAll('.sd-entertainment .post-title h6'),
        date = document.querySelectorAll('.sd-entertainment .post-date');
        postCategory = document.querySelectorAll('.sd-entertainment .post-catagory');
    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        postCategory[i].innerHTML = 'Шоу-бізнес';
        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});
Request(technology,function () {
    var imgLink = document.querySelectorAll('.sd-technology .post-thumb a'),
        image = document.querySelectorAll('.sd-technology .post-thumb a img'),
        titleLink = document.querySelectorAll('.sd-technology .post-title'),
        title = document.querySelectorAll('.sd-technology .post-title h6'),
        date = document.querySelectorAll('.sd-technology .post-date');
        postCategory = document.querySelectorAll('.sd-technology .post-catagory');
    for(var i = 0; i < image.length; i++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        postCategory[i].innerHTML = 'Технології';
        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }

});
function foo() {
    var categoty = document.querySelectorAll('.sports .post-catagory');
    for(var i = 0; i < categoty.length; i++){
        categoty[i].innerHTML = 'Спорт';
    }
}


//category block
Request(sports, function () {
    var imgLink = document.querySelectorAll('.sports .post-thumb a');
    var image = document.querySelectorAll('.sports .post-thumb a img');
    var titleLink = document.querySelectorAll('.sports .post-title');
    var title = document.querySelectorAll('.sports .post-title h6');
    var author = document.querySelectorAll('.sports .post-author a');
    var description = document.querySelectorAll('.sports .post-excerp');
    var postMeta = document.querySelectorAll('.sports .post-meta');
    for(var i = 0; i < image.length; i++){
        console.log(data.articles[i].url);
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        if(postMeta[i].childElementCount > 2){
            author[i].setAttribute('href',data.articles[i].url);
            author[i].innerHTML = data.articles[i].author;
            description[i].innerHTML = data.articles[i].description;
        }

    }
});
Request(technology, function () {
    var imgLink = document.querySelectorAll('.ca-technology .post-thumb a');
    var image = document.querySelectorAll('.ca-technology .post-thumb a img');
    var titleLink = document.querySelectorAll('.ca-technology .post-title');
    var title = document.querySelectorAll('.ca-technology .post-title h6');
    var author = document.querySelectorAll('.ca-technology .post-author a');
    var description = document.querySelectorAll('.ca-technology .post-excerp');
    var postMeta = document.querySelectorAll('.ca-technology .post-meta');
    for(var i = 0; i < image.length; i++){
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src',data.articles[i].urlToImage);
        titleLink[i].setAttribute('href',data.articles[i].url);
        title[i].innerHTML = data.articles[i].title;
        if(postMeta[i].childElementCount > 2){
            author[i].setAttribute('href',data.articles[i].url);
            author[i].innerHTML = data.articles[i].author;
            description[i].innerHTML = data.articles[i].description;
        }

    }
});
// Request(health, function () {
//     var imgLink = document.querySelectorAll('.ca-health .post-thumb a');
//     var image = document.querySelectorAll('.ca-health .post-thumb a img');
//     var titleLink = document.querySelectorAll('.ca-health .post-title');
//     var title = document.querySelectorAll('.ca-health .post-title h6');
//     var author = document.querySelectorAll('.ca-health .post-author a');
//     var description = document.querySelectorAll('.ca-health .post-excerp');
//     var postMeta = document.querySelectorAll('.ca-health .post-meta');
//     for(var i = 0; i < image.length; i++){
//         imgLink[i].setAttribute('href',data.articles[i].url);
//         image[i].setAttribute('src',data.articles[i].urlToImage);
//         titleLink[i].setAttribute('href',data.articles[i].url);
//         title[i].innerHTML = data.articles[i].title;
//         if(postMeta[i].childElementCount > 2){
//             author[i].setAttribute('href',data.articles[i].url);
//             author[i].innerHTML = data.articles[i].author;
//             description[i].innerHTML = data.articles[i].description;
//         }
//
//     }
// });



// link to category
setTimeout(function () {
    var category = document.querySelectorAll('.post-catagory');
    for(var i = 0; i < category.length; i++) {
        console.log(category[i].innerHTML);
        if(category[i].innerHTML === 'Світ') {
            category[i].setAttribute('href','catagories-post.html');
        } else if(category[i].innerHTML === 'Технології') {
            category[i].setAttribute('href','catagories-technology.html');
        } else if(category[i].innerHTML === 'Здоровя') {
            category[i].setAttribute('href','catagories-health.html');
        } else if(category[i].innerHTML === 'Спорт') {
            category[i].setAttribute('href','catagories-sport.html');
        } else if(category[i].innerHTML === 'Шоу-бізнес') {
            category[i].setAttribute('href','catagories-show-busines.html');
        }
    }
    console.log(category);
},100);



