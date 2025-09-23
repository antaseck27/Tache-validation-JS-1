
// loadPage('utilisateurs.html'); 
// // dans loadPage(), après fetch, ajoute :
// if (page === 'utilisateurs.html') {
//   loadUsersTable();
// }

// function loadPage(page) {
//   fetch(page)
//     .then(res => res.text())
//     .then(html => {
//       document.getElementById('content').innerHTML = html;

//       // Appelle le script externe si page utilisateurs
//       if (page === 'utilisateurs.html') {
//         loadUsersTable(); // Remplit le tableau
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       document.getElementById('content').innerHTML = "<div class='alert alert-danger'>Erreur de chargement</div>";
//     });
   
// }


// // Charger dashboard par défaut
// window.onload = function () {
// loadPage('dashboard.html');
// };

function loadPage(page) {
  fetch(page)
    .then(res => {
      if (!res.ok) throw new Error('Page introuvable');
      return res.text();
    })
    .then(html => {
      // Injecte le HTML dans #content
      document.getElementById('content').innerHTML = html;

      // Si c’est la page utilisateurs, charger le JS après l’injection du HTML
      if (page === 'utilisateurs.html') {
        const script = document.createElement('script');
        script.src = 'utilisateurs.js';
        document.body.appendChild(script);
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById('content').innerHTML = "<div class='alert alert-danger'>Erreur de chargement</div>";
    });
}

// Charger dashboard par défaut
window.onload = function () {
  loadPage('dashboard.html');
};

