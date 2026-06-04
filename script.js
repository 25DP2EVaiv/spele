let x = 1;
let nauda = 0;
let clicker_lvl = 1;
let panel_lvl = 1;
let energyWh = 0;
let pendingWh = 0;
let klikskis = 0;
let timeoutID;

// JAUNS: Mainīgie uzdevumu sekošanai
let kopejie_klikski = 0;
let q1_pabeigts = false;

const maksimalais_saulei = 4;
const maksimalais_fonam = 3;

const nauda_teksts = document.getElementById('nauda');
const pardosana = document.getElementById('pardosana');
const sanu_verejs = document.getElementById('sanu_verejs');
const neredzama_dala = document.getElementById('neredzama_dala');
const skaititajs = document.getElementById('skaititajs');
const saule = document.getElementById('saule');
const tekts = document.getElementById('teksts');
const upgrade_poga = document.getElementById('upgrade');
const quest_poga = document.getElementById('quests');
const pirmā_rinda = document.getElementById('pirmā_rinda');
const otrā_rinda = document.getElementById('otrā_rinda');
const trešā_rinda = document.getElementById('trešā_rinda');
const ceturtā_rinda = document.getElementById('ceturtā_rinda');
const buy_clicker = document.getElementById('buy_clicker');
const coin = document.getElementById('coin');
const zem_naudas = document.getElementById('zem_naudas');
const panel_upgrade = document.getElementById('panel_upgrade');
const panel_1rinda = document.getElementById('panel_1rinda');
const panel_2rinda = document.getElementById('panel_2rinda');
const panel_cena = document.getElementById('panel_cena');

// JAUNS: HTML elementi sadaļu pārslēgšanai un uzdevumiem
const upgrade_saturs = document.getElementById('upgrade_saturs');
const quests_saturs = document.getElementById('quests_saturs');
const q1_progress = document.getElementById('q1_progress');
const q1_poga = document.getElementById('q1_poga');

function atjaunotEnerģijasSkaitītāju() {
    if (energyWh < 1000) {
        skaititajs.textContent = 'Energy = ' + energyWh + ' Wh';
    } else if (energyWh < 1000000) {
        skaititajs.textContent = 'Energy = ' + (energyWh / 1000).toFixed(3) + ' kWh';
    } else if (energyWh < 1000000000) {
        skaititajs.textContent = 'Energy = ' + (energyWh / 1000000).toFixed(3) + ' MWh';
    } else if (energyWh < 1000000000000) {
        skaititajs.textContent = 'Energy = ' + (energyWh / 1000000000).toFixed(3) + ' GWh';
    } else {
        skaititajs.textContent = 'Energy = ' + (energyWh / 1000000000000).toFixed(3) + ' TWh';
    }
}

pirmā_rinda.textContent = "Click";
pirmā_rinda.style.fontSize = "1.2vw";
pirmā_rinda.style.borderBottom = "0.2vw solid #000000";
pirmā_rinda.style.width = "14vw";
pirmā_rinda.style.marginLeft = "0.4vw";
pirmā_rinda.style.paddingBottom = "0.4vw";
pirmā_rinda.style.marginTop = "1.5vw";

otrā_rinda.style.position = 'absolute';
otrā_rinda.textContent = "1 wh/per click";
otrā_rinda.style.fontSize = "0.6vw";
otrā_rinda.style.textDecorationLine = 'line-through';
otrā_rinda.style.textDecorationColor = "#000000";
otrā_rinda.style.textDecorationThickness = "0.1vw";
otrā_rinda.style.left = "0.4vw";
otrā_rinda.style.backgroundColor = "#00ff26";
otrā_rinda.style.width = "13.25vw";
otrā_rinda.style.height = "5vw";
otrā_rinda.style.borderRadius = "1vw";
otrā_rinda.style.border = "0.2vw solid #000000";
otrā_rinda.style.paddingLeft = "0.4vw";
otrā_rinda.style.paddingTop = "0.4vw";

trešā_rinda.style.position = 'absolute';
trešā_rinda.textContent = "5 wh/per click";
trešā_rinda.style.fontSize = "0.8vw";
trešā_rinda.style.top = "9vw";
trešā_rinda.style.left = "1vw";

ceturtā_rinda.style.position = 'absolute';
ceturtā_rinda.textContent = "Price:0.01";
ceturtā_rinda.style.fontSize = "0.6vw";
ceturtā_rinda.style.top = "11vw";
ceturtā_rinda.style.left = "6.5vw";

coin.style.position = 'absolute';
coin.style.top = "11vw";
coin.style.left = "11.7vw";
coin.style.width = "3vw";

buy_clicker.textContent = "Buy";
buy_clicker.style.position = 'absolute';
buy_clicker.style.top = "11vw";
buy_clicker.style.left = "1vw";
buy_clicker.style.border = "0.2vw solid #000000";
buy_clicker.style.borderRadius = "1vw";
buy_clicker.style.width = "5vw";
buy_clicker.style.height = "1.5vw";
buy_clicker.style.fontSize = "0.8vw";

setInterval(() => {
    x = (x % maksimalais_saulei) + 1;
    const sauleImg = document.getElementById('saule');
    if (sauleImg) sauleImg.src = x + "_saules_kadrs.png";
}, 100);

setInterval(() => {
    let pasiva_jauda = Math.pow(5, panel_lvl - 1);
    energyWh += pasiva_jauda;
    atjaunotEnerģijasSkaitītāju();
}, 1000);

setInterval(() => {
    let nepieciesama_nauda = 0.01;
    let nepieciesama_nauda_panelim = 0.01;
    if (clicker_lvl === 2) nepieciesama_nauda = 0.1;
    if (panel_lvl === 2) nepieciesama_nauda_panelim = 0.1;
    if (clicker_lvl === 3) nepieciesama_nauda = 1.0; 
    if (panel_lvl === 3) nepieciesama_nauda_panelim = 1.0;

    if (nauda < nepieciesama_nauda) {
        ceturtā_rinda.style.color = 'red';
    } else {
        ceturtā_rinda.style.color = 'black';
    }

    if (nauda < nepieciesama_nauda_panelim) {
        panel_cena.style.color = 'red';
    } else {
        panel_cena.style.color = 'black';
    }
}, 100);

sanu_verejs.addEventListener("click", () => {
    if (neredzama_dala.style.right === '0px') {
        neredzama_dala.style.right = '-300px';
        sanu_verejs.style.right = '0px';
    } else {
        neredzama_dala.style.right = '0px';
        sanu_verejs.style.right = '15.4vw';
    }
});

// JAUNS: Funkcija, kas atjauno uzdevumu progresu vizuāli
function atjaunotUzdevumus() {
    if (!q1_pabeigts) {
        q1_progress.textContent = kopejie_klikski + " / 50";
        if (kopejie_klikski >= 50) {
            q1_poga.disabled = false;
        }
    }
}

saule.addEventListener('click', () => {
    tekts.style.transform = "scale(1.2)";
    setTimeout(() => {
        tekts.style.transform = "scale(1)";
    }, 100);
    
    let klikska_jauda = Math.pow(5, clicker_lvl - 1);

    pendingWh += klikska_jauda;
    klikskis += klikska_jauda;
    tekts.textContent = '+' + klikskis;
    
    // JAUNS: Pieskaitām klikšķi priekš Quest un atjaunojam datus
    kopejie_klikski++;
    atjaunotUzdevumus();

    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        klikskis = 0;
        tekts.textContent = '';
        energyWh += pendingWh;
        atjaunotEnerģijasSkaitītāju();
        pendingWh = 0;
    }, 500);
});

panel_upgrade.addEventListener('click', () => {
    if (panel_lvl === 1 && nauda >= 0.01) {
        nauda -= 0.01;
        zem_naudas.textContent = '-0.01';
        zem_naudas.style.color = 'red';
        zem_naudas.style.opacity = '1';
        setTimeout(() => { zem_naudas.style.opacity = '0'; }, 1000);
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        panel_lvl = 2;
        panel_1rinda.textContent = "5 wh/per second";
        panel_2rinda.textContent = "25 wh/per second";
        panel_cena.textContent = "Price:0.1";
    } else if (panel_lvl === 2 && nauda >= 0.1) {
        nauda -= 0.1;
        zem_naudas.textContent = '-0.1';
        zem_naudas.style.color = 'red';
        zem_naudas.style.opacity = '1';
        setTimeout(() => { zem_naudas.style.opacity = '0'; }, 1000);
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        panel_lvl = 3;
        panel_1rinda.textContent = "25 wh/per second";
        panel_2rinda.textContent = "125 wh/per second";
        panel_cena.textContent = "Price:1";
    } else {
        alert("Not enough money to buy upgrade!");
    }
});
    
buy_clicker.addEventListener('click', () => {
    if (clicker_lvl === 1 && nauda >= 0.01) {
        nauda -= 0.01;
        zem_naudas.textContent = '-0.01';
        zem_naudas.style.color = 'red';
        zem_naudas.style.opacity = '1';
        setTimeout(() => { zem_naudas.style.opacity = '0'; }, 1000);
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        clicker_lvl = 2;
        otrā_rinda.textContent = "5 wh/per click";
        trešā_rinda.textContent = "25 wh/per click";
        ceturtā_rinda.textContent = "Price:0.1";
    } else if (clicker_lvl === 2 && nauda >= 0.1) {
        nauda -= 0.1;
        zem_naudas.textContent = '-0.1';
        zem_naudas.style.color = 'red';
        zem_naudas.style.opacity = '1';
        setTimeout(() => { zem_naudas.style.opacity = '0'; }, 1000);
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        clicker_lvl = 3;
        otrā_rinda.textContent = "25 wh/per click";
        trešā_rinda.textContent = "125 wh/per click";
        ceturtā_rinda.textContent = "Price:1";
    } else {
        alert("Not enough money to buy upgrade!");
    }
});

pardosana.addEventListener('click', () => {
    if (energyWh < 100) {
        alert("Not enough energy to sell! You need at least 100 Wh.");
    } else {        
        let nopelnita_nauda = energyWh * 0.0001;
        nauda += nopelnita_nauda;
        
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        zem_naudas.textContent = '+' + nopelnita_nauda.toFixed(2);
        zem_naudas.style.color = 'green';
        zem_naudas.style.opacity = '1';
        setTimeout(() => {
            zem_naudas.style.opacity = '0';
        }, 1000);
        
        energyWh = 0; 
        atjaunotEnerģijasSkaitītāju();
    }
});

// JAUNS: Aktīvā pārslēgšanās uz UPGRADE sadaļu
upgrade_poga.addEventListener('click', () => {
    upgrade_poga.style.borderColor = "#bba0b2"; 
    upgrade_poga.style.backgroundColor = "#222e50";
    upgrade_poga.style.color = "#bba0b2";
    
    quest_poga.style.borderColor = "#222e50";
    quest_poga.style.backgroundColor = "#bba0b2";
    quest_poga.style.color = "#222e50";

    // Parāda upgrade, paslēpj quest
    upgrade_saturs.style.display = "block";
    quests_saturs.style.display = "none";
});

// JAUNS: Aktīvā pārslēgšanās uz QUESTS sadaļu
quest_poga.addEventListener('click', () => {
    quest_poga.style.borderColor = "#bba0b2"; 
    quest_poga.style.backgroundColor = "#222e50";
    quest_poga.style.color = "#bba0b2";
    
    upgrade_poga.style.borderColor = "#222e50";
    upgrade_poga.style.backgroundColor = "#bba0b2";
    upgrade_poga.style.color = "#222e50";

    // Paslēpj upgrade, parāda quest
    upgrade_saturs.style.display = "none";
    quests_saturs.style.display = "block";
});

// JAUNS: Loģika uzdevuma balvas saņemšanai
q1_poga.addEventListener('click', () => {
    if (kopejie_klikski >= 50 && !q1_pabeigts) {
        nauda += 0.05;
        nauda_teksts.textContent = 'Money: ' + nauda.toFixed(2);
        
        zem_naudas.textContent = '+0.05';
        zem_naudas.style.color = 'green';
        zem_naudas.style.opacity = '1';
        setTimeout(() => { zem_naudas.style.opacity = '0'; }, 1000);

        q1_pabeigts = true;
        q1_progress.textContent = "Completed!";
        q1_progress.style.color = "#00ff26";
        q1_poga.textContent = "Done";
        q1_poga.disabled = true;
    }
});