let section1 = document.querySelector(".section-1");
let section2 = document.querySelector(".section-2");
let editorProfil = document.getElementById("editorProfil")

editorProfil.addEventListener("click", ()=>{
    section1.style.display="none";
    section2.style.display="block";
})