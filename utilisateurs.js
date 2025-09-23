function loadUsersTable() {
    // --- Données ---
    const membresActifs = [
      { nom: "Colle Fall", date: "01/01/2022", seuil: "300.000 FCFA", progression: 100, statut: "Terminé" },
      { nom: "Anta Seck", date: "01/01/2022", seuil: "300.000 FCFA", progression: 57, statut: "En cours" },
      { nom: "Idrissa Gnigue", date: "01/01/2022", seuil: "300.000 FCFA", progression: 100, statut: "Terminé" },
      { nom: "Ndeye Gnilane", date: "01/01/2022", seuil: "300.000 FCFA", progression: 50, statut: "En cours" },
      { nom: "Ahmed Cisse", date: "01/01/2022", seuil: "300.000 FCFA", progression: 50, statut: "En cours" },
      { nom: "Nogaye Ndao", date: "01/01/2022", seuil: "300.000 FCFA", progression: 64, statut: "En cours" },
    ];
  
    const membresBloques = [
      { nom: "Colle Fall", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" },
      { nom: "Anta Seck", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" },
      { nom: "Idrissa Gnigue", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" },
      { nom: "Ndeye Gnilane", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" },
      { nom: "Ahmed Cisse", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" },
      { nom: "Nogaye Ndao", date: "01/01/2022", seuil: "300.000 FCFA", statut: "Bloque" }
    ];
  
    const membresTotal = [
      { nom: "Colle Fall", date: "01/01/2022", seuil: "300.000 FCFA", progression: 100, statut: "Actif" },
      { nom: "Anta Seck", date: "01/01/2022", seuil: "300.000 FCFA", progression: 57, statut: "Bloque" },
      { nom: "Idrissa Gnigue", date: "01/01/2022", seuil: "300.000 FCFA", progression: 100, statut: "Actif" },
      { nom: "Ndeye Gnilane", date: "01/01/2022", seuil: "300.000 FCFA", progression: 50, statut: "Actif" },
      { nom: "Ahmed Cisse", date: "01/01/2022", seuil: "300.000 FCFA", progression: 50, statut: "Actif" },
      { nom: "Nogaye Ndao", date: "01/01/2022", seuil: "300.000 FCFA", progression: 64, statut: "Bloque" }
    ];
  
    // --- Fonctions affichage tableaux ---
    function afficherActifs() {
      let html = `<table class="table table-borderless shadow rounded-3 table-custom mx-auto">
        <thead class="header">
          <tr>
            <th>Membres</th><th>Date début</th><th>Seuil</th><th>Progression</th>
            <th class="ps-5">Statut</th><th class="text-center">Actions</th>
          </tr>
        </thead><tbody>`;
      membresActifs.forEach(m => {
        html += `<tr>
          <td class="text-green">${m.nom}</td>
          <td class="text-green">${m.date}</td>
          <td class="text-green">${m.seuil}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="progress flex-grow-1" style="height:4px;">
                <div class="progress-bar ${m.progression === 100 ? 'bg-success' : 'bg-secondary'}"
                  role="progressbar" style="width:${m.progression}%"
                  aria-valuenow="${m.progression}" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small class="text-green">${m.progression}%</small>
            </div>
          </td>
          <td class="ps-5 ${m.statut==='Terminé'?'text-success fw-bold':'text-primary'}">${m.statut}</td>
          <td class="text-center">
            <i class="bi bi-eye text-dark me-2" title="Voir"></i>
            <i class="bi bi-pencil-square text-dark me-2" title="Modifier"></i>
            <i class="bi bi-ban text-dark" title="Bloquer"></i>
          </td>
        </tr>`;
      });
      html += "</tbody></table>";
      document.getElementById("zoneTableau").innerHTML = html;
    }
  
    function afficherBloques() {
      let html = `<table class="table table-borderless table-hover bg-white shadow rounded-3 table-custom mx-auto">
        <thead class="header">
          <tr>
            <th>Membres</th><th>Date début</th><th>Seuil</th><th>Statut</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead><tbody>`;
      membresBloques.forEach(m => {
        html += `<tr>
          <td class="text-green">${m.nom}</td>
          <td class="text-green">${m.date}</td>
          <td class="text-green">${m.seuil}</td>
          <td class="text-danger fw-bold">${m.statut}</td>
          <td class="text-center">
            <i class="bi bi-eye text-dark me-2" title="Voir"></i>
            <i class="bi bi-ban text-danger" title="Bloquer"></i>
          </td>
        </tr>`;
      });
      html += "</tbody></table>";
      document.getElementById("zoneTableau").innerHTML = html;
    }
  
    function afficherTotal() {
      let html = `<table class="table table-borderless table-hover bg-white shadow rounded-3 table-custom mx-auto">
        <thead class="header">
          <tr>
            <th>Membres</th><th>Date début</th><th>Seuil</th><th>Progression</th>
            <th class="ps-5">Statut</th><th class="text-center">Actions</th>
          </tr>
        </thead><tbody>`;
      membresTotal.forEach(m => {
        html += `<tr>
          <td class="text-green">${m.nom}</td>
          <td class="text-green">${m.date}</td>
          <td class="text-green">${m.seuil}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="progress flex-grow-1" style="height:4px;">
                <div class="progress-bar ${m.progression===100?'bg-success':'bg-secondary'}"
                  role="progressbar" style="width:${m.progression}%"
                  aria-valuenow="${m.progression}" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small class="text-green">${m.progression}%</small>
            </div>
          </td>
          <td class="ps-5 ${m.statut==='Bloque'?'text-danger fw-bold':m.statut==='Actif'?'text-success fw-semibold':'text-dark'}">${m.statut}</td>
          <td class="text-center">
            <i class="bi bi-eye text-dark me-2" title="Voir"></i>
            <i class="bi bi-pencil-square text-dark me-2" title="Modifier"></i>
            <i class="bi bi-ban ${m.statut==='Bloque'?'text-danger':'text-dark'}" title="Bloquer"></i>
          </td>
        </tr>`;
      });
      html += "</tbody></table>";
      document.getElementById("zoneTableau").innerHTML = html;
    }
  
    // --- Lier les cards ---
    document.getElementById("cardActifs").addEventListener("click", afficherActifs);
    document.getElementById("cardBloques").addEventListener("click", afficherBloques);
    document.getElementById("cardTotal").addEventListener("click", afficherTotal);
  
    // --- Affichage par défaut ---
    afficherActifs();
  
    // --- Modal formulaire ---
    const btnAjouter = document.getElementById("btnAjouter");
    const modalForm = document.getElementById("modalForm");
    const btnFermer = document.getElementById("btnFermer");
    const formMembre = document.getElementById("formMembre");
  
    btnAjouter.addEventListener("click", () => modalForm.classList.replace("d-none","d-flex"));
    btnFermer.addEventListener("click", () => modalForm.classList.replace("d-flex","d-none"));
    formMembre.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert("Membre ajouté avec succès ✅");
      formMembre.reset();
      modalForm.classList.replace("d-flex","d-none");
    });
  
    // --- Gestion active cards ---
    const cards = document.querySelectorAll('.cards1,.cards2,.cards3');
    cards.forEach(card=>{
      card.addEventListener('click',()=>{
        cards.forEach(c=>c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }
  
  // Appel automatique si le script est chargé
  loadUsersTable();
  