// je declare mes sections
let sectionMembreBloquer = document.querySelector(".sectionMembreBloquer");
let sectionNextPage = document.querySelector(".sectionNextPage");

// je declare mes bouton page1 et page2
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

// je declare mes bouton Previous page et Next page
let previousPage = document.getElementById("previousPage");
let nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", ()=>{
    sectionNextPage.style.display="block";
    sectionMembreBloquer.style.display="none";
})
previousPage.addEventListener("click", ()=>{
    sectionMembreBloquer.style.display="block";
    sectionNextPage.style.display="none";
})