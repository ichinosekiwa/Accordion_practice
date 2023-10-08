'use strict';

//dt取得してaccordionHeaderとする
const accordionHeader = document.querySelectorAll('dt');

//accordion全てで実行する
accordionHeader.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    //クリックされた親要素にopenをつける
    const parentItem = accordion.parentNode;
    parentItem.classList.toggle('open');

    //クリックされた親要素以外を閉じる
    accordionHeader.forEach((otherAccordion) => {
      if (otherAccordion !== accordion) {
        const otherParentItem = otherAccordion.parentNode;
        otherParentItem.classList.remove('open');
      }
    });
  });
});
