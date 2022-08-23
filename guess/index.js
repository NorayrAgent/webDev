var prNum, tempOut;

prNum = Math.floor((Math.random() * 100) + 1);
tempOut = document.getElementById('temp-out');
console.log(prNum);

function gues() {
    var num, out;


    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = '<br> You Win <br>'
    } else if (num > prNum) {
        out.innerHTML = '<br> Your number is bigger <br>'
    } else {
        out.innerHTML = '<br> Your number is smaller <br>'
    }
}