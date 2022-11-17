const menuOpen = (nav, active) => {
  nav.classList.add(active);
}


const menuClose = (nav, active) => {
  nav.classList.remove(active);
}

const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);

  burgerBtn.addEventListener('click', () => {
    menuOpen(navigation, classActiveMenu);
  })

  navigationClose.forEach(item => {
    item.addEventListener('click', () => {
      menuClose(navigation, classActiveMenu);
    })
  })


  // menuOpen(burgerBtn, closeTrigger);
};

export default slideMenu;