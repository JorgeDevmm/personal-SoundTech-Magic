export default function hamburgerMenu(mainBtn, mainMenu, menuLink) {
  const d = document;

  d.addEventListener('click', (e) => {
    // el objeto origina el evento es igual al objeto que paso por parametro que es matinbtn
    if (e.target.matches(mainBtn) || e.target.matches(`${mainBtn} *`)) {
      // busca calse y lista sus clases y no esta is-active lo agrega al mainMenu
      d.querySelector(mainMenu).classList.toggle('is-active');
      d.querySelector(mainBtn).classList.toggle('is-active');
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(mainMenu).classList.remove('is-active');
      d.querySelector(mainBtn).classList.remove('is-active');
    }
  });
}
