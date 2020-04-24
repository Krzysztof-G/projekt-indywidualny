/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* create function for hamburger button */

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
      toggleMenu();
    });
  },

  shutDownModal: function(){
    function closeModal() {
      document.getElementById('overlay').classList.remove('show');
    }

    /* remove class "show" after clicking at button  */
    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    });

    /* remove class "show" after clicking at escape  */
    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        closeModal();
      }
    });
  },

  /* close all modals, than open our modal and overlay  */
  openModal: function(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
  },
  

  init: function () {
    const thisApp = this;
 
    thisApp.initHamburger();
    
    thisApp.shutDownModal();
    thisApp.openModal('#myModal');
 
    const user = document.getElementById('user');
 
    user.addEventListener('click', function () {
      thisApp.openModal('#userModal');
    });

    const logOut = document.getElementById('logout');
 
    logOut.addEventListener('click', function () {
      thisApp.openModal('#logModal');
    });
  }
};

app.init();
