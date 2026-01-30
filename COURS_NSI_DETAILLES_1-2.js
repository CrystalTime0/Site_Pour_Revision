// ============================================
// COURS NSI COMPLETS - VERSION DÉTAILLÉE
// ============================================
// Remplace les chapitres NSI existants par ces versions enrichies

// IMPORTANT : Ces cours sont conçus pour être AUTONOMES
// Un élève doit pouvoir réviser UNIQUEMENT avec ces cours pour réussir son évaluation

{
    id: "nsi-1",
    title: "Représentation des données",
    description: "Types, valeurs de base, bases numériques - Cours complet",
    content: `
        <h4>📚 Introduction - Pourquoi représenter les données ?</h4>
        <p>Les ordinateurs ne comprennent qu'une seule chose : l'électricité. Un courant passe (1) ou ne passe pas (0). 
        C'est le <strong>langage binaire</strong>. Tout ce que fait un ordinateur (afficher une image, jouer de la musique, 
        faire des calculs) doit être traduit en suite de 0 et de 1.</p>
        
        <p><strong>Exemple concret :</strong> La lettre "A" est représentée par 01000001 en binaire (code ASCII).</p>

        <h4>🔢 1. Les bases numériques</h4>
        
        <p><strong>A. Base 10 (décimale) - Notre système habituel</strong></p>
        <p>Nous utilisons 10 chiffres : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p>
        <p>Exemple : 3 574 signifie :</p>
        <pre>
3 × 1000  +  5 × 100  +  7 × 10  +  4 × 1
3 × 10³   +  5 × 10²  +  7 × 10¹ +  4 × 10⁰
        </pre>
        
        <p><strong>B. Base 2 (binaire) - Le langage des ordinateurs</strong></p>
        <p>On utilise seulement 2 chiffres : 0 et 1</p>
        <p>Chaque position représente une puissance de 2 :</p>
        <pre>
Position:    7    6    5    4    3    2    1    0
Puissance:  2⁷   2⁶   2⁵   2⁴   2³   2²   2¹   2⁰
Valeur:    128   64   32   16    8    4    2    1
        </pre>
        
        <p><strong>Exemple détaillé :</strong> Convertir 1011₂ en base 10</p>
        <pre>
   1    0    1    1    ← Chiffres binaires
   ↓    ↓    ↓    ↓
   2³   2²   2¹   2⁰   ← Puissances de 2
   ↓    ↓    ↓    ↓
   8    4    2    1    ← Valeurs

Calcul : 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11₁₀
        </pre>
        
        <p><strong>C. Base 16 (hexadécimale) - Notation compacte</strong></p>
        <p>16 symboles : 0-9 puis A=10, B=11, C=12, D=13, E=14, F=15</p>
        <p>Utilisée pour les couleurs web, les adresses mémoire...</p>
        <pre>
FF₁₆ = 15×16¹ + 15×16⁰ = 240 + 15 = 255₁₀
#FF0000 = rouge pur (255 rouge, 0 vert, 0 bleu)
        </pre>

        <h4>🔄 2. Conversions entre bases</h4>
        
        <p><strong>Méthode 1 : Binaire → Décimal (déjà vu)</strong></p>
        <p>Additionner les puissances de 2 où il y a un 1.</p>
        
        <p><strong>Méthode 2 : Décimal → Binaire (divisions successives)</strong></p>
        <p>Exemple : Convertir 25₁₀ en binaire</p>
        <pre>
25 ÷ 2 = 12 reste 1  ← bit de poids faible (à droite)
12 ÷ 2 = 6  reste 0
6  ÷ 2 = 3  reste 0
3  ÷ 2 = 1  reste 1
1  ÷ 2 = 0  reste 1  ← bit de poids fort (à gauche)

Lecture de bas en haut : 25₁₀ = 11001₂

Vérification : 16 + 8 + 1 = 25 ✓
        </pre>

        <p><strong>Méthode 3 : Binaire ↔ Hexadécimal (par groupes de 4)</strong></p>
        <pre>
1 chiffre hexa = 4 bits binaires

Exemple : 10111010₂ → hexa
Grouper par 4 : 1011 | 1010
               B (11) | A (10)
Résultat : BA₁₆

Vérification : 11×16 + 10 = 176 + 10 = 186₁₀
En binaire : 128 + 32 + 16 + 8 + 2 = 186₁₀ ✓
        </pre>

        <h4>💾 3. Unités de mesure informatique</h4>
        <pre>
1 bit     = 1 chiffre binaire (0 ou 1)
1 octet   = 8 bits
1 kilooctet (Ko) = 1 024 octets = 2¹⁰ octets
1 mégaoctet (Mo) = 1 024 Ko = 2²⁰ octets
1 gigaoctet (Go) = 1 024 Mo = 2³⁰ octets
1 téraoctet (To) = 1 024 Go = 2⁴⁰ octets

⚠️ Attention : 1 Ko ≠ 1000 octets (mais 1024)
        </pre>
        
        <p><strong>Pourquoi 1024 et pas 1000 ?</strong></p>
        <p>Parce que les ordinateurs fonctionnent en puissances de 2. 
        2¹⁰ = 1024 est la puissance de 2 la plus proche de 1000.</p>

        <h4>🔤 4. Encodage des caractères</h4>
        
        <p><strong>A. ASCII (American Standard Code for Information Interchange)</strong></p>
        <ul>
            <li>Code les caractères sur <strong>7 bits</strong> (128 caractères possibles)</li>
            <li>Contient : lettres (a-z, A-Z), chiffres (0-9), symboles, caractères de contrôle</li>
        </ul>
        <pre>
Exemples de codes ASCII :
'A' = 65₁₀ = 01000001₂
'a' = 97₁₀ = 01100001₂  (différence de 32)
'0' = 48₁₀ = 00110000₂
' ' (espace) = 32₁₀
        </pre>
        
        <p><strong>Astuce :</strong> Les minuscules sont 32 unités après les majuscules.</p>
        
        <p><strong>B. ASCII étendu</strong></p>
        <ul>
            <li>Utilise <strong>8 bits</strong> (256 caractères)</li>
            <li>Ajoute les caractères accentués (é, è, à...)</li>
            <li>Problème : différentes versions selon les pays !</li>
        </ul>
        
        <p><strong>C. UTF-8 (Unicode) - Standard universel</strong></p>
        <ul>
            <li>Compatible avec ASCII (les 128 premiers caractères sont identiques)</li>
            <li>Peut encoder TOUS les caractères du monde (émojis inclus !)</li>
            <li>Taille variable : 1 à 4 octets par caractère</li>
        </ul>
        <pre>
'A' = 1 octet en UTF-8
'é' = 2 octets en UTF-8
'中' (chinois) = 3 octets en UTF-8
'😀' (emoji) = 4 octets en UTF-8
        </pre>

        <h4>🐍 5. Les types de données en Python</h4>
        
        <p><strong>A. Type int (entier)</strong></p>
        <pre>
age = 16
population = -250
grand_nombre = 1_000_000  # On peut utiliser _ pour la lisibilité

type(age)  # Retourne: &lt;class 'int'&gt;
        </pre>
        
        <p><strong>B. Type float (nombre à virgule)</strong></p>
        <pre>
temperature = 18.5
pi = 3.14159
scientifique = 1.5e-3  # = 0.0015 (notation scientifique)

⚠️ Attention : Imprécision des flottants !
0.1 + 0.2  # Donne 0.30000000000000004
        </pre>
        
        <p><strong>C. Type bool (booléen)</strong></p>
        <pre>
est_majeur = True
est_present = False

# Résultat de comparaisons
5 > 3   # True
2 == 3  # False
        </pre>
        
        <p><strong>D. Type str (chaîne de caractères)</strong></p>
        <pre>
nom = "Alice"
prenom = 'Bob'
phrase = """Texte sur
plusieurs lignes"""

# Opérations sur les chaînes
len("Bonjour")     # 7 (longueur)
"Bon" + "jour"     # "Bonjour" (concaténation)
"Ha" * 3           # "HaHaHa" (répétition)
        </pre>

        <h4>🔬 6. Représentation interne des nombres</h4>
        
        <p><strong>Entiers positifs</strong></p>
        <pre>
Sur 8 bits, on peut représenter de 0 à 255 (2⁸ - 1)
Sur 16 bits : 0 à 65 535 (2¹⁶ - 1)
Sur 32 bits : 0 à 4 294 967 295 (2³² - 1)
        </pre>
        
        <p><strong>Entiers signés (positifs et négatifs)</strong></p>
        <p>Méthode du complément à 2 :</p>
        <pre>
Sur 8 bits avec signe :
- De -128 à +127
- Le bit de poids fort indique le signe (0 = positif, 1 = négatif)

Exemple : -5 sur 8 bits
1. Écrire 5 en binaire : 00000101
2. Inverser tous les bits : 11111010
3. Ajouter 1 :            11111011  ← C'est -5
        </pre>

        <h4>📊 Tableau récapitulatif</h4>
        <pre>
┌──────────────┬─────────┬──────────────┬─────────────────┐
│ Base         │ Symboles│ Exemple      │ Usage           │
├──────────────┼─────────┼──────────────┼─────────────────┤
│ Binaire (2)  │ 0, 1    │ 1011         │ Machine         │
│ Décimal (10) │ 0-9     │ 25           │ Humains         │
│ Hexa (16)    │ 0-9,A-F │ FF           │ Couleurs, RAM   │
└──────────────┴─────────┴──────────────┴─────────────────┘

┌──────────┬────────────┬──────────────────────────┐
│ Type     │ Python     │ Exemples                 │
├──────────┼────────────┼──────────────────────────┤
│ Entier   │ int        │ 42, -5, 0                │
│ Décimal  │ float      │ 3.14, -0.5               │
│ Booléen  │ bool       │ True, False              │
│ Texte    │ str        │ "Bonjour", 'A'           │
└──────────┴────────────┴──────────────────────────┘
        </pre>

        <h4>💡 Points clés à retenir</h4>
        <ul>
            <li>✅ Les ordinateurs utilisent uniquement le binaire (0 et 1)</li>
            <li>✅ Pour convertir binaire → décimal : additionner les puissances de 2</li>
            <li>✅ Pour convertir décimal → binaire : divisions successives par 2</li>
            <li>✅ 1 octet = 8 bits, 1 Ko = 1024 octets</li>
            <li>✅ ASCII = 128 caractères, UTF-8 = tous les caractères du monde</li>
            <li>✅ Python a 4 types de base : int, float, bool, str</li>
        </ul>

        <h4>🎯 EXERCICES À FAIRE SOI-MÊME</h4>
        
        <p><strong>Exercice 1 : Conversions binaire ↔ décimal</strong></p>
        <p>a) Convertir en décimal : 11010₂</p>
        <p>b) Convertir en décimal : 10000001₂</p>
        <p>c) Convertir en binaire : 42₁₀</p>
        <p>d) Convertir en binaire : 100₁₀</p>
        
        <p><strong>Exercice 2 : Calculs avec les unités</strong></p>
        <p>a) Combien d'octets dans 5 Ko ?</p>
        <p>b) Combien de bits dans 2 octets ?</p>
        <p>c) Un fichier fait 2048 octets. Combien de Ko ?</p>
        
        <p><strong>Exercice 3 : Hexadécimal</strong></p>
        <p>a) Convertir en décimal : 2F₁₆</p>
        <p>b) Convertir en binaire : A5₁₆</p>
        <p>c) Quelle couleur RGB représente #00FF00 ?</p>
        
        <p><strong>Exercice 4 : Types Python</strong></p>
        <pre>
# Quel est le type de chaque valeur ?
a = 42
b = 3.14
c = "123"
d = True
e = 5 > 3

# Que vaut :
len("NSI")
"Py" + "thon"
int("25")
str(100)
        </pre>
        
        <p><strong>Exercice 5 : Problème de synthèse</strong></p>
        <p>Un fichier texte contient 1000 caractères encodés en UTF-8. 
        Sachant que chaque caractère prend en moyenne 1,5 octet :</p>
        <p>a) Quelle est la taille approximative du fichier en octets ?</p>
        <p>b) Cette taille en Ko ?</p>
        <p>c) Combien de bits au total ?</p>

        <h4>🔍 Solutions des exercices (à consulter APRÈS avoir cherché)</h4>
        <details>
            <summary>Cliquer pour voir les solutions</summary>
            <pre>
<strong>Exercice 1 :</strong>
a) 11010₂ = 16+8+2 = 26₁₀
b) 10000001₂ = 128+1 = 129₁₀
c) 42₁₀ = 101010₂ (42÷2=21 r0, 21÷2=10 r1, 10÷2=5 r0, 5÷2=2 r1, 2÷2=1 r0, 1÷2=0 r1)
d) 100₁₀ = 1100100₂

<strong>Exercice 2 :</strong>
a) 5 Ko = 5 × 1024 = 5120 octets
b) 2 octets = 2 × 8 = 16 bits
c) 2048 octets = 2048 ÷ 1024 = 2 Ko

<strong>Exercice 3 :</strong>
a) 2F₁₆ = 2×16 + 15 = 47₁₀
b) A5₁₆ = 1010 0101₂
c) #00FF00 = vert pur (R=0, G=255, B=0)

<strong>Exercice 4 :</strong>
a=int, b=float, c=str, d=bool, e=bool
len("NSI") = 3
"Py"+"thon" = "Python"
int("25") = 25 (nombre)
str(100) = "100" (texte)

<strong>Exercice 5 :</strong>
a) 1000 × 1.5 = 1500 octets
b) 1500 ÷ 1024 ≈ 1.46 Ko
c) 1500 × 8 = 12 000 bits
            </pre>
        </details>

        <h4>📝 Ce qu'il faut savoir pour l'évaluation</h4>
        <ul>
            <li>✓ Convertir entre binaire, décimal et hexadécimal</li>
            <li>✓ Calculer avec les unités (bit, octet, Ko, Mo...)</li>
            <li>✓ Connaître les codes ASCII de base ('A'=65, 'a'=97, '0'=48)</li>
            <li>✓ Différencier ASCII et UTF-8</li>
            <li>✓ Identifier les types Python (int, float, bool, str)</li>
            <li>✓ Comprendre pourquoi 1 Ko = 1024 octets</li>
        </ul>
    `
},

{
    id: "nsi-2",
    title: "Python : Variables et opérations",
    description: "Syntaxe Python, variables, opérateurs - Cours complet",
    content: `
        <h4>📚 Introduction - Qu'est-ce qu'un programme ?</h4>
        <p>Un programme est une suite d'instructions que l'ordinateur exécute dans l'ordre. 
        Python est un langage de programmation qui permet d'écrire ces instructions de manière lisible.</p>
        
        <p><strong>Pourquoi Python ?</strong></p>
        <ul>
            <li>✅ Syntaxe claire et lisible (proche du langage humain)</li>
            <li>✅ Puissant et utilisé professionnellement</li>
            <li>✅ Gratuit et open source</li>
            <li>✅ Idéal pour apprendre la programmation</li>
        </ul>

        <h4>📦 1. Les variables - Stocker des données</h4>
        
        <p><strong>A. Qu'est-ce qu'une variable ?</strong></p>
        <p>Une variable est comme une <strong>boîte nommée</strong> qui contient une valeur. 
        On peut lire cette valeur, la modifier, ou la réutiliser.</p>
        
        <pre>
┌──────────────┐
│  nom = "Alice" │  ← La boîte "nom" contient "Alice"
└──────────────┘

┌──────────────┐
│  age = 16     │  ← La boîte "age" contient 16
└──────────────┘
        </pre>
        
        <p><strong>B. Créer et utiliser une variable</strong></p>
        <pre>
# Créer une variable (affectation)
prenom = "Alice"
age = 16
taille = 1.65
est_eleve = True

# Utiliser une variable
print(prenom)      # Affiche: Alice
print(age + 1)     # Affiche: 17 (mais age vaut toujours 16)

# Modifier une variable
age = 17           # age vaut maintenant 17
age = age + 1      # age vaut maintenant 18
        </pre>
        
        <p><strong>C. Règles pour nommer une variable</strong></p>
        <pre>
✅ AUTORISÉ :
nom, prenom, age2, ma_variable, _test

❌ INTERDIT :
2age       (commence par un chiffre)
mon-nom    (contient un tiret)
mon nom    (contient un espace)
for        (mot réservé de Python)

💡 BONNES PRATIQUES :
- Noms explicites : "age" plutôt que "a"
- snake_case : "nombre_eleves" (mots séparés par _)
- Éviter les accents : "prenom" plutôt que "prénom"
        </pre>

        <p><strong>D. Affecter plusieurs variables en une ligne</strong></p>
        <pre>
# Affectation multiple
x, y, z = 1, 2, 3
# Équivaut à : x=1, y=2, z=3

# Échanger deux variables
a, b = 5, 10
a, b = b, a      # a=10, b=5

# Même valeur pour plusieurs variables
x = y = z = 0
        </pre>

        <h4>➕ 2. Les opérateurs arithmétiques</h4>
        
        <pre>
┌───────────┬──────────────┬──────────────────────┐
│ Opérateur │ Opération    │ Exemples             │
├───────────┼──────────────┼──────────────────────┤
│ +         │ Addition     │ 5 + 3 → 8            │
│ -         │ Soustraction │ 10 - 4 → 6           │
│ *         │ Multiplication│ 7 * 3 → 21          │
│ /         │ Division     │ 15 / 2 → 7.5         │
│ //        │ Div. entière │ 15 // 2 → 7          │
│ %         │ Modulo       │ 15 % 2 → 1 (reste)   │
│ **        │ Puissance    │ 2 ** 3 → 8 (2³)      │
└───────────┴──────────────┴──────────────────────┘
        </pre>
        
        <p><strong>Détails importants :</strong></p>
        
        <p><strong>Division / vs Division entière //</strong></p>
        <pre>
10 / 3    # Résultat: 3.333... (float)
10 // 3   # Résultat: 3 (int, partie entière)

⚠️ Attention :
-10 // 3  # Résultat: -4 (arrondi vers le bas !)
        </pre>
        
        <p><strong>Modulo % - Le reste de la division</strong></p>
        <pre>
17 % 5    # 17 = 5×3 + 2, donc résultat: 2

Utilisation pratique :
- Savoir si un nombre est pair : n % 2 == 0
- Savoir si divisible par 3 : n % 3 == 0
- Obtenir le dernier chiffre : n % 10
        </pre>
        
        <p><strong>Puissance **</strong></p>
        <pre>
2 ** 3    # 2³ = 8
10 ** 2   # 10² = 100
2 ** -1   # 2⁻¹ = 0.5

# Racine carrée = puissance 0.5
9 ** 0.5  # √9 = 3.0
        </pre>

        <h4>🔢 3. Priorité des opérations</h4>
        
        <p>Python respecte les priorités mathématiques (PEMDAS) :</p>
        <pre>
1. Parenthèses         ()
2. Puissance           **
3. Multiplication/Division   * / // %
4. Addition/Soustraction     + -

Exemples :
2 + 3 * 4        # = 2 + 12 = 14 (pas 20 !)
(2 + 3) * 4      # = 5 * 4 = 20
10 - 2 ** 3      # = 10 - 8 = 2
10 // 3 * 3      # = 3 * 3 = 9 (de gauche à droite)
        </pre>

        <h4>🔄 4. Opérateurs d'affectation augmentée</h4>
        
        <pre>
Forme longue        Forme courte
──────────────      ────────────
x = x + 5           x += 5
x = x - 3           x -= 3
x = x * 2           x *= 2
x = x / 4           x /= 4
x = x // 2          x //= 2
x = x % 3           x %= 3
x = x ** 2          x **= 2

Exemple complet :
score = 100
score += 50     # score = 150
score *= 2      # score = 300
score //= 100   # score = 3
        </pre>

        <h4>⚖️ 5. Les opérateurs de comparaison</h4>
        
        <p>Renvoient toujours un booléen (True ou False)</p>
        <pre>
┌───────────┬──────────────┬──────────────────────┐
│ Opérateur │ Signification│ Exemples             │
├───────────┼──────────────┼──────────────────────┤
│ ==        │ Égal à       │ 5 == 5 → True        │
│ !=        │ Différent de │ 5 != 3 → True        │
│ <         │ Inférieur    │ 3 < 5 → True         │
│ >         │ Supérieur    │ 5 > 3 → True         │
│ <=        │ Inférieur ou =│ 5 <= 5 → True       │
│ >=        │ Supérieur ou =│ 5 >= 3 → True       │
└───────────┴──────────────┴──────────────────────┘

⚠️ Pièges classiques :
5 = 5     # ❌ ERREUR ! = c'est affectation
5 == 5    # ✅ Comparaison, renvoie True

"5" == 5  # False (type différent: str vs int)
        </pre>

        <h4>🔗 6. Les opérateurs logiques</h4>
        
        <p><strong>A. Les trois opérateurs : and, or, not</strong></p>
        <pre>
┌──────────┬────────────────────────────────────┐
│ Opérateur│ Description                        │
├──────────┼────────────────────────────────────┤
│ and      │ ET logique (les deux doivent être vrais) │
│ or       │ OU logique (au moins un doit être vrai)  │
│ not      │ NON logique (inverse le booléen)        │
└──────────┴────────────────────────────────────┘
        </pre>
        
        <p><strong>B. Tables de vérité</strong></p>
        <pre>
AND (et) :
True  and True  → True
True  and False → False
False and True  → False
False and False → False

OR (ou) :
True  or True   → True
True  or False  → True
False or True   → True
False or False  → False

NOT (non) :
not True        → False
not False       → True
        </pre>
        
        <p><strong>C. Exemples pratiques</strong></p>
        <pre>
age = 16
permis = False

# Peut conduire si majeur ET a le permis
peut_conduire = (age >= 18) and permis
# False (car age < 18)

# Réduction si étudiant OU senior
age = 20
est_etudiant = True
reduc = (age >= 65) or est_etudiant
# True (car étudiant)

# N'est pas majeur
age = 16
non_majeur = not (age >= 18)
# True
        </pre>

        <h4>💬 7. Affichage et saisie</h4>
        
        <p><strong>A. print() - Afficher du texte</strong></p>
        <pre>
# Affichage simple
print("Bonjour")
print(42)

# Affichage multiple (séparé par des espaces)
print("Alice", "a", 16, "ans")
# Affiche: Alice a 16 ans

# Concaténation avec +
nom = "Bob"
print("Bonjour " + nom)
# Affiche: Bonjour Bob

# f-strings (recommandé, Python 3.6+)
age = 16
print(f"{nom} a {age} ans")
# Affiche: Bob a 16 ans

# Formatage avancé
prix = 19.99
print(f"Prix : {prix:.2f} €")
# Affiche: Prix : 19.99 €
        </pre>
        
        <p><strong>B. input() - Demander une saisie</strong></p>
        <pre>
# Saisie de texte
nom = input("Votre nom ? ")
# L'utilisateur tape, puis ENTRÉE
# nom contient le texte saisi (type str)

# Saisie de nombre
age_str = input("Votre âge ? ")
age = int(age_str)  # Conversion en entier

# Ou en une ligne :
age = int(input("Votre âge ? "))

# Saisie d'un nombre décimal
taille = float(input("Votre taille (m) ? "))

⚠️ input() renvoie TOUJOURS une chaîne (str)
Il faut convertir avec int() ou float() si besoin
        </pre>

        <h4>🔄 8. Conversions de types</h4>
        
        <pre>
┌──────────┬────────────────────────────────────┐
│ Fonction │ Conversion                         │
├──────────┼────────────────────────────────────┤
│ int()    │ Convertit en entier                │
│ float()  │ Convertit en nombre décimal        │
│ str()    │ Convertit en texte                 │
│ bool()   │ Convertit en booléen               │
└──────────┴────────────────────────────────────┘

Exemples :
int("25")       # 25 (int)
int(3.8)        # 3 (tronque la partie décimale)
float("3.14")   # 3.14 (float)
float(5)        # 5.0 (float)
str(100)        # "100" (str)
str(3.14)       # "3.14" (str)

bool(1)         # True
bool(0)         # False
bool("")        # False (chaîne vide)
bool("texte")   # True

⚠️ Erreurs courantes :
int("3.14")     # ❌ ValueError
int("abc")      # ❌ ValueError
        </pre>

        <h4>📊 Tableau récapitulatif</h4>
        <pre>
OPÉRATEURS ARITHMÉTIQUES :
+ - * /  (classiques)
//       (division entière)
%        (modulo/reste)
**       (puissance)

OPÉRATEURS DE COMPARAISON :
== !=    (égal, différent)
< > <= >= (comparaisons)
→ Renvoient True ou False

OPÉRATEURS LOGIQUES :
and      (ET : les deux vrais)
or       (OU : au moins un vrai)
not      (NON : inverse)

FONCTIONS ESSENTIELLES :
print()  (afficher)
input()  (saisir)
int()    (convertir en entier)
float()  (convertir en décimal)
str()    (convertir en texte)
type()   (connaître le type)
        </pre>

        <h4>💡 Points clés à retenir</h4>
        <ul>
            <li>✅ Une variable stocke une valeur qu'on peut modifier</li>
            <li>✅ Division / donne un float, // donne un int</li>
            <li>✅ Modulo % donne le reste de la division</li>
            <li>✅ == compare, = affecte</li>
            <li>✅ and/or/not pour combiner des conditions</li>
            <li>✅ input() renvoie toujours du texte (str)</li>
            <li>✅ Utiliser int() ou float() pour convertir les saisies</li>
        </ul>

        <h4>🎯 EXERCICES À FAIRE SOI-MÊME</h4>
        
        <p><strong>Exercice 1 : Variables et affichage</strong></p>
        <pre>
# Créer des variables pour :
- Votre prénom
- Votre âge
- Votre taille en mètres
# Afficher : "Je m'appelle [prénom], j'ai [age] ans et je mesure [taille] m"
        </pre>
        
        <p><strong>Exercice 2 : Calculs</strong></p>
        <pre>
# a) Calculer le périmètre d'un rectangle de longueur 12 et largeur 5
# b) Calculer l'aire de ce rectangle
# c) Calculer 2⁸
# d) Quel est le reste de 47 divisé par 5 ?
# e) Combien de fois 5 rentre dans 47 (division entière) ?
        </pre>
        
        <p><strong>Exercice 3 : Comparaisons et logique</strong></p>
        <pre>
# Que valent ces expressions ?
a = 10
b = 5

a > b                    # ?
a == 10 and b == 5       # ?
a < b or a > 0           # ?
not (a == b)             # ?
(a + b) >= 15            # ?
        </pre>
        
        <p><strong>Exercice 4 : Programme de calcul de moyenne</strong></p>
        <pre>
# Écrire un programme qui :
# 1. Demande 3 notes à l'utilisateur
# 2. Calcule la moyenne
# 3. Affiche : "Votre moyenne est : [moyenne]"
        </pre>
        
        <p><strong>Exercice 5 : Problème - Détection de nombre pair</strong></p>
        <pre>
# Écrire un programme qui :
# 1. Demande un nombre à l'utilisateur
# 2. Affiche True si le nombre est pair, False sinon
# Indice : utiliser l'opérateur %
        </pre>
        
        <p><strong>Exercice 6 : Échange de variables</strong></p>
        <pre>
# On a : a = 10 et b = 20
# Échanger leurs valeurs SANS utiliser de 3ème variable
# Résultat attendu : a = 20 et b = 10
        </pre>

        <h4>🔍 Solutions des exercices</h4>
        <details>
            <summary>Cliquer pour voir les solutions</summary>
            <pre>
<strong>Exercice 1 :</strong>
prenom = "Alice"
age = 16
taille = 1.65
print(f"Je m'appelle {prenom}, j'ai {age} ans et je mesure {taille} m")

<strong>Exercice 2 :</strong>
a) perimetre = 2 * (12 + 5) = 34
b) aire = 12 * 5 = 60
c) 2 ** 8 = 256
d) 47 % 5 = 2
e) 47 // 5 = 9

<strong>Exercice 3 :</strong>
a > b                    # True (10 > 5)
a == 10 and b == 5       # True (les deux sont vrais)
a < b or a > 0           # True (a > 0 est vrai)
not (a == b)             # True (10 != 5)
(a + b) >= 15            # True (15 >= 15)

<strong>Exercice 4 :</strong>
note1 = float(input("Note 1 : "))
note2 = float(input("Note 2 : "))
note3 = float(input("Note 3 : "))
moyenne = (note1 + note2 + note3) / 3
print(f"Votre moyenne est : {moyenne}")

<strong>Exercice 5 :</strong>
nombre = int(input("Entrez un nombre : "))
est_pair = (nombre % 2 == 0)
print(est_pair)

<strong>Exercice 6 :</strong>
a = 10
b = 20
a, b = b, a
print(a, b)  # 20 10
            </pre>
        </details>

        <h4>📝 Ce qu'il faut savoir pour l'évaluation</h4>
        <ul>
            <li>✓ Créer et modifier des variables</li>
            <li>✓ Utiliser tous les opérateurs arithmétiques (+, -, *, /, //, %, **)</li>
            <li>✓ Comprendre la différence entre / et //</li>
            <li>✓ Utiliser l'opérateur modulo %</li>
            <li>✓ Faire des comparaisons (==, !=, <, >, <=, >=)</li>
            <li>✓ Combiner des conditions avec and, or, not</li>
            <li>✓ Afficher avec print() et f-strings</li>
            <li>✓ Saisir avec input() et convertir avec int()/float()</li>
            <li>✓ Convertir entre types (int, float, str)</li>
        </ul>
    `
}

// REMARQUE : Ceci est un EXEMPLE de 2 chapitres ultra-détaillés
// Les 13 autres chapitres NSI suivent le même format
// Chaque chapitre fait environ 300-400 lignes
