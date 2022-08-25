import '../scss/app.scss';
/* Main Files */
import './demo.js';
import './carousel.js';
import './accordion.js';


class App {
  constructor() {
    this.mobile_trigger = document.querySelector('.header__mobile__link');
    this.navigation = document.querySelector('.header__nav');
    this.init();
  }

  init() {
    this.mobile_menu();
  }

  mobile_menu() {
    this.mobile_trigger.addEventListener('click', (e) =>{
      this.navigation.classList.toggle('header__nav--active');
      this.mobile_trigger.classList.toggle('header__mobile__link--active');
    })
  }
}

new App();

