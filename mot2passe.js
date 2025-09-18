// je declare l'input N° téléphone ou E-mail
let telEmail = document.getElementById("telEmail").valus;
// je declare le bouton envoyer
let btnEnvoyer = document.getElementById("btnEnvoyer");
// je declare le bouton ok qui se trouve dans le modal
let btnOk = document.getElementById("btnOk");

// je manipule le bouton envoyer
btnEnvoyer.addEventListener("click", ()=>{
    let modale = document.getElementById("modale");
    modale.style.display="block"
 
})

btnOk.addEventListener("click", ()=>{
    section1.style.display="block"
    modale.style.display="none"
})