document.getElementById('myslide').onmousemove = function (event) {
    let x = event.offsetX;
    console.log(x);

    document.getElementById('two').style.width = x + 'px'
}

document.getElementById('myslide').onmouseleave = function (event) {
    document.getElementById('two').style.width = '375px'
}