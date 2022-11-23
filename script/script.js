//price output
const priceOutput = document.getElementById("price");
// bottone per il calcolo ticket
const ticket = document.getElementById("ticketbtn");

ticket.addEventListener("click", function() {
// variabile km da percorrere
let km = document.getElementById("km");
// variabile età
let age = document.getElementById("user-age");
// price x km
let priceKm = 0.2762
// total price no discount
const tot = (priceKm * km.value);

// se minorenne sconto 17.5%
    if ((age.value >= 0) && (age.value < 18)) {
        priceOutput.innerHTML = (`&euro;` + (tot - (tot * 0.175)).toFixed(2));
    } 
    // se over 65 sconto del 33.3%
    else if (age.value > 65) {
        priceOutput.innerHTML = (`&euro;` + (tot - (tot * 0.333)).toFixed(2));
    } 
    // tutti gli altri prezzo intero
    else {
        priceOutput.innerHTML = (`&euro;` + tot.toFixed(2));
    }
})
