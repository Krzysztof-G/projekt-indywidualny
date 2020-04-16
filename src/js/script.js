/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* create function for humburger button */

const app = {
  /* HAMBURGER */
  initHamburger: function () {
    function toggleMenu(visible) {
      document
        .querySelector('.side-nav')
        .classList.toggle('show', visible);
    }

    document.querySelector('.menu').addEventListener('click', function(e) {
      e.preventDefault();
      console.log('toggleMenu()');
      toggleMenu();
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initHamburger();
  },
};

app.init();
