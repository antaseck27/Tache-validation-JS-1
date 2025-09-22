
  const membresActifs = [
      { nom: "Colle Fall", dateDeDebut: "01/01/2022", MontantCotise : "300.000 FCFA",MontantRestant : "300.000 FCFA"  },
      { nom: "Anta Seck", dateDeDebut: "01/01/2022",MontantCotise: "300.000 FCFA", MontantRestant : "300.000 FCFA"  },
      { nom: "Idrissa Gnigue", dateDeDebut: "01/01/2022",MontantCotise: "300.000 FCFA",MontantRestant : "300.000 FCFA"},
      { nom: "Ndeye Gnilane", dateDeDebut: "01/01/2022",MontantCotise: "300.000 FCFA",MontantRestant : "300.000 FCFA"},
      { nom: "Ahmed Cisse", dateDeDebut: "01/01/2022",MontantCotise: "300.000 FCFA", MontantRestant : "300.000 FCFA" },
      { nom: "Nogaye Ndao", dateDeDebut: "01/01/2022",MontantCotise: "300.000 FCFA", MontantRestant : "300.000 FCFA" },
    ];

  function afficherMembresActifs() {
  let html = `<table class="table table-borderless bg-white shadow rounded mt-4" style="max-width:900px; margin:auto;">
    <thead class="header2">
      <tr>
        <th class="px-3 py-2">Membres</th>
        <th class="px-3 py-2">Date début</th>
        <th class="px-3 py-2">Montant Cotisé</th>
        <th class="px-3 py-2">Montant Restant</th>
        <th class="px-3 py-2 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>`;

  membresActifs.forEach(m => {
    html += `<tr>
      <td class="px-3 py-2 text-principal">${m.nom}</td>
      <td class="px-3 py-2 text-principal">${m.dateDeDebut}</td>
      <td class="px-3 py-2 text-principal">${m.MontantCotise}</td>
      <td class="px-3 py-2 text-principal">${m.MontantRestant}</td>
      <td class="px-3 py-2 text-center">
        <i class="bi bi-eye text-principal cursor-pointer" title="Voir"></i>
      </td>
    </tr>`;
  });

  html += `</tbody></table>`;
  document.getElementById("zoneActifs").innerHTML = html;
}

// appel de la fonction
afficherMembresActifs();

