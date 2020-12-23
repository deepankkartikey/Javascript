console.log("EVENTS IN JS");

document.getElementById("heading").addEventListener("mouseover", 
function(e) {
  console.log("This is a heading");
  let c;
  c = e.target;
  c = e.target.className;
  c = Array.from(e.target.classList);
  c = e.offsetX;
  c = e.offsetY;
  c = e.clientX;
  c = e.clientY;
  console.log(c);
});

// More Events
let btn = document.querySelector('#btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);

function func1(e) {
    console.log("Single-Click" ,e);
    e.preventDefault();
}

function func2(e) {
    console.log("Double-Click" ,e);
    e.preventDefault();
}


document.querySelector('.container').addEventListener('mousemove', 
function (e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
})
