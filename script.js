let x = 1;
const maksimālais = 3;

setInterval(() => {
    x = (x % maksimālais) + 1;
    document.getElementById('saule').src = x + "_saules_kadrs.png";
}, 100);