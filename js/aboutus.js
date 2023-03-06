function changeColor() {
    const pageTitle = document.querySelector('.aboutus__subtitle');
    const colors = ['pink', 'blue'];
    let colorIndex = 0;
  
    setInterval(function() {
      pageTitle.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);
  }
  
  changeColor();