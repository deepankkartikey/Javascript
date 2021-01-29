console.log('3-D');

//Movement Animation to be done
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const product = document.querySelector('.product img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation effect
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/15; 
    let yAxis = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});


// Animate In
container.addEventListener('mouseenter', (e)=> {
    card.style.transition = 'none';
    //PopOut
    title.style.transform = "translateZ(150px)";
    product.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
})

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    product.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

