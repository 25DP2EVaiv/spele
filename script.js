let x = 1;
const maksimalais_saulei = 4;
const maksimalais_fonam = 3;

setInterval(() => {
    x = (x % maksimalais_saulei) + 1;
    document.getElementById('saule').src = x + "_saules_kadrs.png";
}, 100);

