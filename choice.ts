// Définition de la structure des données utilisateur
interface UserData {
    name: string | null;
    grade: string | null;
}

const displayData = (): void => {
    // Récupération des données depuis le localStorage
    const name: string | null = localStorage.getItem("name");
    const grade: string | null = localStorage.getItem("grade");

    // Sélection des éléments HTML avec typage sécurisé
    const nameElement = document.getElementById("display-name") as HTMLElement | null;
    const gradeElement = document.getElementById("display-grade") as HTMLElement | null;

    // Vérification : si les données existent ET que les éléments HTML sont présents
    if (name && grade && nameElement && gradeElement) {
        // Affichage du nom
        nameElement.innerText = name;
        
        // Affichage de la classe (on remplace les "_" par des espaces pour le visuel)
        // Exemple: "1ere_annee" devient "1ere annee"
        gradeElement.innerText = grade.replace(/_/g, " ");
    } else {
        // Si une donnée est manquante, on redirige vers la page d'accueil
        console.warn("Données manquantes ou éléments HTML introuvables. Redirection...");
        window.location.href = "index.html";
    }
};

// Exécution de la fonction au chargement de la fenêtre
window.onload = displayData;
