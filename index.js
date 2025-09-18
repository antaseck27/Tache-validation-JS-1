// je déclare mes sections
   let section1 = document.querySelector(".section-1");
   let section2 = document.querySelector(".section-2");
   let section3 = document.querySelector(".section-3");
// je declare mes boutons
   let btnConnexion = document.getElementById("btnConnexion");
   let mot2passe = document.getElementById("mot2passe");
   let inscrivezVous = document.getElementById("inscrivezVous");
// je declare mes inputs
   let inputTéléphone = document.getElementById("inputTéléphone").value;
   let inputMot2passe = document.getElementById("inputMot2passe").value;


// je manipule mon bouton connecxion
//    btnConnexion.addEventListener("click", function(event){
//         event.preventDefault()
//    })

// je manipule le lien Mot de passe oublié?
   mot2passe.addEventListener("click", ()=>{
        section1.style.display= "none";
        section2.style.display= "block"; 
   })

// je manipule le lien inscrivez-vous!
   inscrivezVous.addEventListener("click", ()=>{
        section1.style.display= "none";
        section2.style.display= "none";
        section3.style.display= "block";

   })
      