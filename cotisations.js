const membresCotises = [
  { nom: "Colle Fall", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" },
  { nom: "Anta Seck", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" },
  { nom: "Idrissa Gnigue", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" },
  { nom: "Ndeye Gnilane", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" },
  { nom: "Ahmed Cisse", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" },
  { nom: "Nogaye Ndao", date: "01/01/2022", montantCotise: "300.000", montantRestant: "300.000" }
];

const evolutionCotisations = [
  { nom: "Colle Fall", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" },
  { nom: "Anta Seck", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" },
  { nom: "Idrissa Gnigue", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" },
  { nom: "Ndeye Gnilane", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" },
  { nom: "Ahmed Cisse", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" },
  { nom: "Nogaye Ndao", dateDebut: "01/01/2022", dateFin: "01/02/2022", montantTotal: "300.000", statut:"Terminé" }
];

// Affichage du tableau principal
function afficherMembresCotises() {
  let html = `<table class="table-auto w-[900px] bg-white mx-auto border-collapse mt-16 shadow-lg rounded-lg">
    <thead class="bg-[#20DF7F] text-[#093545] font-semibold">
      <tr>
        <th class="px-4 py-2 text-left">Membres</th>
        <th class="px-4 py-2 text-left">Date début</th>
        <th class="px-4 py-2 text-left">Montant Cotisé</th>
        <th class="px-4 py-2 text-left">Montant Restant</th>
        <th class="px-4 py-2 ">Actions</th>
      </tr>
    </thead><tbody>`;
  membresCotises.forEach(m => {
    html += `<tr class="hover:bg-gray-100">
      <td class="px-4 py-2 text-[#093545]">${m.nom}</td>
      <td class="px-4 py-2 text-[#093545]">${m.date}</td>
      <td class="px-4 py-2 text-[#093545]">${m.montantCotise} FCFA</td>
      <td class="px-4 py-2 text-[#093545]">${m.montantRestant} FCFA</td>
      <td class="px-4 py-2 flex justify-center">
        <i class="bi bi-eye text-[#093545] cursor-pointer hover:text-[#20DF7F] " title="Voir"></i>
      </td>
    </tr>`;
  });
  html += `</tbody></table>`;
  document.getElementById("zoneTableau").innerHTML = html;
}

// Affichage du tableau evolutionCotisations dans le modal
function afficherEvolutionCotisations() {
  let html = `<table class="table-auto w-[900px] h-[400px] bg-white border-collapse shadow-lg rounded-lg mt-10">
    <thead class= "bg-[#093545] text-[#FFFFFF] h-[50px] rounded-lg font-semibold">
      <tr>
        <th class="px-4 py-2 text-left">Membres</th>
        <th class="px-4 py-2 text-left">Date début</th>
        <th class="px-4 py-2 text-left">Date fin</th>
        <th class="px-4 py-2 text-left">Montant Total</th>
        <th class="px-4 py-2 text-left">Statut</th>
        <th class="px-4 py-2 ">Actions</th>
      </tr>
    </thead><tbody>`;
  evolutionCotisations.forEach(m => {
    html += `<tr class="hover:bg-gray-100">
      <td class="px-4 py-2 text-[#093545]">${m.nom}</td>
      <td class="px-4 py-2 text-[#093545]">${m.dateDebut}</td>
      <td class="px-4 py-2 text-[#093545]">${m.dateFin}</td>
      <td class="px-4 py-2 text-green-600 ">${m.montantTotal} FCFA</td>
      <td class="px-4 py-2 ${m.statut === 'Terminé' ? 'text-green-600 ' : 'text-red-600 '}">${m.statut}</td>
      <td class="px-4 py-2 flex justify-center">
        <i class="bi bi-eye text-[#093545] cursor-pointer hover:text-[#20DF7F] text-left"title="Voir"></i>
      </td>
      </tr>`;
  });
  html += `</tbody></table>`;
  document.getElementById("zoneEvolution").innerHTML = html;
}

// Événements
document.addEventListener("DOMContentLoaded", afficherMembresCotises);
document.getElementById("btnAction").addEventListener("click", () => {
  afficherEvolutionCotisations();
  document.getElementById("modalEvolution").classList.remove("hidden");
});
document.getElementById("btnFermerModal").addEventListener("click", () => {
  document.getElementById("modalEvolution").classList.add("hidden");
});