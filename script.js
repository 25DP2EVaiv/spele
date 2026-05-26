let x = 1;
const maksimalais_saulei = 4;
const maksimalais_fonam = 3;

setInterval(() => {
    x = (x % maksimalais_saulei) + 1;
    document.getElementById('saule').src = x + "_saules_kadrs.png";
}, 100);

const sanu_verejs = document.getElementById('sanu_verejs')
const neredzama_dala = document.getElementById('neredzama_dala')

sanu_verejs.addEventListener("click", () => {
    if (neredzama_dala.style.right === '0px') {
        neredzama_dala.style.right = '-300px';
        sanu_verejs.style.right = '0px';
    } 
    else {
        neredzama_dala.style.right = '0px';
        sanu_verejs.style.right = '300px'
    }
});

const skaititajs = document.getElementById('skaititajs')
let elektriba = 0

setInterval(() => {
    elektriba += 1;
    skaititajs.textContent = 'Elektrība = ' + elektriba;
}, 1000);

const saule = document.getElementById('saule')
const tekts = document.getElementById('teksts')
let klikskis = 0;
let elektriba_plusos = 0;
let timeoutID;

saule.addEventListener('click',() => {
    tekts.style.transform = "scale(1.2)";
    setTimeout(() => {
        teksts.style.transform = "scale(1)";
    }, 100);
    elektriba_plusos += 1;
    klikskis += 1;
    teksts.textContent = '+' + klikskis;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        klikskis = 0
        tekts.textContent = ''
        elektriba += elektriba_plusos;
        elektriba_plusos = 0
    }, 500);
})

setInterval(() => {
    skaititajs.textContent = 'Elektrība = ' + elektriba;
}, 1);



