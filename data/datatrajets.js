const cheminsDuMagasin = {}; // Dictionnaire dynamique stockant les trajets calculés vers chaque rayon

/** 
 * GPS Interactif - Cultura Saint-Malo
 * Algorithme de routage intelligent avec évitement d'obstacles 
 */
function initialiserGPS() {
    // Vérification de l'existence de la base de données
    if (typeof produitsCultura === 'undefined') {
        console.error("Erreur : Base de données produitsCultura introuvable.");
        return;
    }

    produitsCultura.forEach(produit => {
        if (!produit.rayon || !produit.cases) return;
        
        // Optimisation : on ignore si le trajet est déjà calculé
        if (cheminsDuMagasin[produit.rayon]) return;
        
        // Extraction du numéro de la cellule cible
        const listeCases = produit.cases.split(",");
        const num = parseInt(listeCases[0].trim().replace(/[^0-9]/g, ''), 10);
        
        if (!isNaN(num)) {
            cheminsDuMagasin[produit.rayon] = calculerTrajetVers(num);
        }
    });
}

function calculerTrajetVers(celluleCible) {
    const trajet = [];
    
    // Constantes du plan (à ajuster si la topographie évolue)
    const LIGNE_BORNE = 99;      // Ligne de départ (Borne d'accueil)
    const COLONNE_COULOIR = 22;  // Colonne de l'allée principale
    const LIGNE_AUTOROUTE = 98;  // Ligne de circulation (Autoroute)
    const HAUTEUR_GRILLE = 112;  // Nombre de lignes de la grille du magasin

    // Calcul des coordonnées cibles
    const colCible = Math.floor((celluleCible - 1) / HAUTEUR_GRILLE) + 1;
    const ligCible = ((celluleCible - 1) % HAUTEUR_GRILLE) + 1;

    // Fonction utilitaire de conversion (Colonne, Ligne) -> ID de cellule (ex: z0124)
    const coordToId = (c, l) => "z" + String((c - 1) * HAUTEUR_GRILLE + l).padStart(4, '0');

    // Vérifie si une case est praticable
    function estUneAllee(c, l) {
        const id = coordToId(c, l);
        const element = document.getElementById(id);
        
        if (!element) return false; // Hors plan, considéré comme un mur

        // 1. Les murs sont toujours interdits
        if (element.classList.contains('black')) return false;

        // 2. Si c'est la case de destination finale, on l'autorise (même sur un meuble)
        const estCible = (c === colCible && l === ligCible);
        if (estCible) return true;

        // 3. Sinon, on n'autorise que le parquet et la moquette
        return element.classList.contains('parquet') || element.classList.contains('moquette');
    }

    // --- A. Départ Borne ---
    trajet.push(
        coordToId(20, LIGNE_BORNE), 
        coordToId(21, LIGNE_BORNE), 
        coordToId(COLONNE_COULOIR, LIGNE_BORNE)
    );

    // --- B. Descente couloir principal ---
    const stepL = (LIGNE_AUTOROUTE > LIGNE_BORNE) ? 1 : -1;
    for (let l = LIGNE_BORNE + stepL; l !== LIGNE_AUTOROUTE + stepL; l += stepL) {
        if (estUneAllee(COLONNE_COULOIR, l)) trajet.push(coordToId(COLONNE_COULOIR, l));
    }

    // --- C. Autoroute Horizontale ---
    const stepC = (colCible > COLONNE_COULOIR) ? 1 : -1;
    for (let c = COLONNE_COULOIR + stepC; c !== colCible + stepC; c += stepC) {
        if (estUneAllee(c, LIGNE_AUTOROUTE)) trajet.push(coordToId(c, LIGNE_AUTOROUTE));
    }

    // --- D. Finalisation Colonne vers cible ---
    const stepFinal = (ligCible > LIGNE_AUTOROUTE) ? 1 : -1;
    for (let l = LIGNE_AUTOROUTE + stepFinal; l !== ligCible + stepFinal; l += stepFinal) {
        if (estUneAllee(colCible, l)) trajet.push(coordToId(colCible, l));
    }

    return trajet;
}