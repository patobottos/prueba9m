const date = new Date();

let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth() + 1;

let horaCompleta = day + '-' + month + '-' + year;

console.log(day)
console.log(month)
console.log(year)
console.log(horaCompleta);

let fechaDeHoy = document.getElementById('fecha');

fechaDeHoy.innerHTML = horaCompleta;



