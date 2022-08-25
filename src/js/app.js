/* Scss Files */
import (
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  '../scss/app.scss'
);
/* Main Files */
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
    this.after_loaded();
    this.lazy_load_images();
    this.lazy_load_bgs();
  }

  mobile_menu() {
    if( !this.mobile_trigger ) return;
    this.mobile_trigger.addEventListener('click', (e) =>{
      this.navigation.classList.toggle('header__nav--active');
      this.mobile_trigger.classList.toggle('header__mobile__link--active');
    })
  }

  after_loaded() {
  }

  lazy_load_images() {
    document.addEventListener("DOMContentLoaded", function() {
      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

      if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
      }
    });
  }

  lazy_load_bgs() {
    document.addEventListener("DOMContentLoaded", function() {
      var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

      if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              lazyBackgroundObserver.unobserve(entry.target);
            }
          });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
          lazyBackgroundObserver.observe(lazyBackground);
        });
      }
    });
  }
}

new App();

