//leowebstranica.js

// Provjera da li je JS datoteka ispravno učitana
console.log('JS učitan');

// Dodajemo event listener na formu
document.getElementById("kontaktForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Sprečava formu da bude poslana odmah

    console.log("Forma je poslana.");  // Ovdje ćemo vidjeti ako je forma poslana

    // Provjera ako je poruka s ID-om 'formMessage' ispravno pronađena
    var formMessage = document.getElementById("formMessage");
    if (formMessage) {
        // Prikazivanje poruke zahvalnosti
        formMessage.style.display = "block";
        console.log("Poruka se prikazuje."); // Provjeriti da li se poruka prikazuje
    } else {
        console.log("Element 'formMessage' nije pronađen.");
    }

    // Resetiranje forme
    document.getElementById("kontaktForm").reset();
    console.log("Forma je resetirana.");
});
