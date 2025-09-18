// je declare mes sections
let sectionArchives = document.querySelector(".sectionArchives");
let sectionNextPage = document.querySelector(".sectionNextPage");

// je declare mes bouton page1 et page2
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

// je declare mes bouton Previous page et Next page
let previousPage = document.getElementById("previousPage");
let nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", ()=>{
    sectionNextPage.style.display="block";
    sectionArchives.style.display="none";
})
previousPage.addEventListener("click", ()=>{
    sectionArchives.style.display="block";
    sectionNextPage.style.display="none";
})