import hamburgerMenu from './menu_hamburguesa.js';

const d = document;

// evento  que ejecuta la carga de documento
d.addEventListener('DOMContentLoaded', (e) => {
  // invocamos a la función y pasamos las clases de selectores
  hamburgerMenu('.main-btn', '.main-menu', '.main-nav a');
});
