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
let i = 2;
const mainImage = document.querySelector('.img>img');
const cityText = document.querySelector('.city>span');
const apartmentText = document.querySelector('.apartment>span');
const timeText = document.querySelector('.time>span');
const costText = document.querySelector('.cost>span');
mainImage.src=details['item' + i].image;
cityText.innerHTML = details['item' + i].city;
apartmentText.innerHTML = details['item' + i].apartment;
timeText.innerHTML = details['item' + i].time;
costText.innerHTML = details['item' + i].cost;

console.log(Object.keys(details).length)
document.querySelectorAll('.dots').forEach(elem => console.log(elem.getAttribute('class')))