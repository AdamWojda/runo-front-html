class Accordion {
  constructor() {
    this.titles = document.querySelectorAll('.accordion__header');
    this.init();
  }

  init() {
    this.titles.forEach(title => {
      title.addEventListener('click', () =>{
        title.parentElement.classList.toggle('accordion__item--active');
      })
    })
  }
}

new Accordion();
