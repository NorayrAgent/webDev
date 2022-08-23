// let arr = [];

// let fullArr = [99, 33, 'Hello', 444, true, [1, 45]]
// console.log(fullArr);

// console.log(fullArr[3]);

// for (var i = 0; i < fullArr.length; i++) {
//     document.getElementById('out').innerHTML += fullArr[i] + '<br>'
// }


var arr = [45, 5, 'hey', true, [45, 25]];


function massOut() {
    let p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += i + ' --- ' + arr[i] + '<br>'
    }
    p.innerHTML = str
}

massOut()


function push() {
    let input = document.getElementById('i1').value;
    arr.push(input);
    massOut();
    input.value = ' ';
}

function pop() {
    arr.pop();
    massOut();
}