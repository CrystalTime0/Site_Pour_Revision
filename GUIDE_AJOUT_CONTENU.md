# 📝 Guide pour ajouter des questions et des cours

Ce guide explique comment ajouter facilement du contenu au site de révision.

## 📂 Fichier à modifier

Tout le contenu se trouve dans un seul fichier : **`public/js/data.js`**

## 📚 Comment ajouter un nouveau chapitre de cours

### 1. Localiser la matière

Dans le fichier `data.js`, trouve la section `coursData` et la matière concernée :
- `nsi` pour NSI
- `physique` pour Physique-Chimie
- `maths` pour Mathématiques

### 2. Ajouter un chapitre

Copie ce modèle et ajoute-le dans le tableau `chapters` :

```javascript
{
    id: "nsi-6",  // ⚠️ Identifiant UNIQUE (change le numéro)
    title: "Titre de ton chapitre",
    description: "Brève description",
    content: `
        <h4>Premier sous-titre</h4>
        <p>Ton texte ici. Tu peux faire des paragraphes.</p>
        
        <h4>Deuxième sous-titre</h4>
        <p>Autre paragraphe avec des exemples.</p>
        
        <h4>Formules et code</h4>
        <p>Pour du code : <code>print("hello")</code></p>
        
        <pre>
# Code sur plusieurs lignes
def fonction():
    return "résultat"
        </pre>
        
        <h4>Listes</h4>
        <ul>
            <li>Premier point</li>
            <li>Deuxième point</li>
            <li>Troisième point</li>
        </ul>
        
        <p><strong>Texte en gras</strong> ou <em>en italique</em></p>
    `
}
```

### 3. Balises HTML disponibles

| Balise | Usage | Exemple |
|--------|-------|---------|
| `<h4>` | Sous-titre | `<h4>Introduction</h4>` |
| `<p>` | Paragraphe | `<p>Texte normal</p>` |
| `<strong>` | Gras | `<strong>Important</strong>` |
| `<em>` | Italique | `<em>À noter</em>` |
| `<code>` | Code inline | `<code>x = 5</code>` |
| `<pre>` | Bloc de code | Voir exemple ci-dessus |
| `<ul><li>` | Liste à puces | Voir exemple ci-dessus |
| `<ol><li>` | Liste numérotée | Remplace `<ul>` par `<ol>` |
| `<br>` | Saut de ligne | `Ligne 1<br>Ligne 2` |

### 4. Caractères spéciaux

Pour afficher ces caractères dans le contenu :
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`
- `²` → `&sup2;` (exposant 2)
- `³` → `&sup3;` (exposant 3)
- `₂` → `&sub2;` (indice 2)

Exemples :
- CO₂ → `CO&sub2;`
- x² → `x&sup2;`
- H₂O → `H&sub2;O`

## ❓ Comment ajouter des questions

### 1. Structure d'une question

Dans la section `questionsData`, ajoute tes questions sous l'ID du chapitre :

```javascript
"nsi-6": [  // ⚠️ Même ID que le chapitre correspondant
    {
        question: "Quelle est la question ?",
        answers: [
            "Réponse A (fausse)",
            "Réponse B (correcte)",
            "Réponse C (fausse)",
            "Réponse D (fausse)"
        ],
        correct: 1,  // ⚠️ Index de la bonne réponse (commence à 0)
        explanation: "Explication de la bonne réponse"
    },
    // Ajoute d'autres questions ici...
]
```

### 2. Comprendre l'index `correct`

L'index commence à **0** :
- 0 = première réponse
- 1 = deuxième réponse
- 2 = troisième réponse
- 3 = quatrième réponse

**Exemple :**
```javascript
answers: ["Paris", "Londres", "Berlin", "Madrid"],
correct: 2  // "Berlin" est la bonne réponse (position 2, 3ème élément)
```

### 3. Conseils pour de bonnes questions

✅ **À faire :**
- Questions claires et précises
- 4 réponses (3 fausses, 1 vraie)
- Explications pédagogiques
- Varier les niveaux de difficulté

❌ **À éviter :**
- Questions ambiguës
- Réponses trop similaires
- Oublier l'explication

## 🔧 Exemple complet : Ajouter un nouveau chapitre

### Étape 1 : Ajouter le cours

Dans `coursData.nsi.chapters`, ajoute :

```javascript
{
    id: "nsi-6",
    title: "Les listes en Python",
    description: "Créer et manipuler des listes",
    content: `
        <h4>Créer une liste</h4>
        <p>Une liste en Python se définit avec des crochets :</p>
        <pre>
ma_liste = [1, 2, 3, 4, 5]
fruits = ["pomme", "banane", "orange"]
        </pre>
        
        <h4>Accéder aux éléments</h4>
        <p>On utilise l'index (commence à 0) :</p>
        <pre>
fruits = ["pomme", "banane", "orange"]
print(fruits[0])  # Affiche "pomme"
print(fruits[2])  # Affiche "orange"
        </pre>
        
        <h4>Méthodes utiles</h4>
        <ul>
            <li><code>append()</code> : ajouter un élément</li>
            <li><code>remove()</code> : supprimer un élément</li>
            <li><code>len()</code> : obtenir la longueur</li>
        </ul>
    `
}
```

### Étape 2 : Ajouter les questions

Dans `questionsData`, ajoute :

```javascript
"nsi-6": [
    {
        question: "Comment créer une liste vide en Python ?",
        answers: [
            "liste = ()",
            "liste = []",
            "liste = {}",
            "liste = <>"
        ],
        correct: 1,
        explanation: "Une liste vide se crée avec des crochets : []"
    },
    {
        question: "Que vaut fruits[1] si fruits = ['pomme', 'banane', 'kiwi'] ?",
        answers: [
            "pomme",
            "banane",
            "kiwi",
            "Erreur"
        ],
        correct: 1,
        explanation: "L'index 1 correspond au deuxième élément, donc 'banane'"
    },
    {
        question: "Comment ajouter 'orange' à la liste fruits ?",
        answers: [
            "fruits.add('orange')",
            "fruits.append('orange')",
            "fruits.insert('orange')",
            "fruits.push('orange')"
        ],
        correct: 1,
        explanation: "La méthode append() permet d'ajouter un élément à la fin"
    }
]
```

## 🎨 Mise en forme avancée

### Formules mathématiques

Pour des formules complexes, utilise des exposants et indices HTML :

```html
<p>E = mc&sup2;</p>
<p>H&sub2;O + CO&sub2;</p>
<p>x&sup3; + 2x&sup2; - 5x + 3 = 0</p>
```

### Tableaux

```html
<table style="border-collapse: collapse; width: 100%;">
    <tr style="background: #f0f0f0;">
        <th style="border: 1px solid #ddd; padding: 8px;">Colonne 1</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Colonne 2</th>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Valeur A</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Valeur B</td>
    </tr>
</table>
```

### Code avec coloration

Pour du code Python bien présenté :

```html
<pre>
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
</pre>
```

## ✅ Checklist avant de sauvegarder

- [ ] L'ID du chapitre est unique
- [ ] L'ID des questions correspond à l'ID du chapitre
- [ ] Les index `correct` sont justes (commence à 0)
- [ ] Toutes les questions ont une explication
- [ ] Le HTML est bien fermé (chaque `<p>` a son `</p>`)
- [ ] Les caractères spéciaux sont encodés (< > &)
- [ ] J'ai testé sur le site après modification

## 🐛 Dépannage

**Le site ne se charge pas :**
→ Vérifie la console du navigateur (F12), il y a probablement une erreur de syntaxe JavaScript

**Erreur "Unexpected token" :**
→ Tu as oublié une virgule, un guillemet ou une accolade

**Le chapitre n'apparaît pas :**
→ Vérifie que tu l'as ajouté dans le bon tableau `chapters`

**Les questions ne s'affichent pas :**
→ Vérifie que l'ID dans `questionsData` correspond bien à l'ID du chapitre

**Les accents sont bizarres :**
→ Assure-toi que le fichier est encodé en UTF-8

## 💡 Astuces

1. **Copier-coller** : Duplique un chapitre ou question existante et modifie-la
2. **Incrémenter les IDs** : Si le dernier est "nsi-5", le suivant sera "nsi-6"
3. **Tester régulièrement** : Recharge la page après chaque ajout
4. **Sauvegarder** : Garde une copie du fichier data.js avant de modifier

## 📞 Besoin d'aide ?

Si tu as des questions ou des problèmes :
1. Vérifie ce guide
2. Consulte les exemples existants dans le fichier
3. Demande à ton professeur

---

Bon ajout de contenu ! 🎓
