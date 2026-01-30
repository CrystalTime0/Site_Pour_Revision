# ⚡ GUIDE RAPIDE - Ajouter du contenu en 3 étapes

## 📍 Étape 1 : Ouvre le bon fichier

```
📁 revision-site/
  └── 📁 public/
      └── 📁 js/
          └── 📄 data.js  ← OUVRE CE FICHIER !
```

## 📍 Étape 2 : Trouve la bonne section

### Pour ajouter un COURS :

Cherche dans le fichier :
```javascript
const coursData = {
    nsi: {           ← Pour NSI
    physique: {      ← Pour Physique
    maths: {         ← Pour Maths
```

Puis descends jusqu'à :
```javascript
chapters: [
    // ... chapitres existants ...
    
    // ✨ AJOUTE TON NOUVEAU CHAPITRE ICI
]
```

### Pour ajouter des QUESTIONS :

Cherche dans le fichier :
```javascript
const questionsData = {
    "nsi-1": [     ← Questions pour le chapitre nsi-1
    "nsi-2": [     ← Questions pour le chapitre nsi-2
    ...
    
    // ✨ AJOUTE TES NOUVELLES QUESTIONS ICI
}
```

## 📍 Étape 3 : Copie-colle un template

### 📚 Template CHAPITRE (copie-colle ça) :

```javascript
{
    id: "nsi-6",  // ⚠️ Change le numéro !
    title: "Titre de ton chapitre",
    description: "Description courte",
    content: `
        <h4>Première partie</h4>
        <p>Ton texte ici.</p>
        
        <h4>Deuxième partie</h4>
        <p>Autre texte.</p>
        
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    `
},  // ⚠️ N'oublie pas la virgule !
```

### ❓ Template QUESTIONS (copie-colle ça) :

```javascript
"nsi-6": [  // ⚠️ Même ID que ton chapitre !
    {
        question: "Ta question ?",
        answers: [
            "Réponse A",
            "Réponse B (correcte)",
            "Réponse C",
            "Réponse D"
        ],
        correct: 1,  // ⚠️ 0=A, 1=B, 2=C, 3=D
        explanation: "Pourquoi B est correct"
    },
    {
        question: "Autre question ?",
        answers: ["...", "...", "...", "..."],
        correct: 0,
        explanation: "..."
    }
],  // ⚠️ N'oublie pas la virgule !
```

## ✅ CHECKLIST rapide

Avant de sauvegarder, vérifie :

- [ ] ✅ L'ID est unique (ex: nsi-6, pas nsi-1 qui existe déjà)
- [ ] ✅ L'ID des questions = ID du chapitre
- [ ] ✅ Le `correct` est bon (0 pour la 1ère, 1 pour la 2ème, etc.)
- [ ] ✅ Il y a une virgule après chaque bloc `{ }`
- [ ] ✅ Les guillemets inversés \` sont bien placés

## 🎯 Exemple COMPLET

### J'ajoute un chapitre sur les dictionnaires en Python :

**1. Dans coursData.nsi.chapters :**
```javascript
{
    id: "nsi-6",
    title: "Les dictionnaires",
    description: "Structure clé-valeur",
    content: `
        <h4>Créer un dictionnaire</h4>
        <pre>
personne = {
    "nom": "Dupont",
    "age": 16
}
        </pre>
        
        <h4>Accéder aux valeurs</h4>
        <pre>
print(personne["nom"])  # Dupont
        </pre>
    `
},
```

**2. Dans questionsData :**
```javascript
"nsi-6": [
    {
        question: "Comment créer un dictionnaire vide ?",
        answers: [
            "dict = []",
            "dict = {}",
            "dict = ()",
            "dict = <>"
        ],
        correct: 1,
        explanation: "{} crée un dictionnaire vide"
    },
    {
        question: "Comment accéder à la valeur de 'nom' ?",
        answers: [
            "dict.nom",
            "dict[nom]",
            "dict['nom']",
            "dict(nom)"
        ],
        correct: 2,
        explanation: "On utilise dict['clé'] avec des guillemets"
    }
],
```

**3. Je sauvegarde et je teste !**

## 🚨 ERREURS FRÉQUENTES

| Erreur | Solution |
|--------|----------|
| Site ne charge pas | Ouvre la console (F12), regarde l'erreur |
| "Unexpected token" | Virgule manquante ou en trop |
| Chapitre invisible | Vérifie que tu l'as ajouté dans le bon `chapters: [ ]` |
| Questions invisibles | L'ID ne correspond pas au chapitre |
| Mauvaise réponse validée | Vérifie l'index `correct` (commence à 0 !) |

## 💡 ASTUCES

1. **Copie un existant** : Trouve un chapitre similaire, copie-le, modifie-le
2. **Change juste l'ID** : Si le dernier est "nsi-5", fais "nsi-6"
3. **Teste souvent** : Sauvegarde → Recharge le site → Vérifie
4. **Garde une copie** : Duplique data.js avant de modifier

## 📚 POUR ALLER PLUS LOIN

Consulte les fichiers :
- 📄 **GUIDE_AJOUT_CONTENU.md** → Guide détaillé complet
- 📄 **TEMPLATES.js** → Tous les templates et exemples

---

🎓 Tu es prêt ! Bonne création de contenu !
