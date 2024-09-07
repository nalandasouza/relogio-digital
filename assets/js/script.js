const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hrs = dateToday.getHours().toString();
    let min = dateToday.getMinutes().toString();
    let seg = dateToday.getSeconds().toString();

    horas.textContent = hrs.padStart(2, '0');
    minutos.textContent = min.padStart(2, '0');
    segundos.textContent = seg.padStart(2, '0');
});