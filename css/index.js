document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
    let div = document.getElementById('test');
    let out = document.getElementById('out');
    console.log(this.value);
    div.style.borderRadius = this.value + 'px';
    out.innerHTML = 'border-radius' + this.value + 'px; \n';
    out.innerHTML += '-webkit-border-radius' + this.value + 'px; \n';
}