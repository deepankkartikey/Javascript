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
