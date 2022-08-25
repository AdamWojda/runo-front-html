import { Splide } from "@splidejs/splide";
import { Intersection } from "@splidejs/splide-extension-intersection";

class Carousel {
  constructor() {
    this.carousels = document.querySelectorAll( '.splide' );
    this.init();
  }

  init() {
    this.carousels.forEach((carousel) => {
      new Splide( carousel, this.getConfig(carousel.dataset.type) ).mount(
          { Intersection }
      );
    });
  }

  intersectionSettings() {
    return {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    }
  }

  getConfig(type = 'hero') {
    const configurations = {
      'hero': {
        arrows       : false,
        autoplay     : 'pause',
        intersection : this.intersectionSettings(),
        perPage      : 1,
      },
      'carousel': {
        arrows       : true,
        autoplay     : 'pause',
        perPage      : 3,
        intersection : this.intersectionSettings(),
        breakpoints: {
          1200: { arrows: false },
          800 : { perPage: 1 },
          640 : {},
        },
      }
    };
    return configurations[type];
  }
}

new Carousel();
