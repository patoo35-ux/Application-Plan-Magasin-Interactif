# 🗺️ Cultura Plan Magasin

Application web progressive (PWA) GPS interactive pour le magasin **Cultura de Saint-Malo**

## 📱 Description

**Cultura Plan Magasin** est une application mobile web qui guide les clients à travers le magasin Cultura de Saint-Malo. Elle permet de rechercher rapidement les rayons, voir leur localisation sur un plan interactif et obtenir le chemin optimal pour y accéder.

### Fonctionnalités principales

- 🎯 **Recherche de rayons** : Trouvez rapidement n'importe quel rayon avec autocomplétion
- 🗺️ **Plan interactif** : Visualisez le magasin et les zones principales
- 🧭 **Navigation guidée** : Suivez le chemin indiqué jusqu'à votre destination
- 🎨 **Filtrage par univers** : Parcourez les catégories (Beaux-Arts, Librairie, Gaming, Musique, Loisirs Créatifs)
- 📍 **Points d'intérêt** : Localisez rapidement l'accueil, les caisses, l'atelier, le parking
- 💾 **Mode hors ligne** : Fonctionne sans connexion internet grâce à la technologie PWA

## 🚀 Démarrage

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Une connexion internet pour la première visite (la PWA se cache ensuite)

### Installation

1. Clonez le repository ou téléchargez les fichiers
2. Ouvrez `index.html` dans votre navigateur
3. L'application se chargera automatiquement

### Accès local

Pour un développement local avec un serveur web :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Puis accédez à http://localhost:8000/index.html
```

## 📂 Structure du projet

```
├── index.html                  # Page principale
├── manifest.json               # Configuration PWA
├── sw.js                       # Service Worker
├── css/
│   └── styles.css             # Feuilles de style
├── js/
│   └── script.js              # Logique métier
├── data/
│   ├── dataProduitsCultura.js # Catalogue produits
│   ├── dataPlanMagasin.js     # Configuration plan
│   ├── dataetiquettagerayon.js # Données rayons
│   └── datatrajets.js         # Trajets pré-calculés
└── img/
    ├── logo_cultura.png       # Logo Cultura
    ├── borneTactile.png       # Borne interactive
    ├── accueilCultura_ia.jpg  # Image accueil
    ├── imgAtelier.png         # Zone atelier
    ├── flecheDirection.png    # Flèche navigation
    └── [autres images]        # Éléments du plan
```

## 🎮 Utilisation

### Rechercher un rayon

1. Cliquez sur le bouton 🔍 (loupe) en haut de la page
2. Tapez le nom du rayon (autocomplétation disponible)
3. Cliquez sur "Trouver le chemin"
4. Suivez la flèche de direction sur le plan

### Filtrer par univers

Cliquez sur les boutons de catégorie dans la colonne gauche :
- 🎨 Beaux-Arts
- 📚 Librairie
- 🎮 Gaming
- 🎸 Musique
- ✂️ Loisirs Créatifs Adultes

### Effacer un trajet

Cliquez sur le bouton "❌ Effacer le trajet" pour réinitialiser l'affichage

## 🛠️ Technologie

- **HTML5** : Structure sémantique avec accessibilité ARIA
- **CSS3** : Design responsive et moderne
- **JavaScript** : Logique d'application interactive
- **PWA (Progressive Web App)** : Mode hors ligne et installation mobile
- **Service Worker** : Mise en cache des ressources

## ♿ Accessibilité

L'application respecte les normes WCAG :
- Labels explicites pour tous les contrôles
- Navigation au clavier complète
- Textes alternatifs pour les images
- Attributs ARIA pour les zones dynamiques
- Contraste suffisant et lisibilité assurée

## 📋 Données

Les données sont stockées dans des fichiers JavaScript :

- **dataProduitsCultura.js** : Catalogue des produits et rayons
- **dataPlanMagasin.js** : Configuration spatiale du plan
- **dataetiquettagerayon.js** : Informations détaillées par rayon
- **datatrajets.js** : Chemins pré-calculés entre zones

## 🔧 Développement

### Modification des données

Éditez les fichiers dans le dossier `/data/` pour :
- Ajouter/modifier des rayons
- Actualiser les positions sur le plan
- Mettre à jour les trajets

### Personnalisation du style

Modifiez `css/styles.css` pour adapter l'apparence

### Amélioration de la logique

Le fichier `js/script.js` contient les fonctions principales :
- `filtrerParUnivers(univers)` : Filtre par catégorie
- `lancerRecherche()` : Recherche un rayon
- `ouvrirPopup()` / `fermerPopup()` : Gestion modal
- `effacerTrajetManuel()` : Réinitialise l'affichage

## 📱 Installation sur mobile

### iOS (Safari)
1. Ouvrez l'application dans Safari
2. Cliquez sur le bouton Partage
3. Sélectionnez "Sur l'écran d'accueil"

### Android (Chrome)
1. Ouvrez l'application dans Chrome
2. Cliquez sur les 3 points (menu)
3. Sélectionnez "Installer l'application"

## 🐛 Signaler un bug

Décrivez le problème rencontré et les étapes pour le reproduire.

## 📄 Licence

Projet développé dans le cadre d'un stage Prepa.Num. - IMTS

## 📞 Contact

Pour toute question ou suggestion sur l'application, contactez l'équipe de développement.

---

**Dernière mise à jour** : 2026
**Version** : 1.0.0
