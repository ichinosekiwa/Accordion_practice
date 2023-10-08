'use strict';

//dt取得してaccordionHeaderとする
const accordionHeader = document.querySelectorAll('dt');

//accordionごとに繰り返す
accordionHeader.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordionHeader.parentNode.classList.toggle('open');
  });
});
