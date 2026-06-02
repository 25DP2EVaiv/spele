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
        sanu_verejs.style.right = '15.4vw';
    }
});

const skaititajs = document.getElementById('skaititajs')
let Wh = 0
let kWh = 0

setInterval(() => {
    kWh += 0.001;
    Wh += 1;
    if (kWh < 1) {
    skaititajs.textContent = 'Energy = ' + Wh + ' Wh';
} else if (kWh < 1000) {
    skaititajs.textContent = 'Energy = ' + kWh.toFixed(3) + ' kWh';
} else if (kWh < 1000000) {
    skaititajs.textContent = 'Energy = ' + (kWh / 1000).toFixed(3) + ' MWh';
} else if (kWh < 1000000000) {
    skaititajs.textContent = 'Energy = ' + (kWh / 1000000).toFixed(3) + ' GWh';
} else {
    skaititajs.textContent = 'Energy = ' + (kWh / 1000000000).toFixed(3) + ' TWh';
}
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
    elektriba_plusos += 1000;
    klikskis += 1000;
    teksts.textContent = '+' + klikskis;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        klikskis = 0
        tekts.textContent = ''
        Wh += elektriba_plusos;
        kWh += elektriba_plusos / 1000;
        elektriba_plusos = 0
    }, 500);
})



const upgrade_poga = document.getElementById('upgrade')
const quest_poga = document.getElementById('quests')
const sasniegumu_poga = document.getElementById('sasniegumi')

upgrade_poga.addEventListener('click', () => {
    upgrade_poga.style.borderColor = "#bba0b2"; 
    upgrade_poga.style.backgroundColor = "#222e50";
    upgrade_poga.style.color = "#bba0b2";
    upgrade_poga.style.hover = "#a37e96";
    quest_poga.style.borderColor = "#222e50";
    quest_poga.style.backgroundColor = "#bba0b2";
    quest_poga.style.color = "#222e50";
    sasniegumu_poga.style.borderColor = "#222e50";
    sasniegumu_poga.style.backgroundColor = "#bba0b2";
    sasniegumu_poga.style.color = "#222e50";
});

quest_poga.addEventListener('click', () => {
    quest_poga.style.borderColor = "#bba0b2"; 
    quest_poga.style.backgroundColor = "#222e50";
    quest_poga.style.color = "#bba0b2";
    upgrade_poga.style.borderColor = "#222e50";
    upgrade_poga.style.backgroundColor = "#bba0b2";
    upgrade_poga.style.color = "#222e50";
    sasniegumu_poga.style.borderColor = "#222e50";
    sasniegumu_poga.style.backgroundColor = "#bba0b2";
    sasniegumu_poga.style.color = "#222e50";
});

sasniegumu_poga.addEventListener('click', () => {
    sasniegumu_poga.style.borderColor = "#bba0b2"; 
    sasniegumu_poga.style.backgroundColor = "#222e50";
    sasniegumu_poga.style.color = "#bba0b2";
    upgrade_poga.style.borderColor = "#222e50";
    upgrade_poga.style.backgroundColor = "#bba0b2";
    upgrade_poga.style.color = "#222e50";
    quest_poga.style.borderColor = "#222e50";
    quest_poga.style.backgroundColor = "#bba0b2";
    quest_poga.style.color = "#222e50";
});