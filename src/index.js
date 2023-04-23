'use strict';

import '../src/css/style.css';
import image1 from '../src/img/image1.png';
import image2 from '../src/img/image2.png';
import image3 from '../src/img/image3.png';




const details = {
item1: fetch('http://localhost:3000/item1/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),

item2: fetch('http://localhost:3000/item2/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),

item3: fetch('http://localhost:3000/item3/')
.then((response) => response.json())
.then((data) => JSON.parse(data)),
};

console.log(details['item1']);
function setNextElement(item) {
    const mainImage = document.querySelector('.img>img');
    const cityText = document.querySelector('.city>span');
    const apartmentText = document.querySelector('.apartment>span');
    const timeText = document.querySelector('.time>span');
    const costText = document.querySelector('.cost>span');
    
    mainImage.setAttribute('class', 'fading');
    
    mainImage.src = details[item].image;
    
    cityText.innerHTML = details[item].city;
    apartmentText.innerHTML = details[item].apartment;
    timeText.innerHTML = details[item].time;
    costText.innerHTML = details[item].cost;
    sto();

    function sto() {
        let timeOut = setTimeout(deleteFading, 500);
    };
    function deleteFading() {
        mainImage.removeAttribute('class', 'fading');
    }

};

const links = document.querySelectorAll('.link');
const dots = document.querySelectorAll('.dots');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const nextElement = '';

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(i => i.setAttribute('data-state', ''));
        item.setAttribute('data-state', 'active-link');
        setNextElement(item.classList.item(1));
        
        changeDot(item.classList.item(1));        
    });
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        dots.forEach(i => {
            i.setAttribute('data-state', '');
            i.querySelector('rect').setAttribute('fill-opacity', '0.3');
        });
        dot.setAttribute('data-state', 'active-dot');
        setNextElement(dot.classList.item(1));
        
        changeLink(dot.classList.item(1));        
    });
});





leftArrow.addEventListener('click', () => {
    let slider=[];
    for (let item of Object.keys(details)) {
        slider.push(item);
    }
    dots.forEach(dot => {
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[0]) {
                nextElement = slider[slider.length - 1];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) - 1 ];
            };
            
        }
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});

rightArrow.addEventListener('click', () => {
    
    let slider=[];
    for (let item of Object.keys(details)) {
        slider.push(item);
    };
    dots.forEach(dot => {
        console.log(dots.length);
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[slider.length - 1]) {
                nextElement = slider[0];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) + 1 ];
            };
            
        };
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});


function changeDot(dotClassName) {
    dots.forEach(dot => {
        dot.setAttribute('data-state', '');
        dot.querySelector('rect').setAttribute('fill-opacity', '0.3');
        if (dot.classList.item(1) == dotClassName) {
            dot.setAttribute('data-state', 'active-dot');
        };
    });
};

function changeLink(linkClassName) {
    links.forEach(link => {
        link.setAttribute('data-state', '');
        if (link.classList.item(1) == linkClassName) {
            link.setAttribute('data-state', 'active-link');
        };
    });
};

