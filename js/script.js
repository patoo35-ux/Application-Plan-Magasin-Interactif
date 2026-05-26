/**
 * Normalise le texte en minuscules et supprime les accents
 * @param {string} texte - Le texte à normaliser
 * @returns {string} Texte normalisé
 */
function nettoyerTexte(texte) {
    return texte.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Lance la recherche d'un rayon basée sur la saisie utilisateur
 * Cherche d'abord par rayon, puis par nom de produit
 */
function lancerRecherche() {
    const champSaisie = document.getElementById("saisieUtilisateur");
    const messageInfo = document.getElementById("messageInfo");

    // Validation : champ vide
    if (!champSaisie || champSaisie.value.trim() === "") {
        afficherMessage(messageInfo, "Quel rayon recherchez-vous ? ✍️", "orange");
        return;
    }

    // Validation : vérifier que les données sont chargées
    if (typeof produitsCultura === 'undefined' || !Array.isArray(produitsCultura)) {
        afficherMessage(messageInfo, "Erreur : Données produits non chargées. 🔌", "red");
        return;
    }

    const texteTape = nettoyerTexte(champSaisie.value);

    // Recherche : d'abord par rayon, puis par nom de produit
    const produitTrouve = produitsCultura.find(p => 
        nettoyerTexte(p.rayon || "").includes(texteTape)
    ) || produitsCultura.find(p => 
        nettoyerTexte(p.nom || "").includes(texteTape)
    );

    if (produitTrouve) {
        afficherChemin(produitTrouve, messageInfo);
    } else {
        afficherMessage(messageInfo, "Produit ou rayon non trouvé. 🤷‍♂️", "red");
    }
}

/**
 * Affiche le chemin calculé vers un rayon et met en avant les cellules
 * @param {Object} produit - Le produit trouvé
 * @param {Element} messageInfo - L'élément pour afficher les messages
 */
function afficherChemin(produit, messageInfo) {
    // Réinitialiser tous les trajets actifs
    document.querySelectorAll(".trajetAllume").forEach(el => el.classList.remove("trajetAllume"));
    document.querySelectorAll(".cibleAtteinte").forEach(el => el.classList.remove("cibleAtteinte"));
    
    // Récupérer le chemin pré-calculé
    const chemin = cheminsDuMagasin[produit.rayon];

    if (!chemin || chemin.length === 0) {
        afficherMessage(messageInfo, `Impossible de calculer le chemin vers : ${produit.rayon} 🚫`, "red");
        return;
    }

    // Mettre en avant chaque cellule du trajet
    chemin.forEach(id => {
        const element = document.getElementById(id.trim());
        if (element) {
            element.classList.add("trajetAllume");
        }
    });
    
    // --- CIBLER L'ARRIVÉE ---
    // On récupère l'ID de la toute dernière case du chemin
    let idArrivee = chemin[chemin.length - 1].trim();
    let caseCible = document.getElementById(idArrivee);
            
    if (caseCible) {
        // On lui ajoute la classe d'animation
        caseCible.classList.add("cibleAtteinte");
    }

    // Fermer la popup
    fermerPopup();

    // Afficher le bouton d'effacement du trajet
    document.getElementById("boutonEffacer").classList.add("visible");

    // Descendre vers la cellule d'arrivée pour la mettre en vue (scroll automatique)
    if (caseCible) {
        // Le setTimeout permet d'attendre que la popup soit bien fermée
        // avant de lancer l'animation de défilement
        setTimeout(() => {
            caseCible.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }, 150);
    }

    afficherMessage(messageInfo, `Trouvé ! Direction : ${produit.rayon} ✅`, "green");

    // --- NOUVEAU : MISE À JOUR DU HEADER ---
    const sousTitre = document.querySelector(".sousTitreDocument");
    if (sousTitre) {
        sousTitre.textContent = `En route vers : ${produit.rayon} 📍`;
        sousTitre.style.color = "var(--couleur-secondaire)"; // Applique ta couleur chocolat
    }

}

/**
 * Affiche un message d'information
 */
function afficherMessage(element, texte, couleur) {
    if (element) {
        element.textContent = texte;
        element.style.color = couleur;
    }
}

/**
 * Ouvre / Ferme la modale de recherche
 */
function ouvrirPopup() { 
    document.getElementById("popupRecherche").classList.add("show"); 
}
function fermerPopup() { 
    document.getElementById("popupRecherche").classList.remove("show"); 
}

/**
 * ========== GÉNÉRATION DU PLAN DU MAGASIN ==========
 */

function placerIconesSurPlan() {
    // Dictionnaire : "ID de ton image HTML" -> "ID de la case cible"
    const positionsImages = {
        "maBorne": "z1666", 
        "accueilMagasin": "z3228",
        "atelier": "z0605",
        "zoneOP1": "z2933",
        "zoneOP2": "z1174",
        "flecheDirection": "z2454",
        "caissesAutomatiques": "z1987",
        "caissesLigne": "z1321",
        "accueilLibrairie": "z5775",
        "accueilMvln": "z6177",
        "Parking": "z7059",
        "laMadeleine": "z1004"
    };

    for (const [idImage, idCase] of Object.entries(positionsImages)) {
        const image = document.getElementById(idImage);
        const caseCible = document.getElementById(idCase);
        
        if (image && caseCible) {
            // On déplace physiquement l'image dans la case
            caseCible.appendChild(image);
            
            // Si c'est la borne, on la met à l'étage 2000. Sinon, étage 1000.
            if (idImage === "maBorne") {
                caseCible.style.zIndex = "2000";
            } else {
                caseCible.style.zIndex = "1000";
            }
        }
    }
}

function genererGrilleMagasin() {
    const container = document.querySelector('.magasinContainer');
    if (!container) {
        console.error("Conteneur .magasinContainer non trouvé");
        return;
    }

    // Vérifier que les données du plan sont disponibles
    if (typeof planMagasin === 'undefined' || !Array.isArray(planMagasin)) {
        console.error("Erreur : Données planMagasin non chargées ou invalides");
        return;
    }

    const nbLignesParColonne = 112;

    planMagasin.forEach((colonneData, indexColonne) => {
        const colonneDiv = document.createElement('div');
        colonneDiv.id = `colonne${String(indexColonne + 1).padStart(2, '0')}`;

        // Inverser la colonne pour l'affichage (inversion Y)
        const colonneInversee = [...colonneData].reverse();

        colonneInversee.forEach((classeCase, indexInverse) => {
            const caseDiv = document.createElement('div');

            // Retrouver l'index d'origine avant inversion
            const indexLigneOriginal = (colonneData.length - 1) - indexInverse;

            // Calculer l'ID unique de la cellule : z0001, z0002, ...
            const numeroUnique = (indexColonne * nbLignesParColonne) + indexLigneOriginal + 1;
            caseDiv.id = `z${String(numeroUnique).padStart(4, '0')}`;

            // Appliquer les classes CSS (rayon, parquet, moquette, etc.)
            caseDiv.classList.add(classeCase);

            colonneDiv.appendChild(caseDiv);
        });

        container.appendChild(colonneDiv);
    });
}

/**
 * ========== ÉTIQUETAGE & INFOBULLE ==========
 */

function etiqueterRayon(tableauCases, nomDuRayon) {
    tableauCases.forEach(idCase => {
        const element = document.getElementById(idCase);
        if (element) {
            element.dataset.rayon = nomDuRayon;
            element.classList.add('zone-interactive');
        }
    });
}

function initialiserInfobulle() {
    const containerMagasin = document.querySelector('.magasinContainer');
    const infobulle = document.getElementById('infobulle-rayon');

    if (!containerMagasin || !infobulle) {
        console.warn("Conteneur ou infobulle non trouvés");
        return;
    }

    const gererAffichage = (e) => {
        const caseSurvolee = e.target;
        const nomRayon = caseSurvolee.dataset?.rayon;

        if (nomRayon) {
            infobulle.textContent = nomRayon;
            infobulle.classList.remove('hidden');

            const x = e.clientX || (e.touches?.[0]?.clientX);
            const y = e.clientY || (e.touches?.[0]?.clientY);

            if (x && y) {
                infobulle.style.left = `${x + 15}px`;
                infobulle.style.top = `${y + 15}px`;
            }
        } else {
            infobulle.classList.add('hidden');
        }
    };

    // Événements souris
    containerMagasin.addEventListener('mousemove', gererAffichage);
    containerMagasin.addEventListener('mouseleave', () => infobulle.classList.add('hidden'));

    // Événements tactiles (mobile)
    containerMagasin.addEventListener('touchmove', (e) => {
        const touch = e.touches?.[0];
        if (touch) {
            const elementSousDoigt = document.elementFromPoint(touch.clientX, touch.clientY);
            if (elementSousDoigt) {
                gererAffichage({
                    target: elementSousDoigt,
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
            }
        }
    }, { passive: true });

    containerMagasin.addEventListener('touchend', () => infobulle.classList.add('hidden'));
}

/**
 * Charge la liste des rayons pour l'autocomplétion
 */
function chargerListeRayons() {
    const suggestionBox = document.getElementById('suggestionsRayons');
    if (!suggestionBox) return;

    fetch('data/dataListeRayons.html')
        .then(reponse => {
            if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
            return reponse.text();
        })
        .then(data => {
            suggestionBox.innerHTML = data;
        })
        .catch(err => console.warn("Impossible de charger la liste des rayons :", err));
}

/**
 * Initialise les écouteurs clavier
 */
function initialiserEcouteurClavier() {
    const input = document.getElementById("saisieUtilisateur");
    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            lancerRecherche();
        }
        if (e.key === "Escape") {
            fermerPopup();
        }
    });
}

function effacerTrajetManuel() {
    // 1. On éteint la lumière sur le trajet
    document.querySelectorAll(".trajetAllume").forEach(el => {
        el.classList.remove("trajetAllume");
    });
    
    // 2. On éteint la cible rouge
    document.querySelectorAll(".cibleAtteinte").forEach(el => {
        el.classList.remove("cibleAtteinte");
    });

    // 3. On cache le bouton
    document.getElementById("boutonEffacer").classList.remove("visible");

    // 4. On vide les champs
    const champSaisie = document.getElementById("saisieUtilisateur");
    if (champSaisie) champSaisie.value = "";
    
    const messageInfo = document.getElementById("messageInfo");
    if (messageInfo) messageInfo.textContent = "";

    // --- NOUVEAU : RÉINITIALISATION DU HEADER ---
    const sousTitre = document.querySelector(".sousTitreDocument");
    if (sousTitre) {
        sousTitre.textContent = "Trouvez votre chemin en un clic !";
        sousTitre.style.color = ""; // Retire la couleur chocolat
    }

}

// ========== FONCTIONS DE RÉINITIALISATION & INACTIVITÉ ==========

function reinitialiserBorne() {
    // 1. Effacer le trajet et la cible
    document.querySelectorAll(".trajetAllume").forEach(el => {
        el.classList.remove("trajetAllume");
    });
    document.querySelectorAll(".cibleAtteinte").forEach(el => {
        el.classList.remove("cibleAtteinte");
    });
    document.getElementById("boutonEffacer").classList.remove("visible");

    // 2. Vider la barre de recherche
    const champSaisie = document.getElementById("saisieUtilisateur");
    if (champSaisie) champSaisie.value = "";

    // 3. Effacer le message d'information
    const messageInfo = document.getElementById("messageInfo");
    if (messageInfo) messageInfo.textContent = "";

    // 4. Fermer la fenêtre de recherche
    fermerPopup();

    // 5. Replacer la caméra au point de départ
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // --- NOUVEAU : RÉINITIALISATION DU HEADER ---
    const sousTitre = document.querySelector(".sousTitreDocument");
    if (sousTitre) {
        sousTitre.textContent = "Trouvez votre chemin en un clic !";
        sousTitre.style.color = ""; 
    }
}

let chronoInactivite;
const TEMPS_INACTIVITE = 60000; // 60 secondes

function relancerChrono() {
    clearTimeout(chronoInactivite);
    chronoInactivite = setTimeout(reinitialiserBorne, TEMPS_INACTIVITE);
}

/**
 * Initialise le Service Worker pour le mode PWA (offline)
 */
function initialiserPWA() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log("Service Worker enregistré"))
            .catch(err => console.warn("Service Worker non disponible :", err));
    }
}

/**
 * ========== INITIALISATION GLOBALE ==========
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // 1. Générer la grille du magasin
        genererGrilleMagasin();
        
        // 2. Placer les icônes sur le plan
        placerIconesSurPlan();

        // 3. Charger les étiquettes des rayons
        if (typeof chargerEtiquettesRayons === "function") {
            chargerEtiquettesRayons();
        }
        
        // 4. Lancer le GPS une fois les murs existants
        if (typeof initialiserGPS === "function") {
            initialiserGPS();
        }
        
        // 5. Initialiser l'infobulle flottante
        initialiserInfobulle();

        // 6. Charger la liste des rayons
        chargerListeRayons();

        // 7. Ajouter les écouteurs clavier
        initialiserEcouteurClavier();

        // 8. Initialiser la PWA
        initialiserPWA();

        // 9. Initialiser le chronomètre d'inactivité
        const actionsClient = ['touchstart', 'click', 'scroll', 'input'];
        actionsClient.forEach(action => {
            document.addEventListener(action, relancerChrono);
        });
        
        // Premier lancement du chrono
        relancerChrono();

    } catch (err) {
        console.error("Erreur lors de l'initialisation de l'app :", err);
        afficherMessage(
            document.getElementById("messageInfo"),
            "Erreur d'initialisation. Veuillez rafraîchir la page. 🔄",
            "red"
        );
    }
});