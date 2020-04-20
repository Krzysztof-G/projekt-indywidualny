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
        console.log(closeModal() - btn);
        closeModal();
      });
    });

    /* remove class "show" after clicking at overlay  */
    document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        console.log(closeModal() - overlay);
        closeModal();
      }
    });

    /* remove class "show" after clicking at escape  */
    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        console.log(closeModal() - esc);
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
    console.log(openModal());
  },

  createChart: function(){
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
        }]
      },
    });
  },

  init: function () {
    const thisApp = this;

    thisApp.initHamburger();
    thisApp.createChart();
    thisApp.shutDownModal();
    thisApp.openModal('#myModal');
  },
};

app.init();
