const anchors = document.querySelector('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListenerAll('click', function () {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
