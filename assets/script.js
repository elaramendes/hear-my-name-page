function showItems() {
    let nav_items = document.querySelector('.nav-links');
    let icon = document.querySelector('#showItems');
    

    nav_items.classList.toggle('show');

   // console.log(icon.src)

    if (icon.src.includes('menu_open.png')) {
        icon.src = './assets/images/menu_close.png';
      } else {
        icon.src = './assets/images/menu_open.png';
      }
      
};
