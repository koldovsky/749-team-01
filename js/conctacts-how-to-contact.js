(function() {
    const headerContactsItems = document.querySelectorAll('.header__contacts-items');
  
    headerContactsItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        // code to add a hover effect, for example:
        item.style.backgroundColor = '#f2f2f2';
      });
  
      item.addEventListener('mouseout', () => {
        // code to remove the hover effect, for example:
        item.style.backgroundColor = '';
      });
    });
  })();