# Site de Révisions - Première Spécialité

Site web de révision pour les élèves de Première spécialité en NSI, Physique-Chimie et Mathématiques.

## 🎯 Fonctionnalités

- **Cours détaillés** : Consultez les chapitres de chaque matière avec explications complètes
- **Questions de révision** : Testez vos connaissances avec des quiz interactifs
- **Tests blancs chronométrés** : Entraînez-vous dans les conditions d'examen

## 📚 Matières disponibles

### NSI (Numérique et Sciences Informatiques)
- Représentation des données
- Python : Variables et opérations
- Structures conditionnelles
- Boucles
- Fonctions

### Physique-Chimie
- La matière à l'échelle microscopique
- Les solutions aqueuses
- Les forces
- Énergie et ses conversions
- Signaux et ondes

### Mathématiques
- Second degré
- Dérivation
- Suites numériques
- Produit scalaire
- Probabilités

## 🚀 Installation en local

### Prérequis
- Node.js installé sur votre ordinateur (https://nodejs.org)

### Installation
1. Décompressez le fichier ZIP
2. Ouvrez un terminal dans le dossier du projet
3. Installez les dépendances :
```bash
npm install
```

### Lancement
```bash
npm start
```

Le site sera accessible à l'adresse : http://localhost:3000

## 🌐 Hébergement gratuit en ligne

Consultez les guides détaillés :

- **📖 GUIDE_HEBERGEMENT.md** : Guide complet des hébergeurs gratuits
- **🎬 TUTORIEL_DEPLOIEMENT.md** : Tutoriel pas à pas illustré

**Solutions recommandées :**
- ⚡ **Glitch** : Déploiement en 2 minutes, sans configuration
- 🚀 **Render** : Professionnel avec GitHub, gratuit
- 🎯 **Railway** : Simple et généreux
- ⚡ **Vercel** : Ultra-rapide

Tous permettent d'avoir une URL publique gratuite pour partager le site avec toute la classe !

## 💻 Utilisation

1. **Choisir une matière** : Cliquez sur NSI, Physique-Chimie ou Mathématiques
2. **Sélectionner un mode** :
   - 📖 **Cours** : Lisez les chapitres
   - ❓ **Questions** : Répondez aux questions de révision
   - 📝 **Test Blanc** : Passez un test chronométré

## 📝 Ajouter du contenu

Consultez les guides détaillés :

- **⚡ GUIDE_RAPIDE.md** : Ajouter du contenu en 3 étapes
- **📖 GUIDE_AJOUT_CONTENU.md** : Guide complet et détaillé
- **🎨 TEMPLATES.js** : Templates prêts à copier-coller

**En résumé :**
1. Ouvrez `public/js/data.js`
2. Copiez un template depuis `TEMPLATES.js`
3. Modifiez les textes et sauvegardez
4. Rechargez la page !

## 📱 Responsive Design

Le site est entièrement responsive et fonctionne sur :
- 💻 Ordinateurs
- 📱 Smartphones
- 📱 Tablettes

## 🛠️ Technologies utilisées

- **Backend** : Node.js + Express
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Design** : CSS moderne avec gradients et animations

## 📁 Structure du projet

```
revision-site/
├── server.js                    # Serveur Node.js
├── package.json                 # Configuration npm
├── README.md                    # Ce fichier
├── GUIDE_HEBERGEMENT.md        # Guide hébergement gratuit
├── TUTORIEL_DEPLOIEMENT.md     # Tutoriel pas à pas
├── GUIDE_RAPIDE.md             # Guide rapide ajout contenu
├── GUIDE_AJOUT_CONTENU.md      # Guide détaillé contenu
├── TEMPLATES.js                # Templates de contenu
├── .gitignore                  # Fichiers à ignorer
└── public/
    ├── index.html              # Page principale
    ├── css/
    │   └── style.css           # Styles responsive
    └── js/
        ├── data.js             # Données cours et questions
        └── app.js              # Logique de l'application
```

## 🎨 Personnalisation

Pour modifier le contenu :
- **Cours** : Éditez `coursData` dans `public/js/data.js`
- **Questions** : Éditez `questionsData` dans `public/js/data.js`
- **Styles** : Modifiez `public/css/style.css`

## 📚 Documentation

- **Installation locale** : Voir section "Installation" ci-dessus
- **Hébergement en ligne** : `GUIDE_HEBERGEMENT.md`
- **Déploiement pas à pas** : `TUTORIEL_DEPLOIEMENT.md`
- **Ajouter du contenu** : `GUIDE_RAPIDE.md` ou `GUIDE_AJOUT_CONTENU.md`
- **Templates** : `TEMPLATES.js`

## 🆘 Dépannage

### Le site ne démarre pas en local
```bash
# Vérifiez que Node.js est installé
node --version

# Réinstallez les dépendances
rm -rf node_modules
npm install
```

### Erreurs après modification
- Vérifiez la syntaxe JavaScript dans `data.js`
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Consultez `GUIDE_AJOUT_CONTENU.md` section "Dépannage"

### Problèmes d'hébergement
- Consultez `GUIDE_HEBERGEMENT.md` section "Problèmes fréquents"
- Vérifiez que `server.js` utilise `process.env.PORT`
- Consultez les logs de votre hébergeur

## 📧 Support

Pour toute question ou suggestion :
- Consultez d'abord les guides dans le projet
- Contactez votre enseignant
- Vérifiez la documentation de votre hébergeur

## 📄 Licence

Ce projet est destiné à un usage éducatif uniquement.

## 🎓 Contributeurs

Projet créé pour aider les élèves de Première spécialité à réviser efficacement.

---

**Bonne révision ! 🎯**

Pour démarrer rapidement :
1. **En local** : `npm install` puis `npm start`
2. **En ligne** : Suivez `TUTORIEL_DEPLOIEMENT.md`
3. **Ajouter contenu** : Consultez `GUIDE_RAPIDE.md`

