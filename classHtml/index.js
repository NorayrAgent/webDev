let p = document.getElementsByTagName('p');

for (var i = 0; i < p.length; i++) {
    if (i % 2 === 0) {
        p[i].onclick = f1;
    } else {
        p[i].onclick = f2;
    }
}

function f1() {
    // console.log(this);
    this.style.background = 'pink';
}

function f2() {
    // console.log(this);
    this.style.background = 'red';
}