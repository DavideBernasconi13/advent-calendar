// prendi il table calendar
const calendarTable = document.getElementById('calendar');
console.log(calendarTable);
// genera l'element cell-day, add class e appendi alla table
for (i = 0; i <= 24; i++) {
    let el = document.createElement('div');
    el.classList.add('cell-day');
    el.innerHTML = i + 1;
    calendarTable.appendChild(el);
    console.log(el.outerHTML);
}

