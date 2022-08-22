import { Splide } from "@splidejs/splide";
import { Intersection } from "@splidejs/splide-extension-intersection";

class Carousel {
  constructor() {
    this.carousels = document.querySelectorAll( '.splide' );
    this.init();
  }

  init() {
    console.log(this.carousels);
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
        type         : 'loop',
        arrows       : false,
        autoplay     : 'pause',
        intersection : this.intersectionSettings(),
      },
      'carousel': {
        type         : 'loop',
        arrows       : true,
        autoplay     : 'pause',
        intersection : this.intersectionSettings(),
      }
    };
    return configurations[type];
  }
}

new Carousel();
