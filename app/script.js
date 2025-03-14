document.getElementById("menuBtn").addEventListener("click", async () => {
    const menuDiv = document.getElementById("menu");
    const menuList = document.getElementById("menuList");
    const menuBtn = document.getElementById("menuBtn");

    // Vérifier si le menu est affiché
    if (menuDiv.style.display === "block") {
        // Si le menu est ouvert, on le ferme
        menuDiv.style.display = "none";
        menuBtn.textContent = "Voir le menu";
    } else {
        // Sinon, on récupère les plats et on l'affiche
        try {
            const response = await fetch("/plats");
            const plats = await response.json();

            // Afficher les plats sous forme de liste
            menuList.innerHTML = plats.map(plat => `<li>${plat.nom} - ${plat.prix}€</li>`).join('');

            // Afficher le menu et changer le texte du bouton
            menuDiv.style.display = "block";
            menuBtn.textContent = "Fermer le menu";
        } catch (error) {
            console.error("Erreur lors de la récupération du menu :", error);
            menuList.innerHTML = "<li>Erreur lors du chargement du menu.</li>";
        }
    }
});
