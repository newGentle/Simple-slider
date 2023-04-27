/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import '../src/css/style.scss';

import "../src/img/image1.png";
import "../src/img/image2.png";
import "../src/img/image3.png";


const details: object | any = { 
    item1: await fetch('http://localhost:3000/item1/')
    .then(response => response.json())
    .then(async (data) => (data[0])),

    item2: await fetch('http://localhost:3000/item2/')
    .then(response => response.json())
    .then(async (data) => (data[0])),
    
    item3: await fetch('http://localhost:3000/item3/')
    .then(response => response.json())
    .then(async (data) => (data[0]))
};


function setNextElement(item: string | any) {

    const mainImage: HTMLImageElement | any = document.querySelector('.img>img');
    const cityText: Element | any = document.querySelector('.city>span');
    const apartmentText: Element | any = document.querySelector('.apartment>span');
    const timeText: Element | any = document.querySelector('.time>span');
    const costText: Element | any = document.querySelector('.cost>span');

    mainImage?.setAttribute('class', 'fading');
    
    mainImage.src = details[item].image;
    
    cityText.innerHTML = details[item].city;
    apartmentText.innerHTML = details[item].apartment;
    timeText.innerHTML = details[item].time;
    costText.innerHTML = details[item].cost;
    sto();

    function sto() {
        const timeOut = setTimeout(deleteFading, 500);
    }
    function deleteFading() {
        mainImage.removeAttribute('class', 'fading');
    }
}

const links = document.querySelectorAll('.link');
const dots = document.querySelectorAll('.dots');
const leftArrow: Element | any = document.querySelector('.left-arrow');
const rightArrow: Element | any = document.querySelector('.right-arrow');
let nextElement = '';

links.forEach((item: string | any) => {
    item.addEventListener('click', () => {
        links.forEach(i => i.setAttribute('data-state', ''));
        item.setAttribute('data-state', 'active-link');
        setNextElement(item.classList.item(1));
        
        changeDot(item.classList.item(1));        
    });
});

dots.forEach((dot: string | any) => {
    dot.addEventListener('click', () => {
        dots.forEach((i: Element | any) => {
            i.setAttribute('data-state', '');
            i.querySelector('rect').setAttribute('fill-opacity', '0.3');
        });
        dot.setAttribute('data-state', 'active-dot');
        setNextElement(dot.classList.item(1));
        changeLink(dot.classList.item(1));        
    });
});

leftArrow.addEventListener('click', () => {
    const slider: any =[];
    for (const item of Object.keys(details)) {
        slider.push(item);
    }
    dots.forEach(dot => {
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[0]) {
                nextElement = slider[slider.length - 1];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) - 1 ];
            }
        }
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});

rightArrow.addEventListener('click', () => {
    
    const slider: any =[];
    for (const item of Object.keys(details)) {
        slider.push(item);
    }
    dots.forEach(dot => {
        if (dot.hasAttribute('data-state') && dot.getAttribute('data-state') == 'active-dot') { 
            if (dot.classList.item(1) == slider[slider.length - 1]) {
                nextElement = slider[0];
            }
            else {
                nextElement = slider[slider.indexOf(dot.classList.item(1)) + 1 ];
            }
            
        }
    });
    changeDot(nextElement);
    changeLink(nextElement);
    setNextElement(nextElement);

});


function changeDot(dotClassName: string) {
    dots.forEach((dot: string | any) => {
        dot.setAttribute('data-state', '');
        dot.querySelector('rect').setAttribute('fill-opacity', '0.3');
        if (dot.classList.item(1) == dotClassName) {
            dot.setAttribute('data-state', 'active-dot');
        }
    });
}

function changeLink(linkClassName: string) {
    links.forEach(link => {
        link.setAttribute('data-state', '');
        if (link.classList.item(1) == linkClassName) {
            link.setAttribute('data-state', 'active-link');
        }
    });
}

