// ============================================
// 📋 TEMPLATE POUR AJOUTER DU CONTENU
// ============================================
// Copie-colle ces templates dans data.js et remplis les valeurs

// ============================================
// 📚 TEMPLATE CHAPITRE DE COURS
// ============================================

// À copier dans coursData.[matiere].chapters
{
    id: "XXX-N",  // ⚠️ Remplace XXX par nsi/phy/math et N par le numéro
    title: "Titre du chapitre",
    description: "Description courte du chapitre",
    content: `
        <h4>Introduction</h4>
        <p>Paragraphe d'introduction expliquant le sujet.</p>
        
        <h4>Partie 1 : Concept principal</h4>
        <p>Explication du premier concept important.</p>
        <p><strong>Définition :</strong> définition claire et précise.</p>
        
        <h4>Partie 2 : Formules et exemples</h4>
        <p>Formule importante :</p>
        <pre>
formule = valeur1 + valeur2
        </pre>
        
        <p><strong>Exemple :</strong></p>
        <p>Contexte de l'exemple...</p>
        <pre>
# Code ou calcul d'exemple
resultat = calcul(parametre)
        </pre>
        
        <h4>Partie 3 : Points clés</h4>
        <ul>
            <li><strong>Point 1 :</strong> explication du point 1</li>
            <li><strong>Point 2 :</strong> explication du point 2</li>
            <li><strong>Point 3 :</strong> explication du point 3</li>
        </ul>
        
        <h4>À retenir</h4>
        <p>Résumé des points essentiels à mémoriser pour ce chapitre.</p>
    `
}

// ============================================
// ❓ TEMPLATE QUESTIONS (5 questions)
// ============================================

// À copier dans questionsData
"XXX-N": [  // ⚠️ Même ID que le chapitre
    {
        question: "Question 1 ?",
        answers: [
            "Réponse A",
            "Réponse B (correcte)",
            "Réponse C",
            "Réponse D"
        ],
        correct: 1,  // ⚠️ Index de la bonne réponse (0, 1, 2 ou 3)
        explanation: "Explication de pourquoi B est la bonne réponse"
    },
    {
        question: "Question 2 ?",
        answers: [
            "Réponse A (correcte)",
            "Réponse B",
            "Réponse C",
            "Réponse D"
        ],
        correct: 0,
        explanation: "Explication de pourquoi A est la bonne réponse"
    },
    {
        question: "Question 3 ?",
        answers: [
            "Réponse A",
            "Réponse B",
            "Réponse C (correcte)",
            "Réponse D"
        ],
        correct: 2,
        explanation: "Explication de pourquoi C est la bonne réponse"
    },
    {
        question: "Question 4 ?",
        answers: [
            "Réponse A",
            "Réponse B",
            "Réponse C",
            "Réponse D (correcte)"
        ],
        correct: 3,
        explanation: "Explication de pourquoi D est la bonne réponse"
    },
    {
        question: "Question 5 ?",
        answers: [
            "Réponse A",
            "Réponse B (correcte)",
            "Réponse C",
            "Réponse D"
        ],
        correct: 1,
        explanation: "Explication de pourquoi B est la bonne réponse"
    }
]

// ============================================
// 📝 EXEMPLES CONCRETS PAR MATIÈRE
// ============================================

// ========== NSI ==========
{
    id: "nsi-6",
    title: "Les listes en Python",
    description: "Manipulation des listes",
    content: `
        <h4>Créer une liste</h4>
        <pre>
ma_liste = [1, 2, 3]
vide = []
        </pre>
        
        <h4>Accès aux éléments</h4>
        <pre>
fruits = ["pomme", "banane"]
print(fruits[0])  # pomme
        </pre>
    `
}

"nsi-6": [
    {
        question: "Comment créer une liste vide ?",
        answers: ["liste = ()", "liste = []", "liste = {}", "liste = <>"],
        correct: 1,
        explanation: "[] crée une liste vide en Python"
    }
]

// ========== PHYSIQUE ==========
{
    id: "phy-6",
    title: "La lumière",
    description: "Propriétés de la lumière",
    content: `
        <h4>Vitesse de la lumière</h4>
        <p>Dans le vide : c = 3,00 × 10&sup8; m/s</p>
        
        <h4>Spectre visible</h4>
        <ul>
            <li>Violet : 400 nm</li>
            <li>Rouge : 700 nm</li>
        </ul>
    `
}

"phy-6": [
    {
        question: "Quelle est la vitesse de la lumière dans le vide ?",
        answers: ["300 m/s", "3000 m/s", "300 000 m/s", "300 000 km/s"],
        correct: 3,
        explanation: "c = 3,00 × 10⁸ m/s = 300 000 km/s"
    }
]

// ========== MATHS ==========
{
    id: "math-6",
    title: "Les vecteurs",
    description: "Opérations sur les vecteurs",
    content: `
        <h4>Définition</h4>
        <p>Un vecteur &rarr;u a deux composantes :</p>
        <p>&rarr;u(x ; y)</p>
        
        <h4>Addition</h4>
        <p>&rarr;u + &rarr;v = (x+x' ; y+y')</p>
        
        <h4>Norme</h4>
        <p>||&rarr;u|| = &radic;(x&sup2; + y&sup2;)</p>
    `
}

"math-6": [
    {
        question: "Si →u(2;3) et →v(1;4), que vaut →u + →v ?",
        answers: ["(3;7)", "(2;12)", "(1;1)", "(3;1)"],
        correct: 0,
        explanation: "→u + →v = (2+1 ; 3+4) = (3 ; 7)"
    }
]

// ============================================
// 🎨 SNIPPETS UTILES
// ============================================

// Pour du code Python avec commentaires :
`<pre>
def fonction(x):
    # Commentaire explicatif
    resultat = x * 2
    return resultat
</pre>`

// Pour des formules mathématiques :
`<p>E<sub>c</sub> = ½ × m × v&sup2;</p>`
`<p>x&sup2; + 2x + 1 = 0</p>`
`<p>H&sub2;O + CO&sub2;</p>`

// Pour une liste à puces :
`<ul>
    <li>Premier élément</li>
    <li>Deuxième élément</li>
</ul>`

// Pour une liste numérotée :
`<ol>
    <li>Première étape</li>
    <li>Deuxième étape</li>
</ol>`

// Pour du texte important :
`<p><strong>Important :</strong> texte à retenir</p>`

// Pour une citation :
`<p><em>"Citation importante"</em></p>`

// Pour séparer des sections :
`<hr style="margin: 20px 0; border: 1px solid #e2e8f0;">`

// ============================================
// ⚠️ RAPPELS IMPORTANTS
// ============================================

// 1. ID UNIQUE pour chaque chapitre : "nsi-6", "phy-7", "math-8"
// 2. Même ID dans coursData ET questionsData
// 3. Index correct commence à 0 : [A, B, C, D] → correct: 2 = C
// 4. Virgules entre les éléments (attention au dernier !)
// 5. Guillemets inversés ` pour le contenu multiligne
// 6. Toujours tester après modification !

// ============================================
// 🚀 MARCHE À SUIVRE
// ============================================

// 1. Copie un template ci-dessus
// 2. Remplace les XXX et les textes d'exemple
// 3. Vérifie l'ID et l'index correct
// 4. Colle dans data.js au bon endroit
// 5. Sauvegarde le fichier
// 6. Recharge la page du site
// 7. Teste ton nouveau contenu !
