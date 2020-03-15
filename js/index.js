// Your code goes here





//* THIS IS THE EVENT LISTENER *//

window.addEventListener('load', (event) => {
    alert('Welcome to my DOMII project, I will have 10 event listeners to make the page interactive!');
});

//* EVENT LISTENER 2 *//

const busImage = document.querySelector(('.intro img'));
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = " all 0.3s";
});

//* EVENT LISTENER 3 *//

busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)"
});

//*  EVENT LISTENER 4 *//

const changeImage = document.querySelector('.intro img');
changeImage.addEventListener('dblclick', () => {
    changeImage.src = "./img/bus-fun.jpg";
});

//* EVENT LISTENER 5 *//

window.addEventListener('load', (event) => {
    console.log('this page is fully loaded')
});

//* EVENT LISTENER 6 *//

const hide = document.querySelector('body');
hide.addEventListener('wheel', () => {
    hide.style.opacity = '0';
    hide.style.transition = 'all 0.5s';
});