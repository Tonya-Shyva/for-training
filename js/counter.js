// var start = 0;
// function add_counter() {
//   var invervat = 2;
//   var end = 10;

//   if (start < end) {
//     start += invervat;
//     $('#counter_1').html(start);
//   } else {
//     start += 1;
//     $('#counter_1').html(start);
//   }
// }

// var timerId = setInterval(add_counter, 1);

const time = 1000;
const step = 1;

function outNum(num, elem) {
  let l = document.querySelector('#' + elem);
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n += step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  }, t);
}
outNum(721, 'counter-1');
