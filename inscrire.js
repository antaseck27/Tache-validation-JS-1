// je declare les input
let inputNom = document.getElementById("inputNom").valus;
let inputNaissance = document.getElementById("inputNaissance").valus;
let inputDmot2passe = document.getElementById("inputDmot2passe").valus;
let inputMail = document.getElementById("inputMail").valus;
let inputAdresse = document.getElementById("inputAdresse").valus;
let inputPrenom = document.getElementById("inputPrenom").valus;
let inputProfession = document.getElementById("inputProfession").valus;
let inputTelephone = document.getElementById("inputTelephone").valus;
let inputOrganisation = document.getElementById("inputOrganisation").valus;

// je declare mon bouton s'inscrire
let inscrire = document.getElementById("inscrire");

// je declare le lien Connectez-vous!
let connecteVous = document.getElementById("connecteVous");


// je manipule mon bouton s'inscrire
inscrire.addEventListener("click", function(event){
     event.preventDefault()
     section3.style.display= "none";
     section1.style.display= "block";
})

// je manipule le lien Connectez-vous!
connecteVous.addEventListener("click", ()=>{
     section3.style.display= "none";
     section1.style.display= "block";
})