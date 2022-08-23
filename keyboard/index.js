// document.onkeypress = function (event) {
//     console.log(event.key);
//     if (event.shiftKey) {
//         console.log('Shift is pressed');
//     }
// }

document.getElementById('test').onkeypress = function (event) {
    // console.log(event.key);
    if (event.keyCode < 48 || event.keyCode > 57) {
        console.log('not a number');
        return false
    } else {
        console.log(event.key);
    }
}