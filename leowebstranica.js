leowebstranica.js

// Provjera da li je JS datoteka ispravno učitana
console.log('JS učitan');

// Dodajemo event listener na formu
document.getElementById("kontaktForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Sprečava formu da bude poslana odmah

    console.log("Forma je poslana.");  // Ovdje ćemo vidjeti ako je forma poslana

    // Prikazivanje poruke zahvalnosti
    document.getElementById("formMessage").style.display = "block";
    console.log("Poruka se prikazuje."); // Provjeriti da li se poruka prikazuje

    // Resetiranje forme
    document.getElementById("kontaktForm").reset();
    console.log("Forma je resetirana.");
});