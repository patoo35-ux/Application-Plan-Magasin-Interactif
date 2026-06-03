/** Normalise le texte en minuscules, supprime les accents et la ponctuation
 * @param {string} texte - Le texte à normaliser
 * @returns {string} Texte normalisé
 */
function nettoyerTexte(texte) {
    if (!texte) return "";
    return texte
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // 1. Enlève les accents
        .replace(/[-,.()\/]/g, " ")     // 2. NOUVEAU : Remplace ponctuation (-,.()/) par des espaces
        .replace(/\s+/g, " ");          // 3. NOUVEAU : Écrase les espaces en double
}


/** Lance la recherche d'un rayon basée sur la saisie utilisateur */
function lancerRecherche() {
    document.querySelectorAll(".trajetAllume").forEach(el => el.classList.remove("trajetAllume"));
    document.querySelectorAll(".cibleAtteinte").forEach(el => el.classList.remove("cibleAtteinte"));

    const champSaisie = document.getElementById("saisieUtilisateur");
    const messageInfo = document.getElementById("messageInfo");

    // Validation : champ vide
    if (!champSaisie || champSaisie.value.trim() === "") {
        afficherMessage(messageInfo, "Que cherchez-vous ? ✍️", "orange");
        return;
    }

    if (typeof produitsCultura === 'undefined' || !Array.isArray(produitsCultura)) {
        afficherMessage(messageInfo, "Erreur : Données produits non chargées. 🔌", "red");
        return;
    }

    // 1. On nettoie la saisie et on la découpe en une liste de mots
    const texteTape = nettoyerTexte(champSaisie.value);
    const motsTapes = texteTape.split(/\s+/); 

    // 2. On cherche le produit qui correspond
    const produitTrouve = produitsCultura.find(produit => {
        // On fusionne toutes les infos du produit dans une seule grande phrase "fourre-tout"
        const contenuProduit = nettoyerTexte(
            `${produit.rayon || ""} ${produit.metier || ""} ${produit.nom || ""} ${produit.mots_cles || ""}`
        );

        // On vérifie que CHAQUE mot tapé par le client se trouve dans ce contenu
        // La méthode .every() s'assure que toutes les conditions sont vraies
        return motsTapes.every(mot => contenuProduit.includes(mot));
    });

    // 3. Affichage du résultat
    if (produitTrouve) {
        afficherChemin(produitTrouve, messageInfo);
    } else {
        afficherMessage(messageInfo, "Aucun rayon trouvé pour cette recherche. 🤷‍♂️", "red");
    }
}

//A VOIR
/** Affiche directement le rayon cible et zoome dessus (Mode simplifié sans GPS)
 * @param {Object} produit - Le produit trouvé
 * @param {Element} messageInfo - L'élément pour afficher les messages
 */
function afficherChemin(produit, messageInfo) {
    // 1. Nettoyage de l'ancienne recherche
    document.querySelectorAll(".trajetAllume").forEach(el => el.classList.remove("trajetAllume"));
    document.querySelectorAll(".cibleAtteinte").forEach(el => el.classList.remove("cibleAtteinte"));
    
    // 2. Vérification de sécurité
    if (!produit || !produit.cases) {
        afficherMessage(messageInfo, `Position introuvable pour : ${produit.rayon} 🚫`, "red");
        return;
    }

    // 3. Récupération des cases du rayon depuis la base de données
    const listeCases = produit.cases.split(",");
    let caseCentrale = null;

    // 4. On allume TOUTES les cases du rayon
    listeCases.forEach(id => {
        const element = document.getElementById(id.trim());
        if (element) {
            // On utilise la classe du trajet pour la couleur, 
            // et on ajoute la pulsation cible sur tout le meuble !
            element.classList.add("trajetAllume");
            element.classList.add("cibleAtteinte");
            
            // On mémorise la dernière case trouvée pour centrer la caméra
            caseCentrale = element;
        }
    });

    // 5. Mise à jour de l'interface
    fermerPopup();
    document.getElementById("boutonEffacer").classList.add("visible");

    // 6. Glissement de la caméra vers le rayon
    if (caseCentrale) {
        // Le setTimeout laisse le temps à la modale de se fermer
        setTimeout(() => {
            caseCentrale.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }, 150);
    }

    // 7. Mise à jour des textes
    afficherMessage(messageInfo, `Trouvé ! Rayon : ${produit.rayon} ✅`, "green");

    const sousTitre = document.querySelector(".sousTitreDocument");
    if (sousTitre) {
        sousTitre.textContent = `Rayon trouvé : ${produit.rayon} 📍`;
        sousTitre.style.color = "var(--couleur-secondaire)"; // Applique ta couleur chocolat
    }
}


/** Affiche un message d'information */
function afficherMessage(element, texte, couleur) {
    if (element) {
        element.textContent = texte;
        element.style.color = couleur;
    }
}


/** Ouvre / Ferme la modale de recherche */
function ouvrirPopup() { 
    document.getElementById("popupRecherche").classList.add("show"); 
}
function fermerPopup() { 
    document.getElementById("popupRecherche").classList.remove("show"); 
}

//A VOIR
/** Ouvre la recherche ET affiche tous les rayons de l'univers choisi */ 
function filtrerParUnivers(nomUnivers) {
   

    const champSaisie = document.getElementById("saisieUtilisateur");
    if (champSaisie) champSaisie.value = nomUnivers;

    afficherMetierComplet(nomUnivers);
}

//PARTIEL
/** Allume tous les rayons d'un métier (SANS fermer la popup automatiquement) */
function afficherMetierComplet(metierCible) {
    // Nettoyage de l'affichage précédent
    document.querySelectorAll(".trajetAllume").forEach(el => el.classList.remove("trajetAllume"));
    document.querySelectorAll(".cibleAtteinte").forEach(el => el.classList.remove("cibleAtteinte"));

    const rayonsDuMetier = produitsCultura.filter(p => p.metier === metierCible);
    console.log(`Métier cherché : ${metierCible}`);
    console.log(`Rayons trouvés :`, rayonsDuMetier);

    rayonsDuMetier.forEach(produit => {
        const listeCases = produit.cases.split(",");
        listeCases.forEach(id => {
            const element = document.getElementById(id.trim());
            if (element) {
                element.classList.add("trajetAllume");
                element.classList.add("cibleAtteinte");
            }
        });
    });
}


/** GÉNÉRATION DU PLAN DU MAGASIN */
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


/** ÉTIQUETAGE & INFOBULLE */
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


/** Charge la liste des rayons pour l'autocomplétion */
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
 * Initialise les écouteurs clavier et liste déroulante
 */
function initialiserEcouteurClavier() {
    const input = document.getElementById("saisieUtilisateur");
    if (!input) return;

    // 1. Écoute du clavier classique (Touche Entrée et Échap)
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            lancerRecherche();
        }
        if (e.key === "Escape") {
            fermerPopup();
        }
    });

    // 2. NOUVEAU : Détection du clic dans la liste déroulante (datalist)
    input.addEventListener("input", () => {
        const listId = input.getAttribute("list");
        if (listId) {
            const datalist = document.getElementById(listId);
            if (datalist) {
                // On vérifie si la valeur actuelle de l'input correspond 
                // exactement à l'une des options de la liste
                const optionTrouvee = Array.from(datalist.options).some(
                    option => option.value === input.value
                );
                
                // Si c'est le cas (le client a cliqué sur une suggestion)
                if (optionTrouvee) {
                    lancerRecherche(); // On lance le GPS instantanément
                    input.blur();      // On retire le focus pour cacher le clavier virtuel
                }
            }
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

/**
 * UTILITAIRES (Mobile & Clics manuels)
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. On cible les éléments
    const menuToggle = document.getElementById('menuToggle');
    const sideBar = document.getElementById('sideBarLeft');

    // On vérifie que les éléments existent pour éviter les erreurs
    if (menuToggle && sideBar) {
        
        // 2. Action au clic sur le bouton Burger
        menuToggle.addEventListener('click', (event) => {
            sideBar.classList.toggle('ouvert');
            
            // Empêche le clic de se propager et de déclencher la fermeture immédiate
            event.stopPropagation(); 
        });

        // 3. Action pour refermer le menu si on clique en dehors
        document.addEventListener('click', (event) => {
            // Si le menu est ouvert ET que l'endroit cliqué n'est pas dans la barre latérale
            if (sideBar.classList.contains('ouvert') && !sideBar.contains(event.target)) {
                sideBar.classList.remove('ouvert'); // On le ferme
            }
        });
    }
});

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sideBarLeft");
  if (toggle) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("active"));
  }
}

function initLinkHighlight() {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#sidebarNav a")) {
      document.querySelectorAll("#sidebarNav a").forEach(l => l.classList.remove("active"));
      e.target.classList.add("active");
      
      // Fermer le menu mobile sur clic
      document.getElementById("sideBarMenu").classList.remove("active");
    }
  });
}


/** FONCTIONS DE RÉINITIALISATION & INACTIVITÉ */
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


/** Initialise le Service Worker pour le mode PWA (offline) */
function initialiserPWA() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log("Service Worker enregistré"))
            .catch(err => console.warn("Service Worker non disponible :", err));
    }
}


/** INITIALISATION GLOBALE */
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
