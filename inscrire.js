// je declare les input
let inputNom = document.getElementById("inputNom").value;
let inputNaissance = document.getElementById("inputNaissance").value;
let inputDmot2passe = document.getElementById("inputDmot2passe").value;
let inputMail = document.getElementById("inputMail").value;
let inputAdresse = document.getElementById("inputAdresse").value;
let inputPrenom = document.getElementById("inputPrenom").value;
let inputProfession = document.getElementById("inputProfession").value;
let inputTelephone = document.getElementById("inputTelephone").value;
let inputOrganisation = document.getElementById("inputOrganisation").value;

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