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
mainImage.src=details[item + i].image;

