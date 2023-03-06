const pageTitle = document.querySelector('.aboutus__subtitle');
const colors = ['yellow', 'blue'];

let colorIndex = 0;

function changeColor() {
  
  pageTitle.style.color = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(changeColor, 3000);