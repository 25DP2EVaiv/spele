let x = 1;
const maksimalais = 4;

setInterval(() => {
    x = (x % maksimalais) + 1;
    document.getElementById('saule').src = x + "_saules_kadrs.png";
}, 100);