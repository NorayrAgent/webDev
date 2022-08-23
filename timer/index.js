// let margin = 0;
// var timer;

// let div = document.getElementById('test');
// // move()
// function move() {
//     div.style.marginLeft = margin + 'px';
//     margin += 3;
//     timer = setInterval(move, 50);
// }

var a = 0;
var timer;
obr();
function obr() {
  document.getElementById("out").innerHTML = a;
  a++;
  if (a > 55) {
    clearTimeout(timer);
    alert("End");
  } else {
    timer = setTimeout(obr, 100);
  }
}
