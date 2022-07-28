// var btn = document.querySelector('.products__btn1');
// var blockHidden = document.querySelector('.products__article1');

// function showBlock() {
//   blockHidden.classList.add('b-show');
// }
// btn.addEventListener('click', showBlock);
// --------------------------------------------------
(() => {
  const menuBtnRef = document.querySelector('.products__btn1');
  const mobileMenuRef = document.querySelector('.products__article1');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('.products__btn2');
  const mobileMenuRef = document.querySelector('.products__article2');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('.products__btn3');
  const mobileMenuRef = document.querySelector('.products__article3');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

$(document).ready(function () {
  $('.products__btn1').click(function () {
    $('.products__article1').fadeToggle(500);
  });

  $('.products__btn2').click(function () {
    $('.products__article2').fadeToggle(500);
  });

  $('.products__btn3').click(function () {
    $('.products__article3').fadeToggle(500);
  });
});

// $('.products__btn1').click(function () {
//   $('.products__article1').fadeToggle(500, 'linear');
// });

// $('.products__btn2').click(function () {
//   $('.products__article2').fadeToggle(500);
// });

// $('.products__btn3').click(function () {
//   $('.products__article3').fadeToggle(500);
// });
// --------------------------------------------------------------

// ---------------------------------------------------------

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('.icon-arrow-open'),
//     closeModalBtn: document.querySelector('.icon-arrow-close'),
//     modal: document.querySelector('.products__article1'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
