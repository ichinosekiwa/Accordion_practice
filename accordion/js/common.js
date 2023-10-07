'use strict';

//dt取得してaccordionとする
const accordion = document.querySelector('dt');

accordion.addEventListener('click', () => {
  accordion.parentNode.classList.toggle('open');
});
