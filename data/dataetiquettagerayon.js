// Fichier : dataetiquetterayon.js

function chargerEtiquettesRayons() {
// BEAUX ARTS
const casesChassis = [
    "z3556", "z3444", "z3332", "z3220", "z3108", "z2996", "z2992", "z2991", "z3104",
    "z3103", "z2656", "z2655", "z2768", "z2768", "z2767", "z2652", "z2651", "z2764", 
    "z2763", "z2876", "z2875", "z2988", "z2987", "z3100", "z3099", "z3324", "z3323",
    "z3436", "z3435"
];
etiqueterRayon(casesChassis, "⚙️ Chassis Coton Lin Synthétique");


const casesCartonsToiles = [
    "z3780", "z3668"
];
etiqueterRayon(casesCartonsToiles, "🎨 Cartons Toiles");


const casesCadresAccessoires = [
    "z3891", "z3890", "z3889"
];
etiqueterRayon(casesCadresAccessoires, "🖼️ Cadres et Accessoires");


const casesChevalets = [
    "z3888", "z3887", "z3886", "z3885", "z3328", "z3327"
];
etiqueterRayon(casesChevalets, "🪑 Chevalets");


const casesGouache = [
    "z3884", "z3883"
];
etiqueterRayon(casesGouache, "🎨 Gouache");


const casesAcrylique = [
    "z3882", "z3881", "z3880", "z3879", "z3878", "z3877", "z3876", "z3875", "z3874", "z3873", "z3872", "z3871", "z3870", "z3869"
];
etiqueterRayon(casesAcrylique, "🎨 Acrylique");


const casesHuile = [
    "z3640", "z3752", "z3865", "z3866", "z3867", "z3868"
];
etiqueterRayon(casesHuile, "🎨 Huile");


const cartonsDessins = [
    "z3543", "z3431", "z3319", "z3207"
];
etiqueterRayon(cartonsDessins, "🎨 Cartons à Dessin et Tubes de Transport");


const casesAccPeinture = [
    "z3095", "z2983"
];
etiqueterRayon(casesAccPeinture, "🎨 Accessoires pour la Peinture");


const casesPinceauxSpaltersCouteauxAPeindre = [
    "z2871", "z2759", "z2647", "z2535"
];
etiqueterRayon(casesPinceauxSpaltersCouteauxAPeindre, "🎨 Pinceaux, Spalters et Couteaux à peindre");


const casesAquarelle = [
    "z2534", "z2646", "z2758", "z2870", "z2982", "z3094", "z3206", "z3318", "z3430", "z3452"
];
etiqueterRayon(casesAquarelle, "🎨 Aquarelle (Godets, tubes, pinceaux, papier)");


const casesPinceaux = [
    "z2871", "z2759", "z2647", "z2535"
];
etiqueterRayon(casesPinceaux, "🎨 Pinceaux, Spalters et Couteaux à peindre");


const casesPeintureAuxNumeros = [
    "z3538", "z3426"
];
etiqueterRayon(casesPeintureAuxNumeros, "🎨 Peinture aux numéros");


const casesCalligraphie = [
    "z3314", "z3202", "z3090", "z2978"
];
etiqueterRayon(casesCalligraphie, "🎨 Calligraphie");


const casesLinogravure = [
    "z2866", "z2754"
];
etiqueterRayon(casesLinogravure, "🎨 Linogravure");


const casesBombesPeinture = [
    "z2642", "z2530"
];
etiqueterRayon(casesBombesPeinture, "🎨 Bombes de Peinture");


const casesFeutres = [
    "z2529", "z2641", "z2753", "z2865", "z2977", "z3089", "z3201", "z3313", "z3425", "z3537", "z3533", "z3421"
];
etiqueterRayon(casesFeutres, "🎨 Feutres");


const casesDessinPastels = [
    "z3309", "z3197", "z3085", "z2873", "z2861", "z2749", "z2525"
];
etiqueterRayon(casesDessinPastels, "🎨 Dessin et Pastels");


const casesFeuilles = [
    "z2520", "z2632", "z2744", "z2856", "z2968", "z3080", "z3192", "z3304"
];
etiqueterRayon(casesFeuilles, "🎨 Feuilles 50x65 et Manipacks");


const casesBlocsPeinture = [
    "z3416", "z3528"
];
etiqueterRayon(casesBlocsPeinture, "🎨 Blocs pour peinture Acrylique et Huile");


const casesPrixReduitsBeauxArts = [
    "z3532", " z3420"
];
etiqueterRayon(casesPrixReduitsBeauxArts, "🎨 Prix réduits Beaux-Arts");


const casesBlocsDessin = [
    "z3308", "z3196", "z3084", "z2972", "z2860", "z2748", "z2636", "z2524"
];
etiqueterRayon(casesBlocsDessin, "🎨 Blocs papiers dessin et esquisse");


// FETES ET EVENEMENTS

const casesCreponSoie = [
    "z1604", "z1492"
];
etiqueterRayon(casesCreponSoie, "🎨 Crépon, soie et suspensions");


const casesBallons = [
    "z1380", "z1268"
];
etiqueterRayon(casesBallons, "🎨 Ballons et accessoires");


const casesEmbellissements = [
    "z1156", "z1044"
];
etiqueterRayon(casesEmbellissements, "🎨 Embellissements");


const casesVannerie = [
    "z0932", "z0820"
];
etiqueterRayon(casesVannerie, "🎨 Vannerie");


const casesDecorationFlorale = [
    "z0708", "z0596", "z0484", "z0372"
];
etiqueterRayon(casesDecorationFlorale, "🎨 Décoration florale");


const casesPatisserie = [
    "z0936", "z0824", "z0712", "z0600", "z0488", "z0376", "z0264", "z0152"
];
etiqueterRayon(casesPatisserie, "🎨 Pâtisserie");


const casesInvitationsEnveloppesEtPapiers = [
    "z0037", "z0036"
];
etiqueterRayon(casesInvitationsEnveloppesEtPapiers, "🎨 Invitations, enveloppes et papiers");


const casesTamponsEncresEmbossage = [
    "z0035", "z0034"
];
etiqueterRayon(casesTamponsEncresEmbossage, "🎨 Tampons, encres et embossage");


const casesImpressionSurGel = [
    "z0033", "z0032"
];
etiqueterRayon(casesImpressionSurGel, "🎨 Impression sur gel");


const casesScrapbooking = [
    "z0031", "z0030", "z0029", "z0028"
];
etiqueterRayon(casesScrapbooking, "🎨 Scrapbooking");


const casesPapiersCreatifs = [
    "z0139", "z0251", "z0363", "z0475"
];
etiqueterRayon(casesPapiersCreatifs, "🎨 Papiers créatifs");


// DECORATION CREATIVE
const casesPinceauxPochoirs = [
    "z0474", "z0362"
];
etiqueterRayon(casesPinceauxPochoirs, "🎨 Pinceaux et pochoirs");


const casesPorcelaine = [
    "z0250", "z0138"
];
etiqueterRayon(casesPorcelaine, "🎨 Peinture porcelaine et supports");


const casesVerre = [
    "z0025", "z0024"
];
etiqueterRayon(casesVerre, "🎨 Peinture verre et supports");


const casesDorure = [
    "z0023", "z0022"
];
etiqueterRayon(casesDorure, "🎨 Dorure");


const casesPeintureMultisupports = [
    "z0021", "z0020", "z0019", "z0018"
];
etiqueterRayon(casesPeintureMultisupports, "🎨 Peinture multi-supports");


const casesSupports = [
    "z0129", "z0241", "z0353", "z0465", "z0577", "z0689", "z0801", "z0913", "z1025", "z1137", "z1249", "z1361"
];
etiqueterRayon(casesSupports, "🎨 Supports bois, médium et papier mâché");


const casesMoulage = [
    "z1365", "z1253", "z1141", "z1029"
];
etiqueterRayon(casesMoulage, "🎨 Moulage, plâtre et jesmonite");


const casesBougies = [
    "z0917", "z0805"
];
etiqueterRayon(casesBougies, "🎨 Bougies");


const casesSavons = [
    "z0693", "z0581"
];
etiqueterRayon(casesSavons, "🎨 Savons");


const casesKitsCyanotypes = [
    "z0469", "z0357"
];
etiqueterRayon(casesKitsCyanotypes, "🎨 Kits cyanotypes");


const casesModelageArgileFimo = [
    "z1366", "z1254", "z1142", "z1030", "z0918"
];
etiqueterRayon(casesModelageArgileFimo, "🎨 Modelage, argile et Fimo");


const casesResine = [
    "z0806", "z0694"
];
etiqueterRayon(casesResine, "🎨 Résine");


const casesMosaique = [
    "z0582", "z0470", "z0358"
];
etiqueterRayon(casesMosaique, "🎨 Mosaïque");


const casesSupportsPlastiquePolystyrene = [
    "z1595", "z1483"
];
etiqueterRayon(casesSupportsPlastiquePolystyrene, "🎨 Supports plastique et polystyrène");


const casesRangementOutilsEtAccessoires = [
    "z1371", "z1259"
];
etiqueterRayon(casesRangementOutilsEtAccessoires, "🎨 Rangement, outils et accessoires");


const casesLumiere = [
    "z1035", "z1147"
];
etiqueterRayon(casesLumiere, "🎨 Lumière");


const casesCricut = [
    "z1601", "z1489", "z1377", "z1265", "z1153", "z1041"
];
etiqueterRayon(casesCricut, "🎨 Cricut");


const casesColles = [
    "z0929", "z0817"
];
etiqueterRayon(casesColles, "🎨 Colles et adhésifs");


const casesCouperTracerPercer = [
    "z0705", "z0593", "z0481"
];
etiqueterRayon(casesCouperTracerPercer, "🎨 Couper, tracer et percer");


const casesPerlesDiamants = [
    "z1594", "z1482", "z1370", "z1258", "z1146", "z1034"
];
etiqueterRayon(casesPerlesDiamants, "🎨 Perles et diamants");


// MERCERIE CREATIVE 

const casesBroderie = [
    "z1406", "z1294", "z1182", "z1070", "z0958", "z0846", "z0619", "z0731", "z0843", "z0955", "z1067", "z1179", "z1291", "z1403"
];
etiqueterRayon(casesBroderie, "🎨 Broderie");


const casesCouture = [
    "z1407", "z1295", "z1183", "z1071", "z0513", "z0512"
];
etiqueterRayon(casesCouture, "🎨 Couture");


const casesCustomisation = [
    "z0599", "z0847", "z0511", "z0510", "z0509", "z0508"
];
etiqueterRayon(casesCustomisation, "🎨 Customisation");


const casesBijouteriePerlerie = [
    "z1410", "z1298", "z1410", "z1298", "z1186", "z1074", "z0962", "z0850", "z0738", "z0626"
];
etiqueterRayon(casesBijouteriePerlerie, "🎨 Bijouterie et perlerie");


// GAMING (Note : les acronymes PC, PS4, PS5, XBOX, BD restent en majuscules car c'est justifié)

const casesCartesAJouer = [
    "z6423", "z6535", "z6647", "z6759", "z6871", "z6983", "z7095", "z7207"
];
etiqueterRayon(casesCartesAJouer, "🎨 Cartes à jouer");


const casesPc = [
    "z6651", "z6763", "z6875", "z6987", "z7099", "z7211"
];
etiqueterRayon(casesPc, "🎨 PC");


const casesPs4 = [
    "z7323", "z7435"
];
etiqueterRayon(casesPs4, "🎨 PS4");


const casesPs5 = [
    "z7546", "z7545", "z7544", "z7543"
];
etiqueterRayon(casesPs5, "🎨 PS5");


const casesSwitch = [
    "z6416", "z6528", "z6640", "z6752", "z6864", "z6976", "z7088", "z7200"
];
etiqueterRayon(casesSwitch, "🎨 Switch");


const casesXbox = [
    "z6427", "z6539"
];
etiqueterRayon(casesXbox, "🎨 Xbox");


const casesCulturePop = [
    "z6415", "z6414", "z6413", "z6412", "z6411", "z6410", "z6409", "z6408"
];
etiqueterRayon(casesCulturePop, "🎨 Culture Pop");


const casesAffichesPosters = [
    "z6076", "z6188"
];
etiqueterRayon(casesAffichesPosters, "🎨 Affiches et posters");


const casesNouveautesGaming = [
    "z6079", "z6191"
];
etiqueterRayon(casesNouveautesGaming, "🎨 Nouveautés Gaming");


const casesCartesAbonnement = [
    "z1533", "z1645"
];
etiqueterRayon(casesCartesAbonnement, "🎨 Cartes d'abonnement");


// INSTRUMENT DE MUSIQUE

const casesGuitaresAccessoiresEtMediators = [
    "z5275", "z5274"
];
etiqueterRayon(casesGuitaresAccessoiresEtMediators, "🎨 Guitares, accessoires et médiators");


const casesCordesDeGuitare = [
    "z5273", "z5272"
];
etiqueterRayon(casesCordesDeGuitare, "🎨 Cordes de guitare");


const casesCablesEtJacks = [
    "z5271", "z5270"
];
etiqueterRayon(casesCablesEtJacks, "🎨 Câbles et jacks");


const casesBatteriesAccessoires = [
    "z5269", "z5268"
];
etiqueterRayon(casesBatteriesAccessoires, "🎨 Batteries et accessoires");


const casesClaviersElectriques = [
    "z5378", "z5490"
];
etiqueterRayon(casesClaviersElectriques, "🎨 Claviers électriques");


const casesPianosEtAccessoires = [
    "z5603", "z5715", "z5827"
];
etiqueterRayon(casesPianosEtAccessoires, "🎨 Pianos et accessoires");


const casesInstrumentsTraditionnels = [
    "z5940", "z6052", "z5722", "z5721"
];
etiqueterRayon(casesInstrumentsTraditionnels, "🎨 Instruments traditionnels");


const casesGuitares = [
    "z6165", "z6277", "z6389", "z6501", "z6613", "z6725"
];
etiqueterRayon(casesGuitares, "🎨 Guitares");


const casesHarmonicas = [
    "z5610", "z5609"
];
etiqueterRayon(casesHarmonicas, "🎨 Harmonicas");


const casesPartitionsEtMethodes = [
    "z5608", "z5607"
];
etiqueterRayon(casesPartitionsEtMethodes, "🎨 Partitions et méthodes");


const casesEveilMusical = [
    "z5720", "z5719"
];
etiqueterRayon(casesEveilMusical, "🎨 Éveil musical");


// LIVRES

const casesCultureEtSocieteActualites = [
    "z6466", "z6465", "z6578", "z6577", "z6690", "z6689", "z6802", "z6801"
];
etiqueterRayon(casesCultureEtSocieteActualites, "🎨 Culture et société - Actualités");


const casesCultureScientifique = [
    "z6470", "z6582"
];
etiqueterRayon(casesCultureScientifique, "🎨 Culture scientifique");


const casesPhilosophieSociologie = [
    "z6694", "z6806"
];
etiqueterRayon(casesPhilosophieSociologie, "🎨 Philosophie et sociologie");


const casesHistoire = [
    "z6918, z7030, z7142, z7254, z7366, z7418"
];
etiqueterRayon(casesHistoire, "🎨 Histoire");


const casesArtsEtSpectacles = [
    "z7589", "z7588", "z7587", "z7586", "z7585", "z7584", "z6913", "z7025", "z7137", "z7249"
];
etiqueterRayon(casesArtsEtSpectacles, "🎨 Arts et spectacles");


const casesPolitique = [
    "z7583", "z7582"
];
etiqueterRayon(casesPolitique, "🎨 Politique");


const casesActualitesInternationales = [
    "z7133", "z7245", "z7357", "z7469"
];
etiqueterRayon(casesActualitesInternationales, "🎨 Actualités internationales");


const casesReligion = [
    "z6914", "z7026", "z7138", "z7250"
];
etiqueterRayon(casesReligion, "🎨 Religion");


const casesBdJeunesse = [
    "z6661", "z6660", "z6773", "z6772", "z6885", "z6884", "z6997", "z6996", "z7109", "z7108", "z7221", "z7220"
];
etiqueterRayon(casesBdJeunesse, "🎨 BD Jeunesse");


const casesBandeDessinee = [
    "z7550", "z7549", "z7436", "z7324", "z7215", "z7100", "z3988", "z6876", "z6764", "z6652"
];
etiqueterRayon(casesBandeDessinee, "🎨 Bande Dessinée");


const casesManga = [
    "z6450", "z6562", "z6674", "z6786", "z6898", "z7010", "z7122", "z7234", "z7346", "z7458", "z7562", "z7563", "z7565", "z7566", "z7567", "z7568", "z7569"
];
etiqueterRayon(casesManga, "🎨 Manga");


const casesMangaDOccasion = [
    "z7119", "z7118", "z7231", "z7230"
];
etiqueterRayon(casesMangaDOccasion, "🎨 Manga d'occasion");


const casesCultureGeek = [
    "z7561"
];
etiqueterRayon(casesCultureGeek, "🎨 Culture Geek");


const casesComics = [
    "z7560", "z7559", "z7558", "z7557"
];
etiqueterRayon(casesComics, "🎨 Comics");


const casesBdHumour = [
    "z7556", "z7555"
];
etiqueterRayon(casesBdHumour, "🎨 BD Humour");


const casesRomanGraphique = [
    "z7554", "z7553", "z7552", "z7551"
];
etiqueterRayon(casesRomanGraphique, "🎨 Roman Graphique");


const casesActualitesManga = [
    "z6447", "z6446", "z6559", "z6558", "z6671", "z6670", "z6783", "z6782", "z6895", "z6894", "z7007", "z7006"
];
etiqueterRayon(casesActualitesManga, "🎨 Actualités Manga");


const casesActualitesBdJeunesse = [
    "z6442", "z6441", "z6554", "z6553", "z6666", "z6665", "z6778", "z6777", "z6890", "z6889", "z7002", "z7001"
];
etiqueterRayon(casesActualitesBdJeunesse, "🎨 Actualités BD Jeunesse");


const casesActualitesBd = [
    "z6428", "z6540", "z6431", "z6432", "z6544", "z6543", "z6656", "z6555", "z6768", "z6767", "z6880",
    "z6879", "z6992", "z6991", "z7104", "z7103", "z7216", "z7215"
];
etiqueterRayon(casesActualitesBd, "🎨 Actualités BD");


const casesOraclesEtTarots = [
    "z5092", "z4980", "z4868", "z4756"
];
etiqueterRayon(casesOraclesEtTarots, "🎨 Oracles et tarots");


const casesEsoterisme = [
    "z4644", "z4532", "z4420", "z4308"
];
etiqueterRayon(casesEsoterisme, "🎨 Ésotérisme");


const casesEncens = [
    "z4196", "z4094"
];
etiqueterRayon(casesEncens, "🎨 Encens");


const casesMeditation = [
    "z3974", "z3973"
];
etiqueterRayon(casesMeditation, "🎨 Méditation");


const casesSpiritualite = [
    "z3975", "z3976"
];
etiqueterRayon(casesSpiritualite, "🎨 Spiritualité");


const casesBienEtre = [
    "z3977", "z3978"
];
etiqueterRayon(casesBienEtre, "🎨 Bien-être");


const casesYogaSophrologie = [
    "z3979", "z3980"
];
etiqueterRayon(casesYogaSophrologie, "🎨 Yoga et sophrologie");


const casesPsychologie = [
    "z3981", "z3982"
];
etiqueterRayon(casesPsychologie, "🎨 Psychologie");


const casesDeveloppementPersonnel = [
    "z4095", "z4207", "z4319", "z4431"
];
etiqueterRayon(casesDeveloppementPersonnel, "🎨 Développement personnel");


const casesFengShui = [
    "z4543", "z4655"
];
etiqueterRayon(casesFengShui, "🎨 Feng Shui");


const casesAromatherapie = [
    "z4767", "z4879"
];
etiqueterRayon(casesAromatherapie, "🎨 Aromathérapie");


const casesMedecinesDouces = [
    "z4991", "z5103"
];
etiqueterRayon(casesMedecinesDouces, "🎨 Médecines douces");


const casesSante = [
    "z5215", "z5327"
];
etiqueterRayon(casesSante, "🎨 Santé");


const casesLivresGommettes = [
    "z5091", "z4979"
];
etiqueterRayon(casesLivresGommettes, "🎨 Livres gommettes");


const casesActivitesEtJeux = [
    "z4867", "z4755", "z4643", "z4531"
];
etiqueterRayon(casesActivitesEtJeux, "🎨 Activités et jeux");


const casesHerosDisney = [
    "z4419", "z4307"
];
etiqueterRayon(casesHerosDisney, "🎨 Héros Disney");


const casesHerosDeNosEnfants = [
    "z4195", "z4083"
];
etiqueterRayon(casesHerosDeNosEnfants, "🎨 Héros de nos enfants");


const casesContesLivresCd = [
    "z3970", "z3969"
];
etiqueterRayon(casesContesLivresCd, "🎨 Contes, livres et CD");


const casesHistoiresALire = [
    "z3968", "z3967", "z3966", "z3965", "z3964", "z3963"
];
etiqueterRayon(casesHistoiresALire, "🎨 Histoires à lire");


const casesLivresMatieresEtSonores = [
    "z3961", "z3962"
];
etiqueterRayon(casesLivresMatieresEtSonores, "🎨 Livres matières et sonores");


const casesPremiersLivres = [
    "z3959", "z3960"
];
etiqueterRayon(casesPremiersLivres, "🎨 Premiers livres");


const casesPremieresHistoires = [
    "z4070", "z4182"
];
etiqueterRayon(casesPremieresHistoires, "🎨 Premières histoires");


const casesLivresBebes = [
    "z4294", "z4406"
];
etiqueterRayon(casesLivresBebes, "🎨 Livres bébés");


const casesPremiersApprentissages = [
    "z4405", "z4293"
];
etiqueterRayon(casesPremiersApprentissages, "🎨 Premiers apprentissages");


const casesPremiersDocumentaires = [
    "z4181", "z4069"
];
etiqueterRayon(casesPremiersDocumentaires, "🎨 Premiers documentaires");


const casesDocumentaires = [
    "z3956", "z3655", "z3654", "z3653", "z3952"
];
etiqueterRayon(casesDocumentaires, "🎨 Documentaires");


const casesNouveautesLivreJeunesse = [
    "z4415", "z4414", "z4527", "z4526", "z4639", "z4638", "z4751", "z4750", "z4863", "z4862", "z4975", "z4974", "z4411", "z4410", "z4523", "z4522", "z4635", "z4634", "z4747", "z4746", "z4859", "z4858", "z4971", "z4970", "z5311", "z5310", "z5123", "z5422", "z5307", "z5306", "z5419", "z5418"
];
etiqueterRayon(casesNouveautesLivreJeunesse, "🎨 Nouveautés livre Jeunesse");


const casesLecturePreAdos = [
    "z3651", "z3650", "z3649", "z3948"
];
etiqueterRayon(casesLecturePreAdos, "🎨 Lecture pré-ados");


const casesLectureAdos = [
    "z4059", "z4171", "z4283", "z4383", "z4395", "z4395", "z4507", "z4619", "z4731"
];
etiqueterRayon(casesLectureAdos, "🎨 Lecture ados");


const casesLectureJeunesAdultes = [
    "z5057", "z5179", "z5291", "z5403", "z5515", "z5627", "z5739", "z5738"
];
etiqueterRayon(casesLectureJeunesAdultes, "🎨 Lecture jeunes adultes");


const casesHarryPotter = [
    "z4736", "z4735", "z4734", "z4843", "z4955"
];
etiqueterRayon(casesHarryPotter, "🎨 Harry Potter");


const casesNouveautesLivreAdos = [
    "z5074", "z5073", "z5072", "z5071", "z5186", "z8185", "z5184", "z5183", "z5524", "z5523", "z5522", "z5521", "z5520", "z5519", "z5636", "z5635", "z5634", "z5633", "z5632", "z5631"
];
etiqueterRayon(casesNouveautesLivreAdos, "🎨 Nouveautés livre ados");


const casesLiseuse = [
    "z6146", "z6147", "z6259", "z6372", "z6484"
];
etiqueterRayon(casesLiseuse, "🎨 Liseuses");


const casesLitteratureEtrangereActualites = [
    "z4476", "z4475", "z4588", "z4587", "z4700", "z4699", "z4812", "z4811", "z4924", "z4923", "z5036", "z5035"
];
etiqueterRayon(casesLitteratureEtrangereActualites, "🎨 Littérature étrangère - Actualités");


const litteratureFrancaiseActualites = [
    "z3912", "z3911", "z3910", "z3909", "z4024", "z4023", "z4022", "z4021", "z4471", "z4470", "z4583", "z4582", "z4695", "z4694", "z4807",
    "z4806", "z4919", "z4918", "z5031", "z5030"
];
etiqueterRayon(litteratureFrancaiseActualites, "🎨 Littérature française - Actualités");


const casesRoman = [
    "z6384", "z6272", "z6160", "z6048", "z5936", "z5824", "z5712", "z5600", "z5488", "z5376", "z5264", "z5152", "z5040", "z4928", "z4816",
    "z4704", "z4592", "z4480", "z4367", "z4255", "z4142", "z4030", "z3805", "z3692", "z3580", "z3467", "z3355", "z3242", "z3130"
];
etiqueterRayon(casesRoman, "🎨 Romans");


const casesRomanHistorique = [
    "z3464", "z3463", "z3462", "z3461", "z3576", "z3575", "z3574", "z3573"
];
etiqueterRayon(casesRomanHistorique, "🎨 Roman historique");


const casesVersionOriginale = [
    "z6597", "z6709"
];
etiqueterRayon(casesVersionOriginale, "🎨 Version originale");


const casesRomance = [
    "z6940", "z6939"
];
etiqueterRayon(casesRomance, "🎨 Romance");


const casesRomanceAdulte = [
    "z6938", "z6937", "z6936", "z6935"
];
etiqueterRayon(casesRomanceAdulte, "🎨 Romance adulte");


const casesLectureScolaire = [
    "z6942", "z6941"
];
etiqueterRayon(casesLectureScolaire, "🎨 Lecture scolaire");


const casesPoesieEtTheatre = [
    "z6944", "z6943"
];
etiqueterRayon(casesPoesieEtTheatre, "🎨 Poésie et théâtre");


const casesRomanceActualites = [
    "z5820", "z5819", "z5818", "z5817", "z5932", "z5931", "z5930", "z5929", "z6268", "z6267", "z6266", "z6265",
    "z6380", "z6379", "z6378", "z6377"
];
etiqueterRayon(casesRomanceActualites, "🎨 Romance - Actualités");


const casesTransport = [
    "z5464", "z5463", "z5462", "z5461"
];
etiqueterRayon(casesTransport, "🎨 Transports");


const casesSport = [
    "z5576", "z5575", "z5574", "z5573"
];
etiqueterRayon(casesSport, "🎨 Sport");


const casesActualites = [
    "z4796", "z4795", "z4908", "z4907", "z5018", "z5017", "z5130", "z5129"
];
etiqueterRayon(casesActualites, "🎨 Actualités");


const casesJeux = [
    "z4460", "z4459"
];
etiqueterRayon(casesJeux, "🎨 Jeux");


const casesLoisirsCreatifs = [
    "z4458", "z4457"
];
etiqueterRayon(casesLoisirsCreatifs, "🎨 Loisirs créatifs");


const casesColoriageAdulte = [
    "z4456", "z4455", "z4454", "z4453", "z4564", "z4676", "z4788", "z4900"
];
etiqueterRayon(casesColoriageAdulte, "🎨 Coloriage adulte");


const casesVoyageBeauxLivres = [
    "z4899", "z4787"
];
etiqueterRayon(casesVoyageBeauxLivres, "🎨 Voyage et beaux livres");


const casesGuidesDuMonde = [
    "z4675", "z4563"
];
etiqueterRayon(casesGuidesDuMonde, "🎨 Guides du Monde");


const casesCartesDuMonde = [
    "z4227", "z4115"
];
etiqueterRayon(casesCartesDuMonde, "🎨 Cartes du Monde");


const casesGuidesDeFrance = [
    "z4002", "z4001"
];
etiqueterRayon(casesGuidesDeFrance, "🎨 Guides de France");


const casesMaVilleMaRegion = [
    "z4000", "z3999", "z3998", "z3997"
];
etiqueterRayon(casesMaVilleMaRegion, "🎨 Ma ville, ma région");


const casesMer = [
    "z3996", "z3995"
];
etiqueterRayon(casesMer, "🎨 Mer");


const casesAnimaux = [
    "z4106", "z4218"
];
etiqueterRayon(casesAnimaux, "🎨 Animaux");


const casesJardin = [
    "z4330", "z4442", "z4554", "z4666"
];
etiqueterRayon(casesJardin, "🎨 Jardin");


const casesDeveloppementDurable = [
    "z4554", "z4666"
];
etiqueterRayon(casesDeveloppementDurable, "🎨 Développement durable");


const casesActualitesPassions = [
    "z4447", "z4446", "z4559", "z4558", "z4671", "z4670", "z4783", "z4782"
];
etiqueterRayon(casesActualitesPassions, "🎨 Actualités Passions");


const casesActualitesVoyage = [
    "z5456", "z5455", "z5454", "z5453", "z5568", "z5567", "z5566", "z5565"
];
etiqueterRayon(casesActualitesVoyage, "🎨 Actualités Voyage");


const casesVieDeFamille = [
    "z3992", "z3991", "z3990", "z3989"
];
etiqueterRayon(casesVieDeFamille, "🎨 Vie de famille");


const casesMaternite = [
    "z4217", "z4105"
];
etiqueterRayon(casesMaternite, "🎨 Maternité");


const casesVieDeCouple = [
    "z4441", "z4329"
];
etiqueterRayon(casesVieDeCouple, "🎨 Vie de couple");


const casesMaison = [
    "z4665", "z4553"
];
etiqueterRayon(casesMaison, "🎨 Maison");


const casesCuisineEtAlimentation = [
    "z3988", "z3987", "z3986", "z3985", "z4096", "z4208", "z4320", "z4432", "z4544", "z4656", "z4768", "z4880", "z4992", "z5104", "z5216", "z5328"
];
etiqueterRayon(casesCuisineEtAlimentation, "🎨 Cuisine et alimentation");


const casesActualitesMaisonEtFamille = [
    "z4437", "z4436", "z4549", "z4548", "z4661", "z4660", "z4773", "z4772", "z4885", "z4884", "z4997", "z4996"
];
etiqueterRayon(casesActualitesMaisonEtFamille, "🎨 Actualités Maison et Famille");


const casesActualitesCuisine = [
    "z5448", "z5447", "z5447", "z5445", "z5560", "z5559", "z5558", "z5557"
];
etiqueterRayon(casesActualitesCuisine, "🎨 Actualités Cuisine");


const casesScolaireEtFormationActualites = [
    "z6680", "z6679", "z6792", "z6791", "z6904", "z6903", "z7016", "z7015"
];
etiqueterRayon(casesScolaireEtFormationActualites, "🎨 Scolaire et formation - Actualités");


const casesInformatique = [
    "z7127", "z7239"
];
etiqueterRayon(casesInformatique, "🎨 Informatique");


const casesLycee = [
    "z7459", "z7347"
];
etiqueterRayon(casesLycee, "🎨 Lycée");


const casesCollege = [
    "z7235", "z7123"
];
etiqueterRayon(casesCollege, "🎨 Collège");


const casesPrimaire = [
    "z7011", "z6899"
];
etiqueterRayon(casesPrimaire, "🎨 Primaire");


const casesMaternelle = [
    "z6787", "z6675"
];
etiqueterRayon(casesMaternelle, "🎨 Maternelle");


const casesApprentissageLudique = [
    "z6563", "z6451"
];
etiqueterRayon(casesApprentissageLudique, "🎨 Apprentissage ludique");


const casesConcoursCertification = [
    "z7572", "z7573", "z7574", "z7575", "z7576", "z7577"
];
etiqueterRayon(casesConcoursCertification, "🎨 Concours et certifications");


const casesEconomieGestionDroit = [
    "z7578", "z7579"
];
etiqueterRayon(casesEconomieGestionDroit, "🎨 Économie, gestion et droit");


const casesMondeDeLEntreprise = [
    "z7356", "z7468"
];
etiqueterRayon(casesMondeDeLEntreprise, "🎨 Monde de l'entreprise");


const casesDictionnairesMethodes = [
    "z7132", "z7244", "z7128", "z7240"
];
etiqueterRayon(casesDictionnairesMethodes, "🎨 Dictionnaires et méthodes");


const casesPolicier = [
    "z7595", "z7594", "z7593", "z7592", "z6471", "z6583", "z6695", "z6807", "z6919", "z7031", "z7143", "z7255", "z7367", "z7479"
];
etiqueterRayon(casesPolicier, "🎨 Policier");


const casesPolicierBreton = [
    "z7603", "z7602"
];
etiqueterRayon(casesPolicierBreton, "🎨 Policier breton");


const casesCosy = [
    "z7605", "z7604"
];
etiqueterRayon(casesCosy, "🎨 Cosy");


const casesSciencesFictions = [
    "z7158", "z7270", "z7382", "z7494"
];
etiqueterRayon(casesSciencesFictions, "🎨 Science-Fiction");


const casesFantasy = [
    "z6258", "z6370", "z6483", "z6595", "z6708", "z6820", "z6933", "z7045"
];
etiqueterRayon(casesFantasy, "🎨 Fantasy");


const casesPolicierActualites = [
    "z6475", "z6474", "z6587", "z6586", "z6699", "z6698", "z6811", "z6810", "z6923", "z6922", "z7035", "z7034", "z7147", "z7146", "z7259", "z7258"
];
etiqueterRayon(casesPolicierActualites, "🎨 Policier - Actualités");


const casesImaginaireActualites = [
    "z6704", "z6703", "z6816", "z6815", "z6929", "z6928", "z7041", "z7040", "z7154", "z7153", "z7266", "z7265"
];
etiqueterRayon(casesImaginaireActualites, "🎨 Imaginaire - Actualités");


// LOISIRS NUMÉRIQUES

const casesCasquesAudios = [
    "z6511", "z6623"
];
etiqueterRayon(casesCasquesAudios, "🎨 Casques audio");


const casesCreationNumerique = [
    "z6396", "z6508"
];
etiqueterRayon(casesCreationNumerique, "🎨 Création numérique");


const casesEnceintes = [
    "z6734", "z6846"
];
etiqueterRayon(casesEnceintes, "🎨 Enceintes");


const casesPlatines = [
    "z6957", "z7069"
];
etiqueterRayon(casesPlatines, "🎨 Platines");


const casesKaraokeMicros = [
    "z6619", "z6731"
];
etiqueterRayon(casesKaraokeMicros, "🎨 Karaoké et micros");


const casesPiles = [
    "z973", "z1085", "z1197"
];
etiqueterRayon(casesPiles, "🎨 Piles");


const casesChargeursCables = [
    "z1309", "z1421"
];
etiqueterRayon(casesChargeursCables, "🎨 Chargeurs et câbles");


// VIDÉO

const casesSeriesTv = [
    "z4615", "z4614", "z4613", "z4612"
];
etiqueterRayon(casesSeriesTv, "🎨 Séries TV");


const casesDessinsAnimes = [
    "z3718", "z3717", "z3716", "z3715"
];
etiqueterRayon(casesDessinsAnimes, "🎨 Dessins animés");


const casesFigurinesEtGadgets = [
    "z3719", "z3720", "z3721", "z4055", "z4054", "z4053", "z4052", "z4167", "z4166", "z4165", "z4164"
];
etiqueterRayon(casesFigurinesEtGadgets, "🎨 Figurines et gadgets");


const casesGrandsClassiques = [
    "z4503", "z4502", "z4501", "z4500"
];
etiqueterRayon(casesGrandsClassiques, "🎨 Grands classiques");


const casesOffresVideosPromos = [
    "z5063", "z5062", "z5174", "z5174", "z5257", "z5286", "z5399", "z5368", "z5511", "z5510", "z5623", "z5622"
];
etiqueterRayon(casesOffresVideosPromos, "🎨 Offres vidéos et promos");


// PAPETERIE

const casesPapeterieNouveautesEtPromos = [
    "z3034", "z3033", "z3146", "z3145", "z3030", "z3029", "z3142", "z3141"
];
etiqueterRayon(casesPapeterieNouveautesEtPromos, "🎨 Papeterie - Promos et Nouveautés");


const casesStylosUnitaires = [
    "z1799", "z1800", "z1801", "z1802", "z2133", "z2134", "z2135", "z2136", "z2137", "z2138", "z2245", "z2246", "z2247", "z2248", "z2249", "z2250", "z2581", "z2582", "z2583", "z2584", "z2585", "z2586", "z2693", "z2694", "z2695", "z2696", "z2697", "z2698"
];
etiqueterRayon(casesStylosUnitaires, "🎨 Stylos unitaires");


const casesStylosPlumesEtRollers = [
    "z1797", "z1798"
];
etiqueterRayon(casesStylosPlumesEtRollers, "🎨 Stylos plumes et rollers");


const casesColleAgrafeusePunaises = [
    "z1687", "z1688", "z1689", "z1690"
];
etiqueterRayon(casesColleAgrafeusePunaises, "🎨 Colle, agrafeuse et punaises");


const casesRechargeCorrection = [
    "z1686", "z1685"
];
etiqueterRayon(casesRechargeCorrection, "🎨 Recharges et correction");


const casesCiseauxCutters = [
    "z1241", "z1242"
];
etiqueterRayon(casesCiseauxCutters, "🎨 Ciseaux et cutters");


const casesReglesEquerresCompas = [
    "z1237", "z1238", "z1239", "z1240"
];
etiqueterRayon(casesReglesEquerresCompas, "🎨 Règles, équerres et compas");


const casesNotesPostIt = [
    "z0564", "z0676"
];
etiqueterRayon(casesNotesPostIt, "🎨 Notes et Post-it");


const casesSacsOrdinateurs = [
    "z0340", "z0452"
];
etiqueterRayon(casesSacsOrdinateurs, "🎨 Sacs ordinateurs");


const casesArdoisesTabliers = [
    "z0677", "z0565"
];
etiqueterRayon(casesArdoisesTabliers, "🎨 Ardoises et tabliers");


const casesCalculatrices = [
    "z0341", "z0453"
];
etiqueterRayon(casesCalculatrices, "🎨 Calculatrices");


const casesCahiersGestion = [
    "z0456", "z0344"
];
etiqueterRayon(casesCahiersGestion, "🎨 Cahiers de gestion");


const casesEnveloppesColis = [
    "z0680", "z0568"
];
etiqueterRayon(casesEnveloppesColis, "🎨 Enveloppes et colis");


const casesCarnetsTendance = [
    "z0345", "z0457", "z0569", "z0681"
];
etiqueterRayon(casesCarnetsTendance, "🎨 Carnets tendance");


const casesAgendasEtOrganiseurs = [
    "z0349", "z0348", "z0461", "z0460", "z0573", "z0572", "z0685", "z0684"
];
etiqueterRayon(casesAgendasEtOrganiseurs, "🎨 Agendas et organiseurs");


const casesAlbumsPhotosEtLivreDOr = [
    "z1248", "z1360"
];
etiqueterRayon(casesAlbumsPhotosEtLivreDOr, "🎨 Albums photos et Livre d'or");


const casesCarnets = [
    "z0800", "z0912", "z1024", "z1136"
];
etiqueterRayon(casesCarnets, "🎨 Carnets");


const casesBulletJournal = [
    "z0352", "z0464", "z0576", "z0688"
];
etiqueterRayon(casesBulletJournal, "🎨 Bullet journal");


const casesPapeterieDesign = [
    "z0012", "z0013", "z0014", "z0015", "z0128", "z0240"
];
etiqueterRayon(casesPapeterieDesign, "🎨 Papeterie design");


const casesEquipementDeBureau = [
    "z0004", "z0005", "z0006", "z0007", "z0008", "z0009", "z0010", "z0011"
];
etiqueterRayon(casesEquipementDeBureau, "🎨 Équipement de bureau");


const casesStockageEtAccessoires = [
    "z0002", "z0003"
];
etiqueterRayon(casesStockageEtAccessoires, "🎨 Stockage et accessoires");


const casesCartouchesImprimantes = [
    "z0225", "z0111"
];
etiqueterRayon(casesCartouchesImprimantes, "🎨 Cartouches d'imprimantes");


const casesPeintureEtPinceauxScolaires = [
    "z1010", "z0898"
];
etiqueterRayon(casesPeintureEtPinceauxScolaires, "🎨 Peinture et pinceaux scolaires");


const casesPochettesADessin = [
    "z1234", "z1122"
];
etiqueterRayon(casesPochettesADessin, "🎨 Pochettes à dessin");


const casesBeauxStylos = [
    "z1570", "z1458"
];
etiqueterRayon(casesBeauxStylos, "🎨 Beaux stylos");


const casesFeutresEtCrayonsDeCouleurs = [
    "z1794", "z1682", "z1354", "z1353", "z1352", "z1351", "z1350", "z1349"
];
etiqueterRayon(casesFeutresEtCrayonsDeCouleurs, "🎨 Feutres et crayons de couleurs");


const casesChemisesSousChemises = [
    "z2018", "z1906"
];
etiqueterRayon(casesChemisesSousChemises, "🎨 Chemises et sous-chemises");


const casesPorteVues = [
    "z2242", "z2130"
];
etiqueterRayon(casesPorteVues, "🎨 Porte-vues");


const casesBoitesDeClassement = [
    "z2466", "z2354"
];
etiqueterRayon(casesBoitesDeClassement, "🎨 Boîtes de classement");


const casesClasseurs = [
    "z2914", "z2802", "z2690", "z2578"
];
etiqueterRayon(casesClasseurs, "🎨 Classeurs");


const casesTrieursIntercalaires = [
    "z3362", "z3250"
];
etiqueterRayon(casesTrieursIntercalaires, "🎨 Trieurs et intercalaires");


const casesFeuillesCopies = [
    "z3138", "z3026"
];
etiqueterRayon(casesFeuillesCopies, "🎨 Feuilles et copies");


const casesBlocsCahiersBureau = [
    "z3475", "z3476"
];
etiqueterRayon(casesBlocsCahiersBureau, "🎨 Blocs et cahiers de bureau");


const casesFichesRepertoires = [
    "z3477", "z3478"
];
etiqueterRayon(casesFichesRepertoires, "🎨 Fiches et répertoires");


const casesCahiersSpecifiques = [
    "z3480", "z3479"
];
etiqueterRayon(casesCahiersSpecifiques, "🎨 Cahiers spécifiques");


const casesCahiersScolaires = [
    "z3481", "z3482", "z3483", "z3484"
];
etiqueterRayon(casesCahiersScolaires, "🎨 Cahiers scolaires");


// MUSIQUE

const casesCompilations = [
    "z4481", "z4593"
];
etiqueterRayon(casesCompilations, "🎨 Compilations");


const casesVarietesFrancaises = [
    "z4705", "z4817", "z4929", "z5041"
];
etiqueterRayon(casesVarietesFrancaises, "🎨 Variétés françaises");


const casesVarietesInternationales = [
    "z5163", "z5162", "z5161", "z5160", "z5159", "z5158", "z5157", "z5156", "z5155", "z5154"
];
etiqueterRayon(casesVarietesInternationales, "🎨 Variétés internationales");


const casesJazz = [
    "z4708", "z4709"
];
etiqueterRayon(casesJazz, "🎨 Jazz");


const casesClassiqueEtAutresGenres = [
    "z4710", "z4711"
];
etiqueterRayon(casesClassiqueEtAutresGenres, "🎨 Classique et autres genres");


const casesMusiqueBretonne = [
    "z4712", "z4713"
];
etiqueterRayon(casesMusiqueBretonne, "🎨 Musique bretonne");


const casesMusiqueDuMonde = [
    "z4714", "z4715"
];
etiqueterRayon(casesMusiqueDuMonde, "🎨 Musique du Monde");


const casesMusiqueUrbaine = [
    "z4827", "z4826", "z4825", "z4824", "z4823", "z4822"
];
etiqueterRayon(casesMusiqueUrbaine, "🎨 Musique urbaine");


const casesDvdMusicaux = [
    "z4821", "z4820"
];
etiqueterRayon(casesDvdMusicaux, "🎨 DVD musicaux");


const casesVinylesVarietesFrancaises = [
    "z3590", "z3589", "z3588", "z3587"
];
etiqueterRayon(casesVinylesVarietesFrancaises, "🎨 Vinyles - Variétés françaises");


const casesVinylesVarietesInternationales = [
    "z3596", "z3595", "z3594", "z9593", "z9592", "z3591"
];
etiqueterRayon(casesVinylesVarietesInternationales, "🎨 Vinyles - Variétés internationales");


const casesVinyleAutresGenres = [
    "z3809", "z3921"
];
etiqueterRayon(casesVinyleAutresGenres, "🎨 Vinyles - Autres genres");


const casesVinyleMusiqueUrbaine = [
    "z4145", "z4257"
];
etiqueterRayon(casesVinyleMusiqueUrbaine, "🎨 Vinyles - Musique urbaine");


const casesVinyleOffresPromos = [
    "z3929", "z3928", "z4041", "z4040", "z3925", "z3924", "z4037", "z4036", "z4265", "z4264", "z4377", "z4376", "z4261", "z4260", "z4373", "z4372"
];
etiqueterRayon(casesVinyleOffresPromos, "🎨 Vinyles - Offres promos");


// CARTERIE

const casesCarterieEmballageCadeaux = [
    "z0739", "z0627", "z0516", "z0517", "z0518", "z0519", "z0520", "z0521", "z0634", "z0746", "z0858", "z0970", "z1082", "z1194", "z1306", "z1418", "z0855", "z0854", "z0967", "z0966", "z1079", "z1078", "z1191", "z1190"
];
etiqueterRayon(casesCarterieEmballageCadeaux, "🎨 Carterie et emballage cadeaux");


// LOISIRS CRÉATIFS ENFANTS

const casesGommettesStickers = [
    "z3182", "z3294", "z3406", "z3518"
];
etiqueterRayon(casesGommettesStickers, "🎨 Gommettes et stickers");


const casesCoffretsCreatifs = [
    "z3851", "z3852", "z3738", "z3626", "z3514", "z3402"
];
etiqueterRayon(casesCoffretsCreatifs, "🎨 Coffrets créatifs");


const casesCustomiserCoudre = [
    "z3853", "z3854", "z3855", "z3856"
];
etiqueterRayon(casesCustomiserCoudre, "🎨 Customiser et coudre");


const casesDessinerColorier = [
    "z3857", "z3858", "z3859", "z3860", "z3861", "z3862", "z3751", "z3639"
];
etiqueterRayon(casesDessinerColorier, "🎨 Dessiner et colorier");


const casesPeinturePourEnfants = [
    "z3303", "z3191", "z3079", "z2967", "z2855", "z2743", "z2631", "z2519"
];
etiqueterRayon(casesPeinturePourEnfants, "🎨 Peinture pour enfants");


const casesPerlesARepasserEtAEau = [
    "z2850", "z2738", "z2626"
];
etiqueterRayon(casesPerlesARepasserEtAEau, "🎨 Perles à repasser et à eau");


const casesDecorerUnSupport = [
    "z2515", "z2627", "z2739", "z2851", "z2963", "z3075"
];
etiqueterRayon(casesDecorerUnSupport, "🎨 Décorer un support");


const casesCollerPlierDecouper = [
    "z3187", "z3299", "z3411", "z3523"
];
etiqueterRayon(casesCollerPlierDecouper, "🎨 Coller, plier et découper");


const casesModelerMouler = [
    "z3522", "z3410", "z3298", "z3186", "z3074", "z2962"
];
etiqueterRayon(casesModelerMouler, "🎨 Modeler et mouler");


// LUDO ÉDUCATIF

const casesPremiersJeuxPuzzles = [
    "z2509", "z2621", "z2733", "z2845", "z2957", "z3069", "z3181", "z3293", "z3293", "z3405", "z3517"
];
etiqueterRayon(casesPremiersJeuxPuzzles, "🎨 Premiers jeux et puzzles");


const casesConteusesEtEveilMusical = [
    "z2510", "z2622", "z2734", "z2846", "z2958", "z3070"
];
etiqueterRayon(casesConteusesEtEveilMusical, "🎨 Conteuses et éveil musical");


const casesJeuxScientifiques = [
    "z2506", "z2618", "z2730", "z2842"
];
etiqueterRayon(casesJeuxScientifiques, "🎨 Jeux scientifiques");


const casesApprendreEnSAmusant = [
    "z2954", "z3066", "z3178", "z3290"
];
etiqueterRayon(casesApprendreEnSAmusant, "🎨 Apprendre en s'amusant");


const casesPuzzlesEnfants = [
    "z2276", "z2388", "z2500", "z2612", "z2724", "z2836"
];
etiqueterRayon(casesPuzzlesEnfants, "🎨 Puzzles enfants");


const casesPuzzlesAdultes = [
    "z2384", "z2496", "z2608"
];
etiqueterRayon(casesPuzzlesAdultes, "🎨 Puzzles adultes");


const casesDioramasBooksNooks = [
    "z2720", "z2832", "z2944"
];
etiqueterRayon(casesDioramasBooksNooks, "🎨 Dioramas et book nooks");


const casesJeuxDeSocieteEnfants = [
    "z2277", "z2389", "z2501", "z2613", "z2725", "z2837"
];
etiqueterRayon(casesJeuxDeSocieteEnfants, "🎨 Jeux de société enfants");


const casesCasseteteLabyrinthe = [
    "z3173", "z3285", "z3397", "z3509"
];
etiqueterRayon(casesCasseteteLabyrinthe, "🎨 Casse-tête et labyrinthes");


const casesJeuxDeRoleEtEnquetes = [
    "z3737", "z3625", "z3513", "z3401"
];
etiqueterRayon(casesJeuxDeRoleEtEnquetes, "🎨 Jeux de rôle et enquêtes");


const casesJeuxDeStrategie = [
    "z3289", "z3177", "z3065"
];
etiqueterRayon(casesJeuxDeStrategie, "🎨 Jeux de stratégie");


const casesJeuxDAmbiance = [
    "z2505", "z2617", "z2729", "z2841", "z2953"
];
etiqueterRayon(casesJeuxDAmbiance, "🎨 Jeux d'ambiance");


const casesJeuxTraditionnels = [
    "z3842", "z3843"
];
etiqueterRayon(casesJeuxTraditionnels, "🎨 Jeux traditionnels");


const casesJeuxDeSocieteFamille = [
    "z3844", "z3845", "z3846", "z3847", "z3848"
];
etiqueterRayon(casesJeuxDeSocieteFamille, "🎨 Jeux de société en famille");


const casesJeuxDOccasions = [
    "z3508", "z3396", "z3284", "z3172"
];
etiqueterRayon(casesJeuxDOccasions, "🎨 Jeux d'occasion");


const casesCircuitsVoituresTrains = [
    "z3836", "z3837"
];
etiqueterRayon(casesCircuitsVoituresTrains, "🎨 Circuits de voitures et trains");


const casesBillesToupiesElastiques = [
    "z3838", "z3839"
];
etiqueterRayon(casesBillesToupiesElastiques, "🎨 Billes, toupies et élastiques");


const casesMaquillage = [
    "z3391", "z3503"
];
etiqueterRayon(casesMaquillage, "🎨 Maquillage");


const casesConstructionBoisPlastiqueMagnetique = [
    "z3723", "z3611", "z3499", "z3387"
];
etiqueterRayon(casesConstructionBoisPlastiqueMagnetique, "🎨 Construction bois, plastique et magnétique");


const casesLego = [
    "z2938", "z2826", "z2714", "z2602", "z2490"
];
etiqueterRayon(casesLego, "🎨 LEGO");


const casesFigurinesJouets = [
    "z3274", "z3162", "z3050"
];
etiqueterRayon(casesFigurinesJouets, "🎨 Figurines et jouets");

}