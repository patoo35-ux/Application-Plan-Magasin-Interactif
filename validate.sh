#!/usr/bin/env bash
# 🧪 SCRIPT DE VALIDATION - Cultura Plan Magasin
# Vérifie que toutes les améliorations sont en place

echo "🔍 Validation de l'application Cultura Plan Magasin"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteurs
PASS=0
FAIL=0

# Fonction de test
test_command() {
    local name="$1"
    local command="$2"
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "${GREEN}✅${NC} $name"
        ((PASS++))
    else
        echo -e "${RED}❌${NC} $name"
        ((FAIL++))
    fi
}

# Fonction de recherche
search_in_file() {
    local pattern="$1"
    local file="$2"
    
    if grep -q "$pattern" "$file" 2>/dev/null; then
        return 0
    else
        return 1
    fi
}

echo "📁 Vérification des fichiers..."
echo ""

# ======== FICHIERS REQUIS ========
test_command "index.html existe" "test -f index.html"
test_command "js/script.js existe" "test -f js/script.js"
test_command "css/styles.css existe" "test -f css/styles.css"
test_command "README.md créé" "test -f README.md"
test_command "IMPROVEMENTS_SUMMARY.md créé" "test -f IMPROVEMENTS_SUMMARY.md"

echo ""
echo "🔧 Vérification JavaScript..."
echo ""

# ======== JAVASCRIPT ========
test_command "Fonction nettoyerTexte()" "grep -q 'function nettoyerTexte' js/script.js"
test_command "Fonction lancerRecherche()" "grep -q 'function lancerRecherche' js/script.js"
test_command "Fonction afficherChemin()" "grep -q 'function afficherChemin' js/script.js"
test_command "Fonction afficherMessage()" "grep -q 'function afficherMessage' js/script.js"
test_command "Fonction genererGrilleMagasin()" "grep -q 'function genererGrilleMagasin' js/script.js"
test_command "Fonction etiqueterRayon()" "grep -q 'function etiqueterRayon' js/script.js"
test_command "Fonction initialiserInfobulle()" "grep -q 'function initialiserInfobulle' js/script.js"
test_command "Fonction chargerListeRayons()" "grep -q 'function chargerListeRayons' js/script.js"
test_command "Try/catch dans init" "grep -q 'try {' js/script.js"
test_command "Pas de console.log() debug" "! grep -q 'console.log(\"1\\. Rayon' js/script.js"

echo ""
echo "🎨 Vérification CSS..."
echo ""

# ======== CSS ========
test_command "Classe .icon-overlay existe" "grep -q '.icon-overlay' css/styles.css"
test_command "Animation battement définie" "grep -q '@keyframes battement' css/styles.css"
test_command "Animation trajetBrillance définie" "grep -q '@keyframes trajetBrillance' css/styles.css"
test_command "Responsive 1024px" "grep -q '@media (max-width: 1024px)' css/styles.css"
test_command "Responsive 768px" "grep -q '@media (max-width: 768px)' css/styles.css"
test_command "Responsive 480px" "grep -q '@media (max-width: 480px)' css/styles.css"
test_command "Focus state sur button" "grep -q 'button:focus' css/styles.css"
test_command "Min-height 44px pour touch" "grep -q 'min-height: 44px' css/styles.css"

echo ""
echo "♿ Vérification Accessibilité..."
echo ""

# ======== ACCESSIBILITÉ ========
test_command "aria-label sur boutonFlottant" "grep -q 'aria-label=\"Ouvrir la recherche' index.html"
test_command "aria-label sur boutonChercher" "grep -q 'aria-label=\"Rechercher le chemin' index.html"
test_command "role=\"dialog\" sur popup" "grep -q 'role=\"dialog\"' index.html"
test_command "role=\"status\" sur messageInfo" "grep -q 'role=\"status\"' index.html"
test_command "aria-live=\"polite\" sur messageInfo" "grep -q 'aria-live=\"polite\"' index.html"
test_command "aria-label sur input saisie" "grep -q 'aria-label=\"Champ de recherche' index.html"
test_command "aria-label sur magasinContainer" "grep -q 'role=\"img\"' index.html"
test_command "Croix fermeture avec tabindex" "grep -q 'tabindex=\"0\"' index.html"
test_command "onkeydown sur croix" "grep -q 'onkeydown=' index.html"

echo ""
echo "📱 Vérification Mobile..."
echo ""

# ======== MOBILE ========
test_command "Font-size 16px sur input mobile" "grep -q 'font-size: 16px' css/styles.css"
test_command "Viewport meta tag" "grep -q 'viewport' index.html"
test_command "Max-width grid mobile" "grep -q 'grid-template-columns: repeat(68, 10px)' css/styles.css"

echo ""
echo "📚 Vérification Documentation..."
echo ""

# ======== DOCUMENTATION ========
test_command "README.md complet" "grep -q '# 🗺️ Cultura Plan Magasin' README.md"
test_command "Architecture expliquée" "grep -q 'JavaScript Modulaire' README.md"
test_command "JSDoc sur fonctions" "grep -q '@param' js/script.js"
test_command "Commentaires explicatifs" "grep -q '//' js/script.js"

echo ""
echo "📊 RÉSUMÉ"
echo "=================================================="
echo -e "${GREEN}✅ Réussis : $PASS${NC}"
echo -e "${RED}❌ Échoués : $FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 TOUS LES TESTS PASSÉS !${NC}"
    exit 0
else
    echo -e "${RED}⚠️  CERTAINS TESTS ONT ÉCHOUÉ${NC}"
    exit 1
fi
