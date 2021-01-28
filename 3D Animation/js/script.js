console.log('3-D');

//Movement Animation to be done
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Moving animation effect
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/15; 
    let yAxis = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});


// Animate In
container.addEventListener('mouseenter', (e)=> {
    card.style.transition = 'none';
})

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

