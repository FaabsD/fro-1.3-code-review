// Zet tijd (uren, minuten en seconden) in variabelen
/*let date = new Date;
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
*/
// Voeg eventlisteners toe
document.getElementById('startTime').addEventListener('click', startTime);
// document.getElementById('stopTime').addEventListener('click', function);

// Functie die de tijd ophaald wanneer de startknop is aangeklikt

function startTime() {
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById('timeBetween').innerHTML = hours.minutes;

}