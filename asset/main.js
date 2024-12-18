// mappatura delle icone 
const path = 'asset/images/icons/';
const icons = {
    0: {
        url: "ico-neve.png",
        alt: "ico-neve"
    }
}



// prendi il table calendar
const calendarTable = document.getElementById('calendar');
console.log(calendarTable);
// genera l'element cell-day, add class e appendi alla table
for (i = 0; i <= 24; i++) {
    let el = document.createElement('div');
    el.classList.add('cell-day');
    el.innerHTML = i + 1;

    //controlla se esiste icona associata 
    if (icons[i]) {
        const img = document.createElement("img");
        img.src = path + icons[url];
        img.alt = `Icona per la casella ${i}`;
        el.appendChild(img);
    }
    calendarTable.appendChild(el);
}


