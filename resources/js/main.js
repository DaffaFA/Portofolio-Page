require('fullpage.js/vendors/scrolloverflow');

var fullpage = require('fullpage.js');
var lines = document.querySelectorAll('.line-bg');
var heroText = document.querySelectorAll('.text-container');
var body = document.querySelector('body');
var circle = document.querySelectorAll('.ui-skill circle'); 
var circlePhoto = document.querySelectorAll('.photo-skill circle');
var bg = document.querySelector('.white-animate');
var clock = document.getElementById('clock');
var overlayer = document.querySelector('.op');

var fullpage = new fullpage('#wrapper', {
    autoScrolling: true,
    navigation: true,
    scrollOverflow: true
})

var uiCount = new CountUp ('ui-count', 70, {
    duration: 4
});

var photoCount = new CountUp('photo-count', 80, {
    duration: 5
})

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        lines.forEach(line => {
            line.classList.add('line-loaded');
        }); 
        heroText[0].classList.add('dom-loaded');
    }, 300);
    
    setTimeout(() => {
        heroText[0].classList.add('animate-end');
    }, 2300);

    check();
    checkSectionThree();
    checkSectionFourth();
})

// function checkSection (sectionClass, callback) {
//     if (!body.classList.contains(sectionClass)) {
//         setTimeout(() => {
//             checkSection();
//             console.log('it doesnt work');
//         }, 200);
//     } else {
//         callback();
//     }
// }



function clockShow () {
    let now = new Date;
    let second = now.getSeconds().toString();
    let minutes = now.getMinutes().toString();
    let hours = now.getMinutes.toString();
    if ( second.length == 1 ) {
        second = "0" + second;
    };

    if ( minutes.length == 1 ) {
        minutes = "0" + minutes;
    };

    if ( hours.length == 1 ) {
        hours = "0" + hours;
    }
    
    clock.innerHTML = `${now.getHours()} : ${minutes} : ${second}`;
    setTimeout(() => {
        clockShow();
    }, 1000)
}

function check () {
    if (!body.classList.contains('fp-viewing-1')) {
        setTimeout(() => {
            check();
        }, 200);
    } else {

        setTimeout(() => {
            heroText[1].classList.add('dom-loaded');
        }, 300)
        setTimeout(() => {
            heroText[2].classList.add('dom-loaded');
        }, 500)
        setTimeout(() => {
            heroText[3].classList.add('dom-loaded');
        }, 800)

        setTimeout(() => {
            heroText[1].classList.add('animate-end');
        }, 2300)
        setTimeout(() => {
            heroText[2].classList.add('animate-end');
        }, 3500)
        setTimeout(() => {
            heroText[3].classList.add('animate-end');
        }, 4800)

    }
}

function checkSectionThree () {
    if (!body.classList.contains('fp-viewing-2')) {
        setTimeout(() => {
            checkSectionThree();
        }, 500);
    } else {
        circle[1].classList.add('animate-statistic-70');
        circlePhoto[1].classList.add('animate-statistic-80');
        uiCount.start();
        photoCount.start();
    }
}

function checkSectionFourth() {
    if (!body.classList.contains('fp-viewing-3')) {
        setTimeout(() => {
            checkSectionFourth();
        }, 200);
    } else {
        clockShow();
        setTimeout(() => {bg.classList.add('animated-bg');}, 1000);
        setTimeout(() => {overlayer.classList.add('op-loaded')}, 4000);
    }
}