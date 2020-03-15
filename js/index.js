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
})