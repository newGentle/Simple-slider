const details = {
    'item1':{
        'image':'assets/img/image1.png',
        'city': 'Rostov-on-Don LCD admiral',
        'apartment': '81 m2',
        'time': '3.5 months',
        'cost': 'Upon request'
    },
    'item2':{
        'image':'assets/img/image2.png',
        'city': 'Sochi <br> Thieves',
        'apartment': '105 m2',
        'time': '4 months',
        'cost': 'Upon request'
    },
    'item3':{
        'image':'assets/img/image3.png',
        'city': 'Rostov-on-Don <br>Patriotic',
        'apartment': '93 m2',
        'time': '3 months',
        'cost': 'Upon request'
    }
};

function setNextElement(item) {
    const mainImage = document.querySelector('.img>img');
    const cityText = document.querySelector('.city>span');
    const apartmentText = document.querySelector('.apartment>span');
    const timeText = document.querySelector('.time>span');
    const costText = document.querySelector('.cost>span');

    mainImage.src=details[item].image;
    cityText.innerHTML = details[item].city;
    apartmentText.innerHTML = details[item].apartment;
    timeText.innerHTML = details[item].time;
    costText.innerHTML = details[item].cost;
}

// console.log(Object.keys(details).length)
// document.querySelectorAll('.dots').forEach(elem => console.log(elem.getAttribute('class')))

const links = document.querySelectorAll('.link');
const dots = document.querySelectorAll('.dots');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

links.forEach(item => {
    item.addEventListener('click', () => {
        links.forEach(i => i.setAttribute('data-state', ''));
        item.setAttribute('data-state', 'active-link');
        setNextElement(item.classList.item(1));

        dots.forEach(dot => {
            dot.setAttribute('data-state', '')
            dot.querySelector('rect').setAttribute('fill-opacity', '0.3')
            if (dot.classList.item(1) == item.classList.item(1)) {
                dot.setAttribute('data-state', 'active-dot');
            };
        });
        
    });
});



leftArrow.addEventListener('click', () => {
    dots.forEach(dot => {
        if (dot.getAttribute('data-state') == 'active-dot') {
         
            for (let item = 0; item < Object.keys(details).length; item++) {
                if (dot.classList.item(1) == Object.keys(details)[item]) {
                    console.log(dot.classList.item(1));
                    console.log(Object.keys(details)[item]);
                    if (dot.previousElementSibling) {
                        console.log('ok');
                        setNextElement(dot.previousElementSibling.classList.item(1));
                        dot.setAttribute('data-state', '');
                        dot.querySelector('rect').setAttribute('fill-opacity', '0.3');
                        dot.previousElementSibling.setAttribute('data-state', 'active-dot');

                    }
                    else {
                        console.log(Object.keys(details).length - 1);
                        // setNextElement(Object.keys(details)[Object.keys(details).length - 1])
                        dot.setAttribute('data-state', '');
                        dot.querySelector('rect').setAttribute('fill-opacity', '0.3')
                        document.querySelectorAll('.dots.' + Object.keys(details)[Object.keys(details).length - 1]
                        ).forEach(_dot => {
                        
                            _dot.setAttribute('data-state', 'active-dot');
                        });
                    };
                }
            }


            
            // const loop = dot.classList.item(1).match(/(\d+)/)[0] - 1
            // console.log(loop);
            // if (dot.classList.item(1) == Object.keys(details)[0]) {
            //     setNextElement(Object.keys(details)[2])
            //     document.querySelector('.' + Object.keys(details)[2]).setAttribute('data-state', 'active-dot');

            // }
            // else {
            //     setNextElement(Object.keys(details)[loop - 1])
            //     document.querySelector('.' + Object.keys(details)[loop - 1]).setAttribute('data-state', 'active-dot');
                
            // };
        };
    });
});