// Base de données des cours et questions
const coursData = {
    nsi: {
        name: "NSI (Numérique et Sciences Informatiques)",
        chapters: [
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
            },
            {
                id: "nsi-3",
                title: "Structures de contrôle : Conditions et Boucles",
                description: "Maîtriser le flux d'exécution : if, for, while - Cours complet ultra-détaillé",
                content: `
        <h4>📚 Introduction - L'intelligence du code</h4>
        <p>Jusqu'à présent, vos programmes étaient "linéaires" : ils s'exécutaient de la première à la dernière ligne sans jamais dévier. 
        Pour créer un programme utile (un jeu, un site web, une IA), l'ordinateur doit pouvoir <strong>faire des choix</strong> 
        ("Si l'utilisateur clique ici...") ou <strong>répéter des tâches</strong> ("Tant que le joueur a des points de vie...").</p>
        
        <p>C'est ce qu'on appelle les <strong>structures de contrôle</strong>. C'est ici que l'on passe de la simple calculatrice à la véritable programmation.</p>

        <h4>⚖️ 1. L'instruction Conditionnelle (if, elif, else)</h4>
        
        <p><strong>A. La notion de bloc et l'indentation</strong></p>
        <p>En Python, l'<strong>indentation</strong> (le décalage vers la droite, généralement 4 espaces) n'est pas esthétique : elle est <strong>obligatoire</strong>. 
        Elle permet de dire à Python : "Ce groupe de lignes appartient à cette condition".</p>
        
        <p><strong>B. Syntaxe complète</strong></p>
        <pre>
age = int(input("Entrez votre âge : "))

if age >= 18:
    print("Vous êtes majeur.")
    print("Vous pouvez voter.") # Ce bloc ne s'exécute que si age >= 18
elif age >= 13:
    print("Vous êtes adolescent.")
    print("Accès restreint.")    # Ce bloc ne s'exécute que si les conditions précédentes sont fausses ET age >= 13
else:
    print("Vous êtes un enfant.")
    print("Accès refusé.")       # S'exécute si RIEN de ce qui précède n'est vrai
        </pre>

        <p><strong>C. Schéma logique d'une condition</strong></p>
        <pre>
           [Condition if] ─── Vrai ───> [Bloc de code 1] ───┐
                │                                           │
              Faux                                          │
                ↓                                           │
          [Condition elif] ── Vrai ───> [Bloc de code 2] ───┤
                │                                           │
              Faux                                          │
                ↓                                           │
          [Bloc else] ─────── Toujours ──> [Bloc de code 3] ┤
                                                            ↓
                                                   [Suite du programme]
        </pre>

        <h4>🔄 2. La boucle Bornée (for)</h4>
        
        <p>On utilise <code>for</code> quand on sait <strong>exactement combien de fois</strong> on veut répéter une action.</p>
        
        <p><strong>A. Utilisation avec range()</strong></p>
        <p>La fonction <code>range(fin)</code> génère une suite d'entiers de 0 jusqu'à <strong>fin - 1</strong>.</p>
        <pre>
# Exemple 1 : Simple répétition
for i in range(5):
    print(f"Tour n°{i}") 
# Affiche : Tour 0, 1, 2, 3, 4 (Jamais le 5 !)

# Exemple 2 : Début et fin
for i in range(2, 6):
    print(i) # Affiche 2, 3, 4, 5

# Exemple 3 : Début, fin et PAS (step)
for i in range(10, 0, -2):
    print(i) # Affiche 10, 8, 6, 4, 2 (Compte à rebours)
        </pre>

        <p><strong>B. Application : Calculer une somme</strong></p>
        <pre>
somme = 0
for n in range(1, 11):
    somme = somme + n
print(f"La somme des nombres de 1 à 10 est {somme}") # 55
        </pre>

        <h4>🔁 3. La boucle Non-Bornée (while)</h4>
        
        <p>On l'utilise quand on veut répéter une action <strong>tant qu'une condition est vraie</strong>. On ne sait pas à l'avance quand cela s'arrêtera.</p>
        
        <p><strong>Exemple : Demande de mot de passe</strong></p>
        <pre>
mdp_correct = "nsi2024"
saisie = ""

while saisie != mdp_correct:
    saisie = input("Entrez le mot de passe : ")
    if saisie != mdp_correct:
        print("Erreur, recommencez.")

print("Accès accordé !")
        </pre>

        <p><strong>⚠️ ATTENTION : Le piège de la boucle infinie</strong></p>
        <p>Si la condition du <code>while</code> ne devient jamais fausse, le programme "boucle" à l'infini et plante l'ordinateur.</p>
        <pre>
i = 0
while i < 10:
    print(i)
    # ERREUR : Si j'oublie d'augmenter i (i = i + 1), i restera à 0
    # et 0 sera toujours inférieur à 10. Le programme n'aura pas de fin !
        </pre>

        <h4>🚫 4. Pièges et Erreurs Classiques</h4>
        <ul>
            <li><strong>L'oubli des deux-points (:)</strong> : Chaque <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code> doit se terminer par <code>:</code>.</li>
            <li><strong>L'erreur d'indentation (IndentationError)</strong> : Mélanger des espaces et des tabulations ou oublier de décaler le bloc.</li>
            <li><strong>Confondre = et ==</strong> : <code>a = 5</code> (affectation) alors que <code>if a == 5:</code> (test d'égalité).</li>
            <li><strong>Le "Off-by-one"</strong> : Penser que <code>range(10)</code> va jusqu'à 10, alors qu'il s'arrête à 9.</li>
        </ul>

        <h4>📊 Tableau récapitulatif des boucles</h4>
        <pre>
┌─────────────────┬──────────────────────────┬──────────────────────────┐
│ Caractéristique │ Boucle FOR               │ Boucle WHILE             │
├─────────────────┼──────────────────────────┼──────────────────────────┤
│ Usage           │ Nombre de tours connu    │ Condition d'arrêt        │
│ Fin             │ Automatique (fin range)  │ Manuel (cond. devient F) │
│ Risque          │ Presque aucun            │ Boucle infinie           │
│ Exemple type    │ Parcourir une liste      │ Attendre une saisie      │
└─────────────────┴──────────────────────────┴──────────────────────────┘
        </pre>

        <h4>💡 Points clés à retenir</h4>
        <ul>
            <li>✅ <strong>if / elif / else</strong> pour les choix multiples.</li>
            <li>✅ <strong>Indentation</strong> obligatoire pour définir les blocs.</li>
            <li>✅ <strong>range(début, fin)</strong> : inclut le début, exclut la fin.</li>
            <li>✅ <strong>while</strong> : attention à modifier la variable de contrôle dans la boucle.</li>
        </ul>

        <h4>🎯 EXERCICES PROGRESSIFS</h4>
        
        <p><strong>Exercice 1 : Mention au bac</strong></p>
        <p>Écrire un programme qui demande une note. Si note < 10 : "Refusé", entre 10 et 12 : "Passable", entre 12 et 14 : "Assez Bien", > 14 : "Bien/Très Bien".</p>
        
        <p><strong>Exercice 2 : La punition</strong></p>
        <p>Afficher 50 fois la phrase : "Je ne dois pas oublier les : en Python", numérotée de 1 à 50.</p>
        
        <p><strong>Exercice 3 : Puissances de 2</strong></p>
        <p>Afficher toutes les puissances de 2 (2, 4, 8, 16...) tant que le résultat est inférieur à 1000.</p>
        
        <p><strong>Exercice 4 : Factorielle (Défi)</strong></p>
        <p>Demander un nombre n et calculer n! (1 × 2 × 3 × ... × n). Exemple : pour 5, le résultat est 120.</p>

        <h4>🔍 Solutions des exercices</h4>
        <details>
            <summary>Cliquer pour voir les solutions</summary>
            <pre>
<strong>Exercice 1 :</strong>
note = float(input("Note : "))
if note < 10:
    print("Refusé")
elif note < 12:
    print("Passable")
elif note < 14:
    print("Assez Bien")
else:
    print("Très Bien")

<strong>Exercice 2 :</strong>
for i in range(1, 51):
    print(f"{i}. Je ne dois pas oublier les : en Python")

<strong>Exercice 3 :</strong>
val = 2
while val < 1000:
    print(val)
    val = val * 2

<strong>Exercice 4 :</strong>
n = int(input("Nombre : "))
fact = 1
for i in range(1, n + 1):
    fact = fact * i
print(f"La factorielle de {n} est {fact}")
            </pre>
        </details>

        <h4>📝 Checklist pour l'évaluation</h4>
        <ul>
            <li>✓ Je sais quand utiliser 'for' plutôt que 'while'.</li>
            <li>✓ Je n'oublie jamais les ':' après mes instructions.</li>
            <li>✓ Je maîtrise parfaitement les indices de 'range()'.</li>
            <li>✓ Je sais détecter une boucle infinie à la lecture du code.</li>
            <li>✓ Je sais imbriquer un 'if' à l'intérieur d'un 'for'.</li>
        </ul>
    `
            },

            {
                id: "nsi-4",
                title: "Les Listes (Tableaux)",
                description: "Manipuler des séquences de données - Cours complet ultra-détaillé",
                content: `
        <h4>📚 Introduction - Pourquoi les listes ?</h4>
        <p>Imaginez que vous deviez stocker les noms de 35 élèves d'une classe. Créer 35 variables (eleve1, eleve2...) serait un cauchemar à gérer. 
        En informatique, on utilise des <strong>listes</strong> (ou tableaux) : une seule variable qui contient une collection ordonnée de valeurs.</p>

        <h4>📋 1. Création et Accès aux éléments</h4>
        
        <p>Une liste se définit avec des crochets <code>[]</code>. Les éléments sont séparés par des virgules.</p>
        <pre>
fruits = ["Pomme", "Banane", "Cerise", "Datte"]
nombres = [10, 20, 30, 40]
mixte = ["Alice", 16, True, 1.75]
        </pre>

        <p><strong>A. Le système d'indices (Index)</strong></p>
        <p>Chaque élément a une adresse appelée <strong>indice</strong>. 
        ⚠️ <strong>ATTENTION : En informatique, on commence toujours à compter à partir de 0 !</strong></p>
        
        <pre>
Indice :      0          1          2          3
Liste  :  ["Pomme",  "Banane",  "Cerise",  "Datte"]
        </pre>
        
        <pre>
print(fruits[0]) # Affiche : Pomme
print(fruits[2]) # Affiche : Cerise

# Indices négatifs (en partant de la fin)
print(fruits[-1]) # Affiche : Datte (le dernier)
print(fruits[-2]) # Affiche : Cerise (l'avant-dernier)
        </pre>

        <h4>🛠️ 2. Modifier et Manipuler une liste</h4>
        
        <p><strong>A. Modifier un élément existant</strong></p>
        <pre>
notes = [12, 15, 8]
notes[2] = 10 # Remplace 8 par 10
print(notes)  # [12, 15, 10]
        </pre>

        <p><strong>B. Ajouter des éléments</strong></p>
        <pre>
L = [1, 2, 3]
L.append(4)     # Ajoute 4 à la FIN -> [1, 2, 3, 4]
L.insert(1, 99) # Insère 99 à l'indice 1 -> [1, 99, 2, 3, 4]
        </pre>

        <p><strong>C. Supprimer des éléments</strong></p>
        <pre>
L = ["A", "B", "C", "D"]
L.pop(1)    # Supprime l'élément à l'indice 1 ("B")
del L[0]    # Supprime "A"
L.remove("D") # Cherche la valeur "D" et la supprime
        </pre>

        <h4>🔄 3. Parcourir une liste (Le duo for / list)</h4>
        
        <p>C'est l'opération la plus courante en NSI : passer en revue tous les éléments.</p>
        
        <p><strong>Méthode 1 : Parcours direct (par les valeurs)</strong></p>
        <pre>
amis = ["Alice", "Bob", "Charlie"]
for nom in amis:
    print(f"Salut {nom} !")
        </pre>

        <p><strong>Méthode 2 : Parcours par indice (plus puissant)</strong></p>
        <p>On utilise <code>len(liste)</code> pour connaître sa taille automatiquement.</p>
        <pre>
L = [10, 20, 30, 40]
for i in range(len(L)):
    print(f"L'élément à l'indice {i} est {L[i]}")
        </pre>

        <h4>✂️ 4. Le Slicing (Découpage de liste)</h4>
        <p>On peut extraire une partie d'une liste : <code>liste[début : fin : pas]</code></p>
        <pre>
nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nombres[2:5]) # [2, 3, 4] (indice 5 exclu)
print(nombres[:3])  # [0, 1, 2] (du début à l'indice 3)
print(nombres[7:])  # [7, 8, 9] (de l'indice 7 à la fin)
print(nombres[::2]) # [0, 2, 4, 6, 8] (un sur deux)
        </pre>

        <h4>🚫 5. Pièges et Erreurs Classiques</h4>
        <ul>
            <li><strong>IndexError: list index out of range</strong> : Vous essayez d'accéder à l'indice 10 dans une liste qui n'a que 5 éléments.</li>
            <li><strong>L'aliasing (Le piège du miroir)</strong> : 
                <pre>
L1 = [1, 2, 3]
L2 = L1       # L2 n'est pas une copie, c'est la MÊME liste
L2[0] = 99
print(L1)     # Affiche [99, 2, 3] ! Pour copier, faire L2 = list(L1)
                </pre>
            </li>
        </ul>

        <h4>📊 Résumé des méthodes utiles</h4>
        <pre>
┌───────────────┬──────────────────────────────────────────┐
│ Méthode       │ Action                                   │
├───────────────┼──────────────────────────────────────────┤
│ len(L)        │ Retourne le nombre d'éléments            │
│ L.append(x)   │ Ajoute x à la fin                        │
│ L.insert(i, x)│ Insère x à l'indice i                    │
│ L.pop(i)      │ Enlève et retourne l'élément en i        │
│ L.sort()      │ Trie la liste par ordre croissant        │
│ L.reverse()   │ Inverse l'ordre de la liste              │
│ x in L        │ Vérifie si x est dans la liste (True/F)  │
└───────────────┴──────────────────────────────────────────┘
        </pre>

        <h4>🎯 EXERCICES PROGRESSIFS</h4>
        
        <p><strong>Exercice 1 : Manipulation de base</strong></p>
        <p>Soit L = [14, 9, 10, 12, 5, 18].
        a) Afficher le premier et le dernier élément.
        b) Ajouter 20 à la fin.
        c) Trier la liste.</p>
        
        <p><strong>Exercice 2 : Filtrage</strong></p>
        <p>Créer une liste contenant les nombres de 1 à 20. À l'aide d'une boucle, créer une nouvelle liste ne contenant que les nombres pairs de la première.</p>
        
        <p><strong>Exercice 3 : Recherche du Maximum</strong></p>
        <p>Écrire un programme qui trouve la plus grande valeur dans une liste <code>notes = [12, 17, 8, 19, 11]</code> sans utiliser la fonction <code>max()</code>.</p>
        
        <p><strong>Exercice 4 : Moyenne</strong></p>
        <p>Écrire une fonction qui calcule la moyenne d'une liste de nombres de n'importe quelle longueur.</p>

        <h4>🔍 Solutions des exercices</h4>
        <details>
            <summary>Cliquer pour voir les solutions</summary>
            <pre>
<strong>Exercice 1 :</strong>
L = [14, 9, 10, 12, 5, 18]
print(L[0], L[-1])
L.append(20)
L.sort()

<strong>Exercice 2 :</strong>
L1 = list(range(1, 21))
L2 = []
for n in L1:
    if n % 2 == 0:
        L2.append(n)
print(L2)

<strong>Exercice 3 :</strong>
notes = [12, 17, 8, 19, 11]
maxi = notes[0] # On prend le 1er comme référence
for n in notes:
    if n > maxi:
        maxi = n
print(f"Le max est {maxi}")

<strong>Exercice 4 :</strong>
L = [10, 15, 20]
somme = 0
for n in L:
    somme += n
moyenne = somme / len(L)
            </pre>
        </details>

        <h4>📝 Checklist pour l'évaluation</h4>
        <ul>
            <li>✓ Je sais que le premier indice est 0.</li>
            <li>✓ Je sais utiliser len() pour parcourir une liste.</li>
            <li>✓ Je connais la différence entre append() et insert().</li>
            <li>✓ Je sais extraire une portion de liste avec le slicing.</li>
            <li>✓ Je sais modifier une valeur précise dans une liste.</li>
        </ul>
    `
            },

            {
                id: "nsi-5",
                title: "Les Fonctions",
                description: "Modularité et réutilisation du code - Cours complet ultra-détaillé",
                content: `
        <h4>📚 Introduction - Organiser son code</h4>
        <p>En programmation, on évite au maximum de se répéter (principe DRY : Don't Repeat Yourself). 
        Une <strong>fonction</strong> est un petit bloc de code nommé qui effectue une tâche précise. 
        C'est comme une "recette" que l'on prépare une fois et que l'on peut utiliser à l'infini.</p>

        <h4>🛠️ 1. Définition et Appel d'une fonction</h4>
        
        <p><strong>A. Syntaxe de base</strong></p>
        <p>On définit une fonction avec le mot-clé <code>def</code>.</p>
        <pre>
def saluer():
    print("Bonjour tout le monde !")
    print("Bienvenue au cours de NSI.")

# Appel de la fonction
saluer()
saluer() # On peut l'appeler autant de fois qu'on veut
        </pre>

        <p><strong>B. Paramètres (Les entrées)</strong></p>
        <p>On peut envoyer des informations à une fonction pour qu'elle s'adapte.</p>
        <pre>
def saluer_personne(nom):
    print(f"Bonjour {nom} !")

saluer_personne("Alice") # Affiche : Bonjour Alice !
saluer_personne("Bob")   # Affiche : Bonjour Bob !
        </pre>

        <h4>📤 2. L'instruction Return (La sortie)</h4>
        
        <p>C'est la notion la plus importante. Une fonction ne sert pas juste à afficher (print), elle sert souvent à <strong>calculer et renvoyer</strong> un résultat au reste du programme.</p>
        
        <p><strong>Exemple : Calcul de l'aire d'un carré</strong></p>
        <pre>
def aire_carre(cote):
    resultat = cote * cote
    return resultat # La fonction "donne" le résultat

# On peut maintenant stocker ce résultat dans une variable
ma_surface = aire_carre(5)
print(ma_surface) # 25
        </pre>

        <p>⚠️ <strong>IMPORTANT :</strong> Dès que Python rencontre l'instruction <code>return</code>, il <strong>arrête immédiatement</strong> la fonction et sort. Le code écrit après un return dans une fonction ne sera jamais exécuté.</p>

        <h4>🔄 3. Comparaison : Print vs Return</h4>
        <pre>
┌──────────────────────────┬────────────────────────────────────────┐
│          PRINT           │                RETURN                  │
├──────────────────────────┼────────────────────────────────────────┤
│ Affiche juste à l'écran  │ Envoie une valeur utilisable           │
│ La valeur est "perdue"   │ On peut stocker le résultat            │
│ Pour l'humain            │ Pour l'ordinateur (le programme)       │
└──────────────────────────┴────────────────────────────────────────┘
        </pre>

        <h4>🌍 4. Portée des variables (Locale vs Globale)</h4>
        <p>Les variables créées <strong>à l'intérieur</strong> d'une fonction sont dites <strong>locales</strong>. Elles n'existent pas en dehors de la fonction.</p>
        <pre>
def ma_fonction():
    x = 10 # Variable locale
    print(x)

ma_fonction()
print(x) # ❌ ERREUR : 'x' n'existe pas ici !
        </pre>

        <h4>📏 5. La documentation (Docstring)</h4>
        <p>Il est de bonne pratique d'expliquer ce que fait une fonction entre triple guillemets.</p>
        <pre>
def perimetre_rectangle(longueur, largeur):
    """
    Calcule le périmètre d'un rectangle.
    Entrées : longueur (int/float), largeur (int/float)
    Sortie : périmètre (int/float)
    """
    return 2 * (longueur + largeur)
        </pre>

        <h4>🚫 6. Pièges et Erreurs Classiques</h4>
        <ul>
            <li><strong>Oublier les parenthèses</strong> : <code>saluer</code> (nom de la fonction) vs <code>saluer()</code> (exécution de la fonction).</li>
            <li><strong>Nombre d'arguments incorrect</strong> : Appeler une fonction avec 2 paramètres alors qu'elle en attend 3.</li>
            <li><strong>Oublier le return</strong> : Si vous oubliez <code>return</code>, la fonction renvoie <code>None</code> par défaut.</li>
        </ul>

        <h4>🎯 EXERCICES PROGRESSIFS</h4>
        
        <p><strong>Exercice 1 : Conversion</strong></p>
        <p>Écrire une fonction <code>celsius_vers_fahrenheit(c)</code> qui prend une température en Celsius et renvoie sa valeur en Fahrenheit. 
        Formule : F = C × 1.8 + 32.</p>
        
        <p><strong>Exercice 2 : Parité</strong></p>
        <p>Écrire une fonction <code>est_pair(n)</code> qui renvoie <code>True</code> si le nombre est pair, et <code>False</code> sinon.</p>
        
        <p><strong>Exercice 3 : Plus grand de trois</strong></p>
        <p>Écrire une fonction <code>max_de_trois(a, b, c)</code> qui renvoie le plus grand des trois nombres sans utiliser la fonction <code>max()</code> de Python.</p>
        
        <p><strong>Exercice 4 : Analyse de texte</strong></p>
        <p>Écrire une fonction <code>compter_voyelles(phrase)</code> qui renvoie le nombre de voyelles (a, e, i, o, u, y) contenues dans une chaîne de caractères.</p>

        <h4>🔍 Solutions des exercices</h4>
        <details>
            <summary>Cliquer pour voir les solutions</summary>
            <pre>
<strong>Exercice 1 :</strong>
def celsius_vers_fahrenheit(c):
    return c * 1.8 + 32

<strong>Exercice 2 :</strong>
def est_pair(n):
    if n % 2 == 0:
        return True
    else:
        return False
# Version pro : return n % 2 == 0

<strong>Exercice 3 :</strong>
def max_de_trois(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

<strong>Exercice 4 :</strong>
def compter_voyelles(phrase):
    nb = 0
    voyelles = "aeiouyAEIOUY"
    for lettre in phrase:
        if lettre in voyelles:
            nb += 1
    return nb
            </pre>
        </details>

        <h4>📝 Checklist pour l'évaluation</h4>
        <ul>
            <li>✓ Je sais définir une fonction avec def et ses paramètres.</li>
            <li>✓ Je comprends la différence entre print() et return.</li>
            <li>✓ Je sais appeler une fonction dans mon programme principal.</li>
            <li>✓ Je comprends que les variables locales disparaissent après l'appel.</li>
            <li>✓ Je sais documenter mes fonctions avec des docstrings.</li>
        </ul>
    `
            },
            {
                id: "nsi-6",
                title: "Dictionnaires et Tuples",
                description: "Structures de données évoluées : p-uplets et tables associatives - Cours complet",
                content: `
        <h4>📚 Introduction - Dépasser les limites des listes</h4>
        <p>Les listes sont pratiques, mais elles ont des limites. Comment stocker les coordonnées d'un point (x, y) de façon sécurisée ? Comment retrouver l'âge d'un élève sans parcourir toute une liste ? Pour cela, nous utilisons les <strong>Tuples</strong> (p-uplets) et les <strong>Dictionnaires</strong>.</p>

        <h4>📦 1. Les Tuples (p-uplets)</h4>
        <p>Un tuple est une suite ordonnée d'éléments, comme une liste, mais à une différence capitale : il est <strong>IMMUTABLE</strong> (on ne peut pas le modifier après création).</p>
        
        <pre>
# Création avec des parenthèses
mon_tuple = (10, 20)
point_3d = (5, -2, 8)

# Accès (comme les listes)
print(mon_tuple[0]) # 10

# ⚠️ ERREUR :
mon_tuple[0] = 15 # TypeError: 'tuple' object does not support item assignment
        </pre>
        <p><strong>Pourquoi utiliser un tuple ?</strong> C'est plus léger en mémoire et c'est une sécurité : on est certain que les données ne seront pas modifiées par erreur par une fonction.</p>

        <h4>📖 2. Les Dictionnaires</h4>
        <p>Un dictionnaire est une collection <strong>non-ordonnée</strong> qui utilise un système de <strong>Clé : Valeur</strong>. C'est comme un vrai dictionnaire : on cherche un mot (la clé) pour trouver sa définition (la valeur).</p>

        <pre>
# Création avec des accolades
eleve = {
    "nom": "Dupont",
    "prenom": "Jean",
    "age": 16,
    "options": ["NSI", "Maths"]
}

# Accès par la clé
print(eleve["nom"]) # Dupont
        </pre>

        <h4>🛠️ 3. Manipuler un dictionnaire</h4>
        <pre>
# Ajouter ou modifier
eleve["note"] = 15
eleve["age"] = 17

# Supprimer
del eleve["prenom"]

# Vérifier si une clé existe
if "nom" in eleve:
    print("La clé existe")
        </pre>

        <h4>🔄 4. Parcourir un dictionnaire</h4>
        <pre>
# Parcourir les clés
for k in eleve.keys():
    print(k)

# Parcourir les valeurs
for v in eleve.values():
    print(v)

# Parcourir les deux (très utilisé)
for k, v in eleve.items():
    print(f"Clé: {k}, Valeur: {v}")
        </pre>

        <h4>🚫 5. Pièges et Erreurs</h4>
        <ul>
            <li><strong>KeyError</strong> : Essayer d'accéder à une clé qui n'existe pas.</li>
            <li><strong>Clés uniques</strong> : Un dictionnaire ne peut pas avoir deux fois la même clé. La deuxième écrasera la première.</li>
            <li><strong>Types de clés</strong> : Les clés doivent être immutables (on utilise souvent des chaînes de caractères ou des entiers).</li>
        </ul>

        <h4>🎯 EXERCICES</h4>
        <p><strong>Ex 1 :</strong> Créer un dictionnaire 'inventaire' avec 3 pommes, 2 bananes et 5 oranges. Augmenter le nombre de bananes de 1.</p>
        <p><strong>Ex 2 :</strong> Écrire une fonction qui prend un dictionnaire et renvoie la somme de toutes les valeurs (on suppose que ce sont des nombres).</p>

        <details>
            <summary>Solutions</summary>
            <pre>
# Ex 1
inv = {"pommes": 3, "bananes": 2, "oranges": 5}
inv["bananes"] += 1

# Ex 2
def somme_dict(d):
    s = 0
    for v in d.values():
        s += v
    return s
            </pre>
        </details>
    `
            },

            {
                id: "nsi-7",
                title: "Algorithmes de Tri",
                description: "Tri par insertion et tri par sélection - Analyse et complexité",
                content: `
        <h4>📚 Introduction - L'importance de l'ordre</h4>
        <p>Trier des données est l'une des tâches les plus fréquentes en informatique (trier des contacts, des prix, des scores). Nous allons étudier deux algorithmes "classiques".</p>

        <h4>📊 1. Le Tri par Sélection</h4>
        <p><strong>Principe :</strong> On cherche le plus petit élément de la liste, on l'échange avec le premier. Puis on cherche le plus petit du reste, on l'échange avec le deuxième, etc.</p>
        
        <p><strong>Schéma de fonctionnement :</strong></p>
        <pre>
[5, 8, 2, 1]  (Min est 1) -> échange avec index 0
[1 | 8, 2, 5] (Min est 2) -> échange avec index 1
[1, 2 | 8, 5] (Min est 5) -> échange avec index 2
[1, 2, 5, 8]  Trié !
        </pre>

        <pre>
def tri_selection(L):
    n = len(L)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if L[j] < L[min_idx]:
                min_idx = j
        L[i], L[min_idx] = L[min_idx], L[i]
        </pre>

        <h4>🃏 2. Le Tri par Insertion</h4>
        <p><strong>Principe :</strong> C'est la méthode naturelle quand on trie des cartes en main. On prend un élément et on le place "à sa place" dans la partie gauche déjà triée.</p>
        
        <pre>
def tri_insertion(L):
    for i in range(1, len(L)):
        valeur_a_inserer = L[i]
        j = i
        while j > 0 and L[j-1] > valeur_a_inserer:
            L[j] = L[j-1]
            j = j - 1
        L[j] = valeur_a_inserer
        </pre>

        <h4>⏱️ 3. Complexité</h4>
        <p>Pour les deux tris, si on double la taille de la liste (n), le temps de calcul est multiplié par 4. On dit que la complexité est <strong>quadratique : O(n²)</strong>.</p>

        <h4>💡 Points clés</h4>
        <ul>
            <li>✅ Sélection : cherche le minimum.</li>
            <li>✅ Insertion : décale les éléments vers la droite pour faire de la place.</li>
            <li>✅ Les deux sont inefficaces sur de très grandes listes.</li>
        </ul>
    `
            },

            {
                id: "nsi-8",
                title: "Algorithmes Gloutons",
                description: "Optimisation et choix locaux - Problème du rendu de monnaie",
                content: `
        <h4>📚 Introduction - Faire au mieux "tout de suite"</h4>
        <p>Un algorithme glouton (greedy) résout un problème d'optimisation en faisant toujours le choix qui semble le meilleur <strong>immédiatement</strong>, sans jamais revenir en arrière.</p>

        <h4>💰 1. Le problème du rendu de monnaie</h4>
        <p>Objectif : Rendre une somme avec le <strong>minimum</strong> de pièces possibles.</p>
        <p><strong>Stratégie gloutonne :</strong> Prendre la plus grande pièce possible tant qu'elle ne dépasse pas la somme restante.</p>

        <pre>
Somme à rendre : 8€
Pièces dispo : [5, 2, 1]

1. 8 >= 5 ? Oui. Je prends 5€. Reste 3€.
2. 3 >= 5 ? Non.
3. 3 >= 2 ? Oui. Je prends 2€. Reste 1€.
4. 1 >= 2 ? Non.
5. 1 >= 1 ? Oui. Je prends 1€. Reste 0€.
Total : 3 pièces (5, 2, 1).
        </pre>

        <h4>⚠️ 2. La limite du glouton</h4>
        <p>L'algorithme glouton est rapide mais <strong>ne donne pas toujours la solution optimale</strong> !</p>
        <p>Exemple : Rendre 6€ avec des pièces de [4, 3, 1].</p>
        <ul>
            <li>Le glouton prendra : 4 + 1 + 1 (3 pièces).</li>
            <li>La solution optimale est : 3 + 3 (2 pièces).</li>
        </ul>

        <h4>🎯 EXERCICE : Le sac à dos</h4>
        <p>Vous avez un sac limité à 10kg. Objets : A(7kg, 10€), B(5kg, 8€), C(4kg, 7€). Quel est le choix glouton si on privilégie le prix le plus élevé ? Est-ce optimal ?</p>
        <details>
            <summary>Solution</summary>
            <p>Choix glouton : Objet A (7kg, 10€). On ne peut plus rien ajouter. Total = 10€. 
            Solution optimale : Objets B+C (9kg, 15€). Le glouton a échoué ici.</p>
        </details>
    `
            },

            {
                id: "nsi-9",
                title: "Architecture Matérielle et OS",
                description: "Composants d'un ordinateur et rôle du système d'exploitation",
                content: `
        <h4>💻 1. Le modèle de Von Neumann</h4>
        <p>Presque tous les ordinateurs actuels reposent sur cette architecture divisée en 4 parties :</p>
        <pre>
1. Le processeur (CPU) : Le cerveau (UAL + Unité de contrôle).
2. La mémoire vive (RAM) : Stocke données et programmes en cours.
3. Les bus : "Autoroutes" de données reliant les composants.
4. Les entrées/sorties (E/S) : Clavier, écran, disque dur...
        </pre>

        <h4>🧠 2. Le CPU (Central Processing Unit)</h4>
        <p>Il exécute des instructions en boucle selon le cycle : <strong>Charger -> Décoder -> Exécuter</strong>.</p>
        <p>Il possède des <strong>registres</strong> (mémoires ultra-rapides mais minuscules).</p>

        <h4>📀 3. Le Système d'Exploitation (OS)</h4>
        <p>C'est le logiciel principal (Windows, Linux, macOS). Ses rôles :</p>
        <ul>
            <li><strong>Gestion des processus</strong> : Partager le temps CPU entre les logiciels ouverts.</li>
            <li><strong>Gestion de la mémoire</strong> : Isoler les programmes pour qu'ils ne plantent pas les uns les autres.</li>
            <li><strong>Gestion des fichiers</strong> : Organiser les données sur le disque.</li>
            <li><strong>Interface</strong> : Faire le lien entre matériel et utilisateur.</li>
        </ul>

        <h4>📁 4. Les systèmes de fichiers</h4>
        <p>Sous Linux, tout est fichier. Les droits d'accès sont gérés par : <strong>Lecture (r), Écriture (w), Exécution (x)</strong> pour trois types d'utilisateurs : Propriétaire, Groupe, Autres.</p>
    `
            },

            {
                id: "nsi-10",
                title: "Réseaux : Modèle OSI et TCP/IP",
                description: "Comment les données voyagent sur Internet - Protocoles et Adressage",
                content: `
        <h4>🌐 1. Qu'est-ce qu'un réseau ?</h4>
        <p>Un ensemble de machines connectées pour échanger des informations. Le plus grand réseau est <strong>Internet</strong>.</p>

        <h4>📍 2. L'adresse IP</h4>
        <p>Chaque machine a une adresse unique. IPv4 est codée sur 4 octets (ex: 192.168.1.1). 
        Comme on arrive à court d'adresses, on passe à l'IPv6 (128 bits).</p>

        <h4>📜 3. Les couches du modèle TCP/IP</h4>
        <pre>
┌──────────────┬──────────────────────────────────────────┐
│ Couche       │ Rôle / Protocole                         │
├──────────────┼──────────────────────────────────────────┤
│ Application  │ HTTP (Web), FTP (Fichier), DNS           │
│ Transport    │ TCP (Fiable) ou UDP (Rapide)             │
│ Internet     │ IP (Acheminement des paquets)            │
│ Accès Réseau │ Ethernet, Wi-Fi                          │
└──────────────┴──────────────────────────────────────────┘
        </pre>

        <h4>🔍 4. Le DNS (Domain Name System)</h4>
        <p>C'est l'annuaire d'Internet. Il transforme <code>google.com</code> en adresse IP <code>142.250.179.78</code> car les ordinateurs ne comprennent que les chiffres.</p>
    `
            },

            {
                id: "nsi-11",
                title: "Langages HTML et CSS",
                description: "Créer et styliser des pages Web - Structure et design",
                content: `
        <h4>🏗️ 1. HTML (HyperText Markup Language)</h4>
        <p>Il définit la <strong>structure</strong> et le <strong>contenu</strong> de la page à l'aide de balises.</p>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt; &lt;title&gt;Ma Page&lt;/title&gt; &lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenue&lt;/h1&gt;
    &lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;
    &lt;a href="https://google.com"&gt;Lien vers Google&lt;/a&gt;
    &lt;img src="image.jpg" alt="Description"&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h4>🎨 2. CSS (Cascading Style Sheets)</h4>
        <p>Il définit l'<strong>apparence</strong> (couleurs, polices, disposition).</p>
        <pre>
/* Sélecteur { Propriété: Valeur; } */
h1 {
    color: blue;
    text-align: center;
}
p {
    font-family: Arial;
    font-size: 16px;
}
        </pre>

        <h4>💡 Points clés</h4>
        <ul>
            <li>✅ Balise <code>&lt;head&gt;</code> : Infos invisibles (titre, encodage).</li>
            <li>✅ Balise <code>&lt;body&gt;</code> : Contenu visible.</li>
            <li>✅ CSS peut être dans un fichier séparé <code>.css</code>.</li>
        </ul>
    `
            },

            {
                id: "nsi-12",
                title: "Interactions Web : JavaScript",
                description: "Rendre les pages dynamiques - DOM et Événements",
                content: `
        <h4>⚡ 1. Pourquoi JavaScript ?</h4>
        <p>HTML structure, CSS décore, JavaScript <strong>anime</strong>. C'est le langage qui permet de réagir au clic, de vérifier un formulaire ou de faire bouger des éléments.</p>

        <h4>🖱️ 2. Événements et DOM</h4>
        <p>Le <strong>DOM</strong> (Document Object Model) est la représentation de la page HTML que JavaScript peut modifier.</p>
        
        <pre>
// Sélectionner un élément
let monTitre = document.querySelector("h1");

// Modifier le contenu
monTitre.innerHTML = "Nouveau Titre";

// Réagir à un clic
let monBouton = document.querySelector("#btn");
monBouton.addEventListener("click", function() {
    alert("Vous avez cliqué !");
});
        </pre>

        <h4>🚫 3. Piège : Client vs Serveur</h4>
        <p>Le JavaScript de base s'exécute chez l'utilisateur (Navigateur = Client). Il ne peut pas accéder directement à la base de données du site.</p>
    `
            },

            {
                id: "nsi-13",
                title: "Traitement de données en tables (CSV)",
                description: "Manipulation de fichiers de données avec Python",
                content: `
        <h4>📊 1. Le format CSV</h4>
        <p>Comma Separated Values. Un format simple pour stocker des tableaux sous forme de texte.</p>
        <pre>
nom,prenom,note
Dupont,Jean,15
Durand,Marie,18
        </pre>

        <h4>🐍 2. Lire du CSV en Python</h4>
        <p>On utilise souvent le module <code>csv</code> pour transformer chaque ligne en <strong>dictionnaire</strong>.</p>
        <pre>
import csv
with open('eleves.csv', mode='r', encoding='utf-8') as f:
    lecteur = csv.DictReader(f)
    for ligne in lecteur:
        print(ligne['nom'], ligne['note'])
        </pre>

        <h4>🛠️ 3. Opérations classiques</h4>
        <ul>
            <li><strong>Filtrage</strong> : Garder uniquement les lignes qui respectent une condition.</li>
            <li><strong>Tri</strong> : Classer les données selon une colonne.</li>
        </ul>
    `
            },

            {
                id: "nsi-14",
                title: "Algorithme k-NN (K plus proches voisins)",
                description: "IA et Apprentissage automatique (Machine Learning)",
                content: `
        <h4>🤖 1. Principe du k-NN</h4>
        <p>C'est un algorithme de <strong>classification</strong>. Pour prédire la catégorie d'un nouvel élément, on regarde les <strong>k</strong> voisins les plus proches de lui dans les données connues.</p>
        
        <p><strong>Exemple :</strong> On veut savoir si un fruit est une orange ou un pamplemousse selon son poids et son diamètre.</p>
        <ol>
            <li>Calculer la distance entre le nouveau fruit et tous les autres.</li>
            <li>Trouver les <strong>k</strong> plus proches.</li>
            <li>La catégorie majoritaire parmi ces voisins devient la prédiction.</li>
        </ol>

        <h4>📏 2. La distance</h4>
        <p>On utilise souvent la distance euclidienne entre deux points A(x1, y1) et B(x2, y2) :</p>
        <pre>d = √((x2-x1)² + (y2-y1)²)</pre>

        <h4>💡 Point clé</h4>
        <p>Le choix de <strong>k</strong> est crucial. Si k est trop petit, l'algorithme est sensible aux erreurs. S'il est trop grand, il perd en précision locale.</p>
    `
            },

            {
                id: "nsi-15",
                title: "Algorithmes de Recherche",
                description: "Recherche séquentielle vs recherche dichotomique",
                content: `
        <h4>🔍 1. Recherche Linéaire (ou séquentielle)</h4>
        <p>On regarde les éléments un par un, du début à la fin.</p>
        <p><strong>Complexité : O(n)</strong>. Si la liste fait 1 million d'éléments, on peut faire 1 million de tests.</p>

        <h4>🎯 2. Recherche Dichotomique (Binary Search)</h4>
        <p>⚠️ <strong>CONDITION : La liste doit être TRIÉE.</strong></p>
        <p><strong>Principe :</strong> On regarde l'élément au milieu. S'il est trop grand, on cherche dans la moitié gauche. S'il est trop petit, dans la moitié droite. On divise ainsi par deux le nombre d'éléments à chaque étape.</p>

        <pre>
def recherche_dicho(L, cible):
    debut = 0
    fin = len(L) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if L[milieu] == cible:
            return milieu
        elif L[milieu] < cible:
            debut = milieu + 1
        else:
            fin = milieu - 1
    return -1
        </pre>

        <h4>⏱️ 3. Efficacité</h4>
        <p>La dichotomie est incroyablement rapide. Pour 1 million d'éléments, il ne faut que <strong>20 étapes</strong> au maximum ! On dit que la complexité est <strong>logarithmique : O(log n)</strong>.</p>
    `
            }
        ]
    },
    physique: {
        name: "Physique-Chimie",
        chapters: [
            {
                id: "phy-1",
                title: "La matière à l'échelle microscopique",
                description: "Atomes, molécules, ions",
                content: `
                    <h4>Structure de l'atome</h4>
                    <p>Un atome est composé de :</p>
                    <ul>
                        <li><strong>Noyau :</strong> contient protons (charge +) et neutrons (neutre)</li>
                        <li><strong>Nuage électronique :</strong> contient des électrons (charge -)</li>
                    </ul>
                    
                    <h4>Notation atomique</h4>
                    <p>Un élément est noté : <sup>A</sup><sub>Z</sub>X</p>
                    <ul>
                        <li>Z = numéro atomique (nombre de protons)</li>
                        <li>A = nombre de masse (protons + neutrons)</li>
                        <li>X = symbole de l'élément</li>
                    </ul>
                    <p>Exemple : <sup>12</sup><sub>6</sub>C (carbone-12) a 6 protons, 6 neutrons, 6 électrons</p>
                    
                    <h4>Les ions</h4>
                    <p><strong>Cation :</strong> atome qui a perdu des électrons (charge +)</p>
                    <p>Exemple : Na → Na⁺ + e⁻</p>
                    <p><strong>Anion :</strong> atome qui a gagné des électrons (charge -)</p>
                    <p>Exemple : Cl + e⁻ → Cl⁻</p>
                    
                    <h4>Les molécules</h4>
                    <p>Association d'atomes liés par des liaisons covalentes.</p>
                    <p>Exemples :</p>
                    <ul>
                        <li>H₂O : eau (2 hydrogènes + 1 oxygène)</li>
                        <li>CO₂ : dioxyde de carbone</li>
                        <li>CH₄ : méthane</li>
                    </ul>
                    
                    <h4>Masse molaire</h4>
                    <p>Masse d'une mole de substance, exprimée en g/mol.</p>
                    <p>Formule : M = Σ(nombre d'atomes × masse molaire atomique)</p>
                    <p>Exemple pour H₂O : M = 2×1 + 16 = 18 g/mol</p>
                `
            },
            {
                id: "phy-2",
                title: "Les solutions aqueuses",
                description: "Concentration, dissolution, dilution",
                content: `
                    <h4>Soluté et solvant</h4>
                    <p><strong>Solvant :</strong> liquide en plus grande quantité (souvent l'eau)</p>
                    <p><strong>Soluté :</strong> substance dissoute dans le solvant</p>
                    <p><strong>Solution :</strong> mélange homogène de soluté et solvant</p>
                    
                    <h4>Concentration massique</h4>
                    <p>Formule : C<sub>m</sub> = m / V</p>
                    <ul>
                        <li>C<sub>m</sub> : concentration massique (g/L)</li>
                        <li>m : masse de soluté (g)</li>
                        <li>V : volume de solution (L)</li>
                    </ul>
                    
                    <h4>Concentration molaire</h4>
                    <p>Formule : C = n / V</p>
                    <ul>
                        <li>C : concentration molaire (mol/L)</li>
                        <li>n : quantité de matière (mol)</li>
                        <li>V : volume de solution (L)</li>
                    </ul>
                    
                    <h4>Relation entre les concentrations</h4>
                    <p>C<sub>m</sub> = C × M</p>
                    <p>où M est la masse molaire du soluté</p>
                    
                    <h4>Dilution</h4>
                    <p>Lors d'une dilution, la quantité de matière se conserve :</p>
                    <p>C<sub>mère</sub> × V<sub>mère</sub> = C<sub>fille</sub> × V<sub>fille</sub></p>
                    
                    <h4>Facteur de dilution</h4>
                    <p>F = C<sub>mère</sub> / C<sub>fille</sub> = V<sub>fille</sub> / V<sub>mère</sub></p>
                `
            },
            {
                id: "phy-3",
                title: "Les forces",
                description: "Forces, poids, poussée d'Archimède",
                content: `
                    <h4>Caractéristiques d'une force</h4>
                    <p>Une force est caractérisée par :</p>
                    <ul>
                        <li><strong>Point d'application</strong></li>
                        <li><strong>Direction</strong> (droite d'action)</li>
                        <li><strong>Sens</strong></li>
                        <li><strong>Intensité</strong> (valeur en Newton)</li>
                    </ul>
                    
                    <h4>Le poids</h4>
                    <p>Formule : P = m × g</p>
                    <ul>
                        <li>P : poids (N)</li>
                        <li>m : masse (kg)</li>
                        <li>g : intensité de pesanteur (≈ 9,8 N/kg sur Terre)</li>
                    </ul>
                    <p>Direction : verticale, vers le bas</p>
                    <p>Point d'application : centre de gravité</p>
                    
                    <h4>La poussée d'Archimède</h4>
                    <p>Force exercée par un fluide sur un objet immergé.</p>
                    <p>Formule : Π = ρ × V<sub>immergé</sub> × g</p>
                    <ul>
                        <li>Π : poussée d'Archimède (N)</li>
                        <li>ρ : masse volumique du fluide (kg/m³)</li>
                        <li>V<sub>immergé</sub> : volume immergé (m³)</li>
                        <li>g : intensité de pesanteur (N/kg)</li>
                    </ul>
                    <p>Direction : verticale, vers le haut</p>
                    
                    <h4>Condition de flottaison</h4>
                    <ul>
                        <li>Si P > Π : l'objet coule</li>
                        <li>Si P = Π : l'objet flotte entre deux eaux</li>
                        <li>Si P < Π : l'objet remonte</li>
                    </ul>
                    
                    <h4>Principe des actions réciproques</h4>
                    <p>Si un objet A exerce une force sur un objet B, alors B exerce sur A une force de même intensité, même direction mais de sens opposé.</p>
                `
            },
            {
                id: "phy-4",
                title: "Énergie et ses conversions",
                description: "Énergies cinétique, potentielle, conservation",
                content: `
                    <h4>Énergie cinétique</h4>
                    <p>Énergie liée au mouvement.</p>
                    <p>Formule : E<sub>c</sub> = ½ × m × v²</p>
                    <ul>
                        <li>E<sub>c</sub> : énergie cinétique (J)</li>
                        <li>m : masse (kg)</li>
                        <li>v : vitesse (m/s)</li>
                    </ul>
                    
                    <h4>Énergie potentielle de pesanteur</h4>
                    <p>Énergie liée à l'altitude.</p>
                    <p>Formule : E<sub>pp</sub> = m × g × h</p>
                    <ul>
                        <li>E<sub>pp</sub> : énergie potentielle (J)</li>
                        <li>m : masse (kg)</li>
                        <li>g : intensité de pesanteur (N/kg)</li>
                        <li>h : hauteur (m)</li>
                    </ul>
                    
                    <h4>Énergie mécanique</h4>
                    <p>E<sub>m</sub> = E<sub>c</sub> + E<sub>pp</sub></p>
                    <p>En l'absence de frottements, l'énergie mécanique se conserve.</p>
                    
                    <h4>Puissance</h4>
                    <p>Formule : P = E / Δt</p>
                    <ul>
                        <li>P : puissance (W)</li>
                        <li>E : énergie (J)</li>
                        <li>Δt : durée (s)</li>
                    </ul>
                    
                    <h4>Rendement</h4>
                    <p>η = E<sub>utile</sub> / E<sub>consommée</sub></p>
                    <p>Le rendement est toujours inférieur à 1 (ou 100%)</p>
                    
                    <h4>Conversions d'énergie</h4>
                    <p>Exemples :</p>
                    <ul>
                        <li>Centrale hydroélectrique : E<sub>pp</sub> → E<sub>c</sub> → E<sub>électrique</sub></li>
                        <li>Chute libre : E<sub>pp</sub> → E<sub>c</sub></li>
                        <li>Montée : E<sub>c</sub> → E<sub>pp</sub></li>
                    </ul>
                `
            },
            {
                id: "phy-5",
                title: "Signaux et ondes",
                description: "Ondes, vitesse de propagation, période",
                content: `
                    <h4>Définition d'une onde</h4>
                    <p>Une onde est une perturbation qui se propage dans un milieu sans transport de matière.</p>
                    
                    <h4>Types d'ondes</h4>
                    <p><strong>Ondes mécaniques :</strong> nécessitent un milieu matériel</p>
                    <ul>
                        <li>Ondes sonores (air, eau, solides)</li>
                        <li>Vagues (eau)</li>
                        <li>Ondes sismiques (terre)</li>
                    </ul>
                    <p><strong>Ondes électromagnétiques :</strong> peuvent se propager dans le vide</p>
                    <ul>
                        <li>Lumière visible</li>
                        <li>Ondes radio</li>
                        <li>Rayons X</li>
                    </ul>
                    
                    <h4>Vitesse de propagation</h4>
                    <p>v = d / Δt</p>
                    <ul>
                        <li>v : vitesse (m/s)</li>
                        <li>d : distance parcourue (m)</li>
                        <li>Δt : durée (s)</li>
                    </ul>
                    <p>Vitesse du son dans l'air : ≈ 340 m/s</p>
                    <p>Vitesse de la lumière : c = 3,00 × 10⁸ m/s</p>
                    
                    <h4>Ondes périodiques</h4>
                    <p><strong>Période T :</strong> durée d'un motif (s)</p>
                    <p><strong>Fréquence f :</strong> nombre de motifs par seconde (Hz)</p>
                    <p>Relation : f = 1 / T</p>
                    
                    <h4>Longueur d'onde</h4>
                    <p>λ = v × T = v / f</p>
                    <ul>
                        <li>λ : longueur d'onde (m)</li>
                        <li>v : vitesse de propagation (m/s)</li>
                        <li>T : période (s)</li>
                        <li>f : fréquence (Hz)</li>
                    </ul>
                    
                    <h4>Le son</h4>
                    <p>Fréquences audibles : 20 Hz à 20 000 Hz</p>
                    <ul>
                        <li>Infrasons : f < 20 Hz</li>
                        <li>Sons audibles : 20 Hz < f < 20 kHz</li>
                        <li>Ultrasons : f > 20 kHz</li>
                    </ul>
                `
            }
        ]
    },
    maths: {
        name: "Mathématiques",
        chapters: [
            {
                id: "math-1",
                title: "Second degré",
                description: "Équations, forme canonique, discriminant",
                content: `
                    <h4>Forme développée</h4>
                    <p>Une fonction du second degré s'écrit : f(x) = ax² + bx + c</p>
                    <p>avec a ≠ 0</p>
                    
                    <h4>Forme canonique</h4>
                    <p>f(x) = a(x - α)² + β</p>
                    <p>où α = -b/(2a) et β = f(α)</p>
                    <p>Le sommet de la parabole est S(α ; β)</p>
                    
                    <h4>Forme factorisée</h4>
                    <p>Si l'équation ax² + bx + c = 0 a deux solutions x₁ et x₂ :</p>
                    <p>f(x) = a(x - x₁)(x - x₂)</p>
                    
                    <h4>Discriminant</h4>
                    <p>Δ = b² - 4ac</p>
                    <ul>
                        <li>Si Δ > 0 : deux solutions réelles distinctes
                            <br>x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a)</li>
                        <li>Si Δ = 0 : une solution double
                            <br>x₀ = -b/(2a)</li>
                        <li>Si Δ < 0 : pas de solution réelle</li>
                    </ul>
                    
                    <h4>Signe de ax² + bx + c</h4>
                    <p>Dépend du signe de a et de Δ :</p>
                    <ul>
                        <li>Si a > 0 : parabole tournée vers le haut</li>
                        <li>Si a < 0 : parabole tournée vers le bas</li>
                    </ul>
                    
                    <h4>Somme et produit des racines</h4>
                    <p>Si x₁ et x₂ sont les racines :</p>
                    <ul>
                        <li>x₁ + x₂ = -b/a</li>
                        <li>x₁ × x₂ = c/a</li>
                    </ul>
                `
            },
            {
                id: "math-2",
                title: "Dérivation",
                description: "Dérivées, tangentes, variations",
                content: `
                    <h4>Nombre dérivé</h4>
                    <p>Le nombre dérivé de f en a est la limite :</p>
                    <p>f'(a) = lim<sub>h→0</sub> [f(a+h) - f(a)] / h</p>
                    <p>C'est le coefficient directeur de la tangente en a.</p>
                    
                    <h4>Dérivées usuelles</h4>
                    <ul>
                        <li>Si f(x) = k (constante) → f'(x) = 0</li>
                        <li>Si f(x) = x → f'(x) = 1</li>
                        <li>Si f(x) = xⁿ → f'(x) = n×xⁿ⁻¹</li>
                        <li>Si f(x) = √x → f'(x) = 1/(2√x)</li>
                        <li>Si f(x) = 1/x → f'(x) = -1/x²</li>
                    </ul>
                    
                    <h4>Opérations sur les dérivées</h4>
                    <p><strong>Somme :</strong> (u + v)' = u' + v'</p>
                    <p><strong>Produit par constante :</strong> (k×u)' = k×u'</p>
                    <p><strong>Produit :</strong> (u×v)' = u'×v + u×v'</p>
                    <p><strong>Quotient :</strong> (u/v)' = (u'×v - u×v') / v²</p>
                    
                    <h4>Équation de la tangente</h4>
                    <p>En un point A(a ; f(a)), l'équation de la tangente est :</p>
                    <p>y = f'(a)(x - a) + f(a)</p>
                    
                    <h4>Lien dérivée/variations</h4>
                    <ul>
                        <li>Si f'(x) > 0 sur un intervalle → f est croissante</li>
                        <li>Si f'(x) < 0 sur un intervalle → f est décroissante</li>
                        <li>Si f'(x) = 0 → extremum possible</li>
                    </ul>
                    
                    <h4>Extremum</h4>
                    <p>Si f'(x) s'annule en changeant de signe en a :</p>
                    <ul>
                        <li>f'(x) passe de + à - → maximum en a</li>
                        <li>f'(x) passe de - à + → minimum en a</li>
                    </ul>
                `
            },
            {
                id: "math-3",
                title: "Suites numériques",
                description: "Arithmétiques, géométriques, limites",
                content: `
                    <h4>Définition d'une suite</h4>
                    <p>Une suite (uₙ) associe à chaque entier n un nombre réel uₙ.</p>
                    <p><strong>Terme général :</strong> uₙ = f(n)</p>
                    <p><strong>Relation de récurrence :</strong> u_{n+1} = f(uₙ)</p>
                    
                    <h4>Suite arithmétique</h4>
                    <p>Définition : u_{n+1} = uₙ + r</p>
                    <p>où r est la raison (constante)</p>
                    <p><strong>Terme général :</strong> uₙ = u₀ + n×r</p>
                    <p><strong>Somme des n premiers termes :</strong></p>
                    <p>S = (nombre de termes) × (premier + dernier) / 2</p>
                    
                    <h4>Suite géométrique</h4>
                    <p>Définition : u_{n+1} = uₙ × q</p>
                    <p>où q est la raison (constante, q ≠ 0)</p>
                    <p><strong>Terme général :</strong> uₙ = u₀ × qⁿ</p>
                    <p><strong>Somme des n premiers termes (q ≠ 1) :</strong></p>
                    <p>S = u₀ × (1 - qⁿ) / (1 - q)</p>
                    
                    <h4>Sens de variation</h4>
                    <p>Une suite est :</p>
                    <ul>
                        <li><strong>Croissante</strong> si u_{n+1} ≥ uₙ pour tout n</li>
                        <li><strong>Décroissante</strong> si u_{n+1} ≤ uₙ pour tout n</li>
                        <li><strong>Constante</strong> si u_{n+1} = uₙ pour tout n</li>
                    </ul>
                    
                    <h4>Limites</h4>
                    <p><strong>Suite arithmétique :</strong></p>
                    <ul>
                        <li>Si r > 0 : lim uₙ = +∞</li>
                        <li>Si r < 0 : lim uₙ = -∞</li>
                        <li>Si r = 0 : suite constante</li>
                    </ul>
                    <p><strong>Suite géométrique :</strong></p>
                    <ul>
                        <li>Si |q| < 1 : lim uₙ = 0</li>
                        <li>Si q > 1 : lim uₙ = +∞ (si u₀ > 0)</li>
                        <li>Si q = 1 : suite constante</li>
                        <li>Si q ≤ -1 : pas de limite</li>
                    </ul>
                `
            },
            {
                id: "math-4",
                title: "Produit scalaire",
                description: "Définitions, propriétés, applications",
                content: `
                    <h4>Définitions du produit scalaire</h4>
                    <p><strong>Définition 1 (géométrique) :</strong></p>
                    <p>→u · →v = ||→u|| × ||→v|| × cos(→u, →v)</p>
                    
                    <p><strong>Définition 2 (projection) :</strong></p>
                    <p>→u · →v = ||→u|| × proj_→u(→v)</p>
                    
                    <p><strong>Définition 3 (analytique) :</strong></p>
                    <p>Si →u(x ; y) et →v(x' ; y') alors</p>
                    <p>→u · →v = xx' + yy'</p>
                    
                    <h4>Propriétés</h4>
                    <ul>
                        <li>→u · →v = →v · →u (commutativité)</li>
                        <li>→u · (→v + →w) = →u · →v + →u · →w (distributivité)</li>
                        <li>k(→u · →v) = (k→u) · →v = →u · (k→v)</li>
                        <li>→u · →u = ||→u||²</li>
                    </ul>
                    
                    <h4>Orthogonalité</h4>
                    <p>Deux vecteurs sont orthogonaux si et seulement si :</p>
                    <p>→u · →v = 0</p>
                    
                    <h4>Formules de polarisation</h4>
                    <p>→u · →v = ½(||→u + →v||² - ||→u||² - ||→v||²)</p>
                    <p>→u · →v = ½(||→u||² + ||→v||² - ||→u - →v||²)</p>
                    
                    <h4>Équation de droite</h4>
                    <p>Une droite de vecteur normal →n(a ; b) passant par A(x₀ ; y₀) a pour équation :</p>
                    <p>a(x - x₀) + b(y - y₀) = 0</p>
                    <p>ou ax + by + c = 0</p>
                    
                    <h4>Équation de cercle</h4>
                    <p>Cercle de centre Ω(a ; b) et de rayon R :</p>
                    <p>(x - a)² + (y - b)² = R²</p>
                    
                    <h4>Application : distance point-droite</h4>
                    <p>Distance d'un point M à une droite (d) :</p>
                    <p>d(M, d) = |→AM · →n| / ||→n||</p>
                    <p>où A ∈ (d) et →n est un vecteur normal à (d)</p>
                `
            },
            {
                id: "math-5",
                title: "Probabilités",
                description: "Loi de probabilité, espérance, écart-type",
                content: `
                    <h4>Vocabulaire</h4>
                    <p><strong>Expérience aléatoire :</strong> expérience dont le résultat dépend du hasard</p>
                    <p><strong>Issue :</strong> résultat possible</p>
                    <p><strong>Événement :</strong> ensemble d'issues</p>
                    <p><strong>Univers Ω :</strong> ensemble de toutes les issues possibles</p>
                    
                    <h4>Probabilité</h4>
                    <p>Une probabilité P vérifie :</p>
                    <ul>
                        <li>0 ≤ P(A) ≤ 1 pour tout événement A</li>
                        <li>P(Ω) = 1</li>
                        <li>Si A et B sont incompatibles : P(A∪B) = P(A) + P(B)</li>
                    </ul>
                    
                    <h4>Propriétés</h4>
                    <ul>
                        <li>P(∅) = 0</li>
                        <li>P(Ā) = 1 - P(A) (événement contraire)</li>
                        <li>P(A∪B) = P(A) + P(B) - P(A∩B)</li>
                    </ul>
                    
                    <h4>Équiprobabilité</h4>
                    <p>Si toutes les issues ont la même probabilité :</p>
                    <p>P(A) = (nombre d'issues favorables) / (nombre d'issues total)</p>
                    
                    <h4>Variable aléatoire</h4>
                    <p>Fonction qui associe un nombre à chaque issue.</p>
                    <p><strong>Loi de probabilité :</strong> tableau donnant P(X = xᵢ) pour chaque valeur</p>
                    
                    <h4>Espérance</h4>
                    <p>E(X) = Σ xᵢ × P(X = xᵢ)</p>
                    <p>C'est la moyenne pondérée des valeurs.</p>
                    <p><strong>Propriétés :</strong></p>
                    <ul>
                        <li>E(aX + b) = aE(X) + b</li>
                        <li>E(X + Y) = E(X) + E(Y)</li>
                    </ul>
                    
                    <h4>Variance et écart-type</h4>
                    <p><strong>Variance :</strong> V(X) = E(X²) - [E(X)]²</p>
                    <p><strong>Écart-type :</strong> σ(X) = √V(X)</p>
                    <p>Mesure la dispersion autour de l'espérance.</p>
                    
                    <h4>Loi binomiale</h4>
                    <p>Répétition de n épreuves identiques et indépendantes avec probabilité p de succès.</p>
                    <p>X suit la loi B(n, p)</p>
                    <ul>
                        <li>E(X) = np</li>
                        <li>V(X) = np(1-p)</li>
                        <li>σ(X) = √[np(1-p)]</li>
                    </ul>
                `
            }
        ]
    }
};

// Questions pour chaque chapitre
const questionsData = {
    "nsi-1": [
        {
            question: "Combien vaut 1101₂ en base 10 ?",
            answers: ["11", "13", "15", "17"],
            correct: 1,
            explanation: "1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13"
        },
        {
            question: "Quel est le type de la valeur True en Python ?",
            answers: ["int", "str", "bool", "float"],
            correct: 2,
            explanation: "True est une valeur booléenne, donc de type bool"
        },
        {
            question: "Combien de caractères peut encoder l'ASCII ?",
            answers: ["64", "128", "256", "512"],
            correct: 1,
            explanation: "ASCII utilise 7 bits, donc 2⁷ = 128 caractères possibles"
        },
        {
            question: "Que vaut 1111₂ en décimal ?",
            answers: ["14", "15", "16", "17"],
            correct: 1,
            explanation: "1111₂ = 1×8 + 1×4 + 1×2 + 1×1 = 15"
        },
        {
            question: "Quel type permet de stocker du texte en Python ?",
            answers: ["text", "char", "string", "str"],
            correct: 3,
            explanation: "En Python, le type pour les chaînes de caractères est str"
        }
    ],
    "nsi-2": [
        {
            question: "Que vaut 17 // 5 en Python ?",
            answers: ["2", "3", "3.4", "4"],
            correct: 1,
            explanation: "L'opérateur // effectue une division entière. 17 ÷ 5 = 3 reste 2, donc 17 // 5 = 3"
        },
        {
            question: "Que vaut 17 % 5 ?",
            answers: ["2", "3", "12", "22"],
            correct: 0,
            explanation: "L'opérateur % donne le reste de la division : 17 = 5×3 + 2, donc 17 % 5 = 2"
        },
        {
            question: "Quel est le résultat de 2 ** 3 ?",
            answers: ["5", "6", "8", "9"],
            correct: 2,
            explanation: "L'opérateur ** est la puissance : 2³ = 8"
        },
        {
            question: "Comment afficher 'Bonjour' en Python ?",
            answers: ["display('Bonjour')", "print('Bonjour')", "echo('Bonjour')", "show('Bonjour')"],
            correct: 1,
            explanation: "La fonction print() permet d'afficher du texte en Python"
        },
        {
            question: "Que vaut (5 > 3) and (2 < 1) ?",
            answers: ["True", "False", "0", "1"],
            correct: 1,
            explanation: "5 > 3 est True mais 2 < 1 est False, donc True and False = False"
        }
    ],
    "nsi-3": [
        {
            question: "Quelle sera la sortie du code :\nx = 10\nif x > 5:\n    print('A')\nelse:\n    print('B')",
            answers: ["A", "B", "AB", "Erreur"],
            correct: 0,
            explanation: "x = 10, donc 10 > 5 est vrai, on affiche 'A'"
        },
        {
            question: "Combien de conditions peut-on avoir dans un if...elif...else ?",
            answers: ["2", "3", "Autant qu'on veut", "1"],
            correct: 2,
            explanation: "On peut chaîner autant de elif qu'on veut entre if et else"
        },
        {
            question: "Que vaut 'Pair' if 7 % 2 == 0 else 'Impair' ?",
            answers: ["Pair", "Impair", "True", "False"],
            correct: 1,
            explanation: "7 % 2 = 1, donc 7 % 2 == 0 est faux, on retourne 'Impair'"
        },
        {
            question: "Qu'affiche ce code ?\nage = 15\nif age >= 18:\n    print('Majeur')\nelif age >= 16:\n    print('Presque')\nelse:\n    print('Mineur')",
            answers: ["Majeur", "Presque", "Mineur", "Rien"],
            correct: 2,
            explanation: "age = 15, donc age < 16, on exécute le else et affiche 'Mineur'"
        },
        {
            question: "Quel opérateur permet de vérifier si deux valeurs sont différentes ?",
            answers: ["<>", "!=", "=/=", "not =="],
            correct: 1,
            explanation: "L'opérateur != teste la différence (not equal)"
        }
    ],
    "nsi-4": [
        {
            question: "Combien de fois s'exécute cette boucle ?\nfor i in range(5):\n    print(i)",
            answers: ["4", "5", "6", "Infini"],
            correct: 1,
            explanation: "range(5) génère les valeurs 0, 1, 2, 3, 4, soit 5 valeurs"
        },
        {
            question: "Que fait l'instruction 'break' dans une boucle ?",
            answers: ["Pause la boucle", "Sort de la boucle", "Redémarre la boucle", "Rien"],
            correct: 1,
            explanation: "break permet de sortir immédiatement de la boucle"
        },
        {
            question: "Quelle est la dernière valeur affichée ?\nfor i in range(2, 10, 3):\n    print(i)",
            answers: ["7", "8", "9", "10"],
            correct: 1,
            explanation: "range(2, 10, 3) génère 2, 5, 8 (on s'arrête avant 10)"
        },
        {
            question: "Que fait 'continue' dans une boucle ?",
            answers: ["Sort de la boucle", "Passe à l'itération suivante", "Recommence au début", "Arrête le programme"],
            correct: 1,
            explanation: "continue passe directement à l'itération suivante de la boucle"
        },
        {
            question: "Combien de fois affiche-t-on 'Hello' ?\nfor i in range(3):\n    for j in range(2):\n        print('Hello')",
            answers: ["3", "5", "6", "9"],
            correct: 2,
            explanation: "Boucle externe : 3 fois, boucle interne : 2 fois, donc 3 × 2 = 6"
        }
    ],
    "nsi-5": [
        {
            question: "Comment définir une fonction 'bonjour' sans paramètre ?",
            answers: ["function bonjour():", "def bonjour():", "func bonjour():", "define bonjour():"],
            correct: 1,
            explanation: "En Python, on utilise 'def' pour définir une fonction"
        },
        {
            question: "Que renvoie cette fonction ?\ndef mystere(x):\n    return x * 2\nprint(mystere(5))",
            answers: ["5", "7", "10", "25"],
            correct: 2,
            explanation: "La fonction multiplie x par 2, donc 5 × 2 = 10"
        },
        {
            question: "Quelle est la valeur de retour si on n'utilise pas 'return' ?",
            answers: ["0", "False", "None", "''"],
            correct: 2,
            explanation: "Une fonction sans return renvoie None par défaut"
        },
        {
            question: "Que vaut f(3) si def f(x, y=2): return x + y",
            answers: ["3", "5", "6", "Erreur"],
            correct: 1,
            explanation: "y a la valeur par défaut 2, donc f(3) = 3 + 2 = 5"
        },
        {
            question: "Une variable définie dans une fonction est :",
            answers: ["Globale", "Locale", "Les deux", "Ni l'un ni l'autre"],
            correct: 1,
            explanation: "Les variables définies dans une fonction sont locales à celle-ci"
        }
    ],
    "nsi-6": [
        {
            question: "Comment créer une liste vide en Python ?",
            answers: ["liste = ()", "liste = []", "liste = {}", "liste = <>"],
            correct: 1,
            explanation: "[] crée une liste vide en Python"
        },
        {
            question: "Que vaut fruits[1] si fruits = ['pomme', 'banane', 'kiwi'] ?",
            answers: ["pomme", "banane", "kiwi", "Erreur"],
            correct: 1,
            explanation: "L'index 1 correspond au deuxième élément"
        },
        {
            question: "Comment ajouter 'orange' à la fin d'une liste ?",
            answers: ["liste.add('orange')", "liste.append('orange')", "liste.insert('orange')", "liste.push('orange')"],
            correct: 1,
            explanation: "append() ajoute un élément à la fin de la liste"
        },
        {
            question: "Que fait len([1, 2, 3, 4, 5]) ?",
            answers: ["Retourne 4", "Retourne 5", "Retourne la somme", "Erreur"],
            correct: 1,
            explanation: "len() retourne le nombre d'éléments : 5"
        },
        {
            question: "Que vaut liste[-1] ?",
            answers: ["Premier élément", "Dernier élément", "Erreur", "Avant-dernier"],
            correct: 1,
            explanation: "L'index -1 accède au dernier élément"
        }
    ],

    "nsi-7": [
        {
            question: "Comment créer un dictionnaire vide ?",
            answers: ["dict = []", "dict = {}", "dict = ()", "dict = set()"],
            correct: 1,
            explanation: "{} crée un dictionnaire vide"
        },
        {
            question: "Comment accéder à la valeur associée à 'nom' ?",
            answers: ["dict.nom", "dict[nom]", "dict['nom']", "dict(nom)"],
            correct: 2,
            explanation: "On utilise dict['clé'] avec des guillemets"
        },
        {
            question: "Que retourne dict.keys() ?",
            answers: ["Les valeurs", "Les clés", "Les paires", "La taille"],
            correct: 1,
            explanation: "keys() retourne la liste des clés du dictionnaire"
        },
        {
            question: "Comment ajouter une clé 'age' avec la valeur 25 ?",
            answers: ["dict.add('age', 25)", "dict['age'] = 25", "dict.insert('age', 25)", "dict.append('age', 25)"],
            correct: 1,
            explanation: "dict['clé'] = valeur pour ajouter ou modifier"
        },
        {
            question: "Que vérifie 'nom' in dict ?",
            answers: ["Si 'nom' est une valeur", "Si 'nom' est une clé", "Si dict existe", "La taille"],
            correct: 1,
            explanation: "in vérifie la présence d'une clé dans le dictionnaire"
        }
    ],

    "nsi-8": [
        {
            question: "Que signifie CSV ?",
            answers: ["Computer System Values", "Comma-Separated Values", "Code Source Variables", "Create Save View"],
            correct: 1,
            explanation: "CSV = Comma-Separated Values (valeurs séparées par des virgules)"
        },
        {
            question: "Quel module Python permet de lire les CSV ?",
            answers: ["file", "csv", "read", "data"],
            correct: 1,
            explanation: "Le module csv de Python permet de manipuler les fichiers CSV"
        },
        {
            question: "Dans un CSV, comment sont séparées les colonnes généralement ?",
            answers: ["Espaces", "Virgules", "Points", "Slashes"],
            correct: 1,
            explanation: "Les colonnes sont séparées par des virgules (ou parfois des points-virgules)"
        },
        {
            question: "Une table en Python est souvent représentée comme :",
            answers: ["Une chaîne", "Une liste de dictionnaires", "Un tuple", "Un set"],
            correct: 1,
            explanation: "Une table est généralement une liste de dictionnaires, chaque dictionnaire étant une ligne"
        },
        {
            question: "Pour filtrer une table, on utilise souvent :",
            answers: ["Une boucle if", "Une compréhension de liste", "La méthode filter()", "Toutes ces réponses"],
            correct: 3,
            explanation: "Toutes ces méthodes peuvent filtrer une table"
        }
    ],

    "nsi-9": [
        {
            question: "Quelle méthode trie une liste en Python ?",
            answers: ["list.order()", "list.sort()", "list.arrange()", "list.rank()"],
            correct: 1,
            explanation: "La méthode sort() trie une liste sur place"
        },
        {
            question: "Comment trier par ordre décroissant ?",
            answers: ["sort(reverse=True)", "sort(desc=True)", "sort(order='desc')", "sort(-1)"],
            correct: 0,
            explanation: "Le paramètre reverse=True inverse l'ordre de tri"
        },
        {
            question: "Que fait sorted(liste) ?",
            answers: ["Trie sur place", "Retourne une nouvelle liste triée", "Vérifie si triée", "Erreur"],
            correct: 1,
            explanation: "sorted() retourne une nouvelle liste triée sans modifier l'original"
        },
        {
            question: "Pour trier par âge, on utilise :",
            answers: ["sort()", "sort(age)", "sort(key=lambda x: x['age'])", "sort('age')"],
            correct: 2,
            explanation: "Le paramètre key permet de spécifier le critère de tri avec une fonction lambda"
        },
        {
            question: "Quelle est la complexité du tri par fusion ?",
            answers: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
            correct: 2,
            explanation: "Le tri fusion a une complexité O(n log n)"
        }
    ],

    "nsi-10": [
        {
            question: "Que signifie CPU ?",
            answers: ["Computer Processing Unit", "Central Processing Unit", "Code Program Unit", "Central Power Unit"],
            correct: 1,
            explanation: "CPU = Central Processing Unit (processeur central)"
        },
        {
            question: "La RAM est-elle volatile ?",
            answers: ["Oui", "Non", "Parfois", "Dépend du type"],
            correct: 0,
            explanation: "La RAM est volatile : elle perd ses données à l'extinction"
        },
        {
            question: "Combien d'octets dans 1 Ko ?",
            answers: ["1000", "1024", "100", "512"],
            correct: 1,
            explanation: "1 Ko = 1024 octets (2¹⁰)"
        },
        {
            question: "Quel composant effectue les calculs ?",
            answers: ["RAM", "Disque dur", "UAL", "Bus"],
            correct: 2,
            explanation: "L'UAL (Unité Arithmétique et Logique) effectue les calculs"
        },
        {
            question: "Le modèle de von Neumann sépare-t-il données et instructions ?",
            answers: ["Oui", "Non", "Parfois", "Jamais"],
            correct: 1,
            explanation: "Dans le modèle de von Neumann, données et instructions partagent la même mémoire"
        }
    ],

    "nsi-11": [
        {
            question: "Que signifie IP ?",
            answers: ["Internet Provider", "Internet Protocol", "Internal Program", "Input Process"],
            correct: 1,
            explanation: "IP = Internet Protocol"
        },
        {
            question: "Format d'une adresse IPv4 ?",
            answers: ["xxx.xxx", "xxx.xxx.xxx", "xxx.xxx.xxx.xxx", "xxxxxxxx"],
            correct: 2,
            explanation: "Une adresse IPv4 a 4 nombres séparés par des points"
        },
        {
            question: "Que fait le protocole DNS ?",
            answers: ["Crypte les données", "Traduit nom de domaine en IP", "Compresse les fichiers", "Vérifie les erreurs"],
            correct: 1,
            explanation: "DNS traduit les noms de domaine (www.site.fr) en adresses IP"
        },
        {
            question: "HTTP fonctionne sur quel port par défaut ?",
            answers: ["21", "22", "80", "443"],
            correct: 2,
            explanation: "HTTP utilise le port 80 par défaut (HTTPS utilise 443)"
        },
        {
            question: "TCP garantit-il la fiabilité de transmission ?",
            answers: ["Oui", "Non", "Parfois", "Seulement en local"],
            correct: 0,
            explanation: "TCP garantit la livraison fiable des données avec accusés de réception"
        }
    ],

    "nsi-12": [
        {
            question: "Que signifie HTML ?",
            answers: ["High Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "HyperText Modern Language"],
            correct: 1,
            explanation: "HTML = HyperText Markup Language"
        },
        {
            question: "Quelle balise pour un lien ?",
            answers: ["<link>", "<a>", "<href>", "<url>"],
            correct: 1,
            explanation: "La balise <a> avec l'attribut href crée un lien"
        },
        {
            question: "Comment lier un fichier CSS ?",
            answers: ["<css src='...'>", "<link rel='stylesheet' href='...'>", "<style src='...'>", "<import css='...'>"],
            correct: 1,
            explanation: "<link rel='stylesheet' href='fichier.css'> dans le <head>"
        },
        {
            question: "Le sélecteur .classe en CSS sélectionne :",
            answers: ["Un ID", "Une balise", "Une classe", "Tout"],
            correct: 2,
            explanation: "Le point (.) sélectionne les éléments ayant cette classe"
        },
        {
            question: "Pour changer la couleur du texte en CSS ?",
            answers: ["text-color:", "color:", "font-color:", "text:"],
            correct: 1,
            explanation: "La propriété color modifie la couleur du texte"
        }
    ],

    "nsi-13": [
        {
            question: "Quelle est la complexité du tri par sélection ?",
            answers: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
            correct: 1,
            explanation: "Le tri par sélection a une complexité O(n²)"
        },
        {
            question: "Le tri par insertion est efficace sur :",
            answers: ["Données aléatoires", "Données presque triées", "Grandes listes", "Aucun cas"],
            correct: 1,
            explanation: "Le tri par insertion est très efficace sur des données déjà presque triées"
        },
        {
            question: "Le tri fusion utilise quelle technique ?",
            answers: ["Force brute", "Diviser pour régner", "Glouton", "Programmation dynamique"],
            correct: 1,
            explanation: "Le tri fusion divise le problème en sous-problèmes plus petits"
        },
        {
            question: "Quel tri est le plus rapide en moyenne ?",
            answers: ["Sélection", "Insertion", "Fusion", "Tous égaux"],
            correct: 2,
            explanation: "Le tri fusion (O(n log n)) est plus rapide que sélection et insertion (O(n²))"
        },
        {
            question: "Le tri par bulles compare :",
            answers: ["Éléments adjacents", "Premier et dernier", "Aléatoirement", "Par paires fixes"],
            correct: 0,
            explanation: "Le tri à bulles compare et échange des éléments adjacents"
        }
    ],

    "nsi-14": [
        {
            question: "La recherche dichotomique nécessite :",
            answers: ["Une liste triée", "Une liste non triée", "Un arbre", "Un graphe"],
            correct: 0,
            explanation: "La recherche dichotomique ne fonctionne que sur une liste triée"
        },
        {
            question: "Complexité de la recherche séquentielle ?",
            answers: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2,
            explanation: "Dans le pire cas, on parcourt tous les n éléments"
        },
        {
            question: "Complexité de la recherche dichotomique ?",
            answers: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1,
            explanation: "On divise par 2 à chaque étape : O(log n)"
        },
        {
            question: "Dans une liste de 1024 éléments, combien d'étapes max en dichotomique ?",
            answers: ["10", "11", "512", "1024"],
            correct: 1,
            explanation: "log₂(1024) = 10, donc 11 comparaisons au maximum"
        },
        {
            question: "La recherche séquentielle s'arrête :",
            answers: ["Toujours à la fin", "Quand élément trouvé", "Au milieu", "Jamais"],
            correct: 1,
            explanation: "On peut s'arrêter dès qu'on trouve l'élément cherché"
        }
    ],

    "nsi-15": [
        {
            question: "Une fonction récursive doit toujours avoir :",
            answers: ["Un return", "Un cas de base", "Une boucle", "Un print"],
            correct: 1,
            explanation: "Le cas de base arrête la récursion pour éviter la boucle infinie"
        },
        {
            question: "Que vaut factorielle(0) ?",
            answers: ["0", "1", "Erreur", "Infini"],
            correct: 1,
            explanation: "Par définition, 0! = 1"
        },
        {
            question: "Le risque principal de la récursivité ?",
            answers: ["Lenteur", "Stack overflow", "Erreur de syntaxe", "Perte de données"],
            correct: 1,
            explanation: "Trop d'appels récursifs peuvent saturer la pile d'appels"
        },
        {
            question: "fibonacci(5) vaut :",
            answers: ["3", "5", "8", "13"],
            correct: 1,
            explanation: "fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5"
        },
        {
            question: "La récursivité est toujours plus rapide que les boucles ?",
            answers: ["Oui", "Non", "Parfois", "Toujours égal"],
            correct: 1,
            explanation: "La récursivité est souvent moins efficace à cause de la pile d'appels"
        }
    ],
    "phy-1": [
        {
            question: "Combien de protons contient un atome de carbone <sup>12</sup><sub>6</sub>C ?",
            answers: ["6", "12", "18", "24"],
            correct: 0,
            explanation: "Le numéro atomique Z = 6 indique le nombre de protons"
        },
        {
            question: "Quelle est la charge d'un ion Na⁺ ?",
            answers: ["-1", "0", "+1", "+2"],
            correct: 2,
            explanation: "Na⁺ a perdu un électron, donc charge +1"
        },
        {
            question: "Combien de neutrons dans <sup>16</sup><sub>8</sub>O ?",
            answers: ["6", "8", "16", "24"],
            correct: 1,
            explanation: "Neutrons = A - Z = 16 - 8 = 8"
        },
        {
            question: "Quelle est la masse molaire de H₂O (H=1, O=16) ?",
            answers: ["16 g/mol", "17 g/mol", "18 g/mol", "19 g/mol"],
            correct: 2,
            explanation: "M(H₂O) = 2×1 + 16 = 18 g/mol"
        },
        {
            question: "Un anion est un ion :",
            answers: ["Positif", "Négatif", "Neutre", "Variable"],
            correct: 1,
            explanation: "Un anion a gagné des électrons, donc charge négative"
        }
    ],
    "phy-2": [
        {
            question: "Quelle est l'unité de la concentration molaire ?",
            answers: ["g/L", "mol/L", "g/mol", "L/mol"],
            correct: 1,
            explanation: "La concentration molaire s'exprime en mol/L (ou mol·L⁻¹)"
        },
        {
            question: "On dilue 2 fois une solution de concentration 10 mol/L. Quelle est la nouvelle concentration ?",
            answers: ["2 mol/L", "5 mol/L", "10 mol/L", "20 mol/L"],
            correct: 1,
            explanation: "C_fille = C_mère / F = 10 / 2 = 5 mol/L"
        },
        {
            question: "Dans une solution, le liquide en plus grande quantité est :",
            answers: ["Le soluté", "Le solvant", "La solution", "Le précipité"],
            correct: 1,
            explanation: "Le solvant est le liquide majoritaire (souvent l'eau)"
        },
        {
            question: "Si C = 2 mol/L et V = 0,5 L, quelle est la quantité de matière ?",
            answers: ["0,5 mol", "1 mol", "1,5 mol", "2 mol"],
            correct: 1,
            explanation: "n = C × V = 2 × 0,5 = 1 mol"
        },
        {
            question: "Lors d'une dilution, que se conserve-t-il ?",
            answers: ["Le volume", "La concentration", "La quantité de matière", "La masse du solvant"],
            correct: 2,
            explanation: "Lors d'une dilution, n = C₁V₁ = C₂V₂ (quantité de matière constante)"
        }
    ],
    "phy-3": [
        {
            question: "Quelle est l'unité du poids ?",
            answers: ["kg", "N", "J", "W"],
            correct: 1,
            explanation: "Le poids est une force, donc s'exprime en Newton (N)"
        },
        {
            question: "Un objet de masse 5 kg a un poids (g = 10 N/kg) de :",
            answers: ["5 N", "15 N", "50 N", "500 N"],
            correct: 2,
            explanation: "P = m × g = 5 × 10 = 50 N"
        },
        {
            question: "La poussée d'Archimède est dirigée vers :",
            answers: ["Le bas", "Le haut", "L'horizontale", "Le centre"],
            correct: 1,
            explanation: "La poussée d'Archimède est toujours verticale vers le haut"
        },
        {
            question: "Un objet flotte si :",
            answers: ["P > Π", "P < Π", "P = Π", "P = 0"],
            correct: 1,
            explanation: "Un objet flotte si son poids est inférieur à la poussée d'Archimède"
        },
        {
            question: "Si A exerce 10 N sur B, quelle force B exerce-t-il sur A ?",
            answers: ["0 N", "5 N", "10 N", "20 N"],
            correct: 2,
            explanation: "Principe des actions réciproques : forces égales en intensité mais opposées"
        }
    ],
    "phy-4": [
        {
            question: "Quelle est l'unité de l'énergie ?",
            answers: ["Watt", "Newton", "Joule", "Pascal"],
            correct: 2,
            explanation: "L'énergie s'exprime en Joule (J)"
        },
        {
            question: "Un objet de 2 kg à 10 m du sol a une énergie potentielle (g=10 N/kg) de :",
            answers: ["20 J", "100 J", "200 J", "1000 J"],
            correct: 2,
            explanation: "Epp = m × g × h = 2 × 10 × 10 = 200 J"
        },
        {
            question: "Un objet de 4 kg à 5 m/s a une énergie cinétique de :",
            answers: ["20 J", "40 J", "50 J", "100 J"],
            correct: 2,
            explanation: "Ec = ½ × m × v² = ½ × 4 × 25 = 50 J"
        },
        {
            question: "Si l'énergie mécanique se conserve, que devient l'énergie potentielle lors d'une chute ?",
            answers: ["Elle disparaît", "Elle augmente", "Elle se transforme en Ec", "Elle reste constante"],
            correct: 2,
            explanation: "Lors d'une chute, Epp diminue et Ec augmente (Em = Ec + Epp = constante)"
        },
        {
            question: "Quelle est l'unité de la puissance ?",
            answers: ["Joule", "Watt", "Newton", "Volt"],
            correct: 1,
            explanation: "La puissance s'exprime en Watt (W) = J/s"
        }
    ],
    "phy-5": [
        {
            question: "Quelle est la vitesse approximative du son dans l'air ?",
            answers: ["300 m/s", "340 m/s", "3000 m/s", "300 000 km/s"],
            correct: 1,
            explanation: "La vitesse du son dans l'air est d'environ 340 m/s"
        },
        {
            question: "Si f = 100 Hz, quelle est la période T ?",
            answers: ["0,01 s", "0,1 s", "1 s", "10 s"],
            correct: 0,
            explanation: "T = 1/f = 1/100 = 0,01 s"
        },
        {
            question: "Une onde qui nécessite un milieu matériel est :",
            answers: ["Électromagnétique", "Mécanique", "Lumineuse", "Radioactive"],
            correct: 1,
            explanation: "Les ondes mécaniques ont besoin d'un milieu pour se propager"
        },
        {
            question: "Les ultrasons ont une fréquence :",
            answers: ["< 20 Hz", "Entre 20 et 20000 Hz", "> 20000 Hz", "> 100000 Hz"],
            correct: 2,
            explanation: "Les ultrasons ont une fréquence supérieure à 20 kHz (20000 Hz)"
        },
        {
            question: "La lumière peut-elle se propager dans le vide ?",
            answers: ["Oui", "Non", "Seulement rouge", "Seulement UV"],
            correct: 0,
            explanation: "La lumière est une onde électromagnétique qui se propage dans le vide"
        }
    ],
    "math-1": [
        {
            question: "Quel est le discriminant de x² - 5x + 6 = 0 ?",
            answers: ["-1", "0", "1", "25"],
            correct: 2,
            explanation: "Δ = b² - 4ac = (-5)² - 4×1×6 = 25 - 24 = 1"
        },
        {
            question: "Combien de solutions a l'équation 2x² + 3x + 5 = 0 ?",
            answers: ["0", "1", "2", "3"],
            correct: 0,
            explanation: "Δ = 9 - 40 = -31 < 0, donc aucune solution réelle"
        },
        {
            question: "Si Δ = 0, combien de solutions l'équation a-t-elle ?",
            answers: ["0", "1", "2", "∞"],
            correct: 1,
            explanation: "Δ = 0 donne une solution double x₀ = -b/(2a)"
        },
        {
            question: "Pour f(x) = 2(x-3)² + 1, quelles sont les coordonnées du sommet ?",
            answers: ["(3, 1)", "(1, 3)", "(-3, 1)", "(3, -1)"],
            correct: 0,
            explanation: "Forme canonique a(x-α)²+β : sommet S(α, β) = (3, 1)"
        },
        {
            question: "Si les solutions sont x₁=2 et x₂=3, quelle est la forme factorisée de ax²+bx+c avec a=1 ?",
            answers: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-5)", "x²-5x+6"],
            correct: 0,
            explanation: "Forme factorisée : a(x-x₁)(x-x₂) = 1(x-2)(x-3)"
        }
    ],
    "math-2": [
        {
            question: "Quelle est la dérivée de f(x) = x³ ?",
            answers: ["x²", "3x²", "3x", "x³/3"],
            correct: 1,
            explanation: "Si f(x) = xⁿ alors f'(x) = nxⁿ⁻¹, donc (x³)' = 3x²"
        },
        {
            question: "Quelle est la dérivée de f(x) = 5 ?",
            answers: ["0", "1", "5", "5x"],
            correct: 0,
            explanation: "La dérivée d'une constante est toujours 0"
        },
        {
            question: "Si f'(x) > 0 sur [a;b], alors f est :",
            answers: ["Croissante", "Décroissante", "Constante", "Nulle"],
            correct: 0,
            explanation: "Si f'(x) > 0, la fonction est strictement croissante"
        },
        {
            question: "Quelle est la dérivée de f(x) = 3x² + 2x ?",
            answers: ["6x + 2", "3x + 2", "6x", "5x"],
            correct: 0,
            explanation: "(3x²)' + (2x)' = 6x + 2"
        },
        {
            question: "Le coefficient directeur de la tangente en a est égal à :",
            answers: ["f(a)", "f'(a)", "a", "0"],
            correct: 1,
            explanation: "Le coefficient directeur de la tangente en a est le nombre dérivé f'(a)"
        }
    ],
    "math-3": [
        {
            question: "Une suite arithmétique de raison 3 et u₀=5 a pour terme u₅ :",
            answers: ["15", "18", "20", "25"],
            correct: 2,
            explanation: "uₙ = u₀ + n×r, donc u₅ = 5 + 5×3 = 20"
        },
        {
            question: "Une suite géométrique de raison 2 et u₀=3 a pour terme u₄ :",
            answers: ["11", "24", "48", "96"],
            correct: 2,
            explanation: "uₙ = u₀ × qⁿ, donc u₄ = 3 × 2⁴ = 3 × 16 = 48"
        },
        {
            question: "Si |q| < 1, que vaut lim uₙ pour une suite géométrique ?",
            answers: ["-∞", "0", "+∞", "q"],
            correct: 1,
            explanation: "Pour une suite géométrique avec |q| < 1, lim uₙ = 0"
        },
        {
            question: "La somme 1 + 2 + 3 + ... + 100 vaut :",
            answers: ["5000", "5050", "10000", "10100"],
            correct: 1,
            explanation: "S = n(premier + dernier)/2 = 100(1+100)/2 = 5050"
        },
        {
            question: "Une suite arithmétique de raison négative est :",
            answers: ["Croissante", "Décroissante", "Constante", "Variable"],
            correct: 1,
            explanation: "Si r < 0, alors u_{n+1} < uₙ, la suite est décroissante"
        }
    ],
    "math-4": [
        {
            question: "Si →u(2;3) et →v(4;1), que vaut →u · →v ?",
            answers: ["6", "8", "11", "14"],
            correct: 2,
            explanation: "→u · →v = 2×4 + 3×1 = 8 + 3 = 11"
        },
        {
            question: "Deux vecteurs sont orthogonaux si leur produit scalaire vaut :",
            answers: ["-1", "0", "1", "90"],
            correct: 1,
            explanation: "→u ⊥ →v ⟺ →u · →v = 0"
        },
        {
            question: "Si ||→u|| = 3 et ||→v|| = 4 avec un angle de 60°, que vaut →u · →v ?",
            answers: ["6", "7", "12", "24"],
            correct: 0,
            explanation: "→u · →v = ||→u|| × ||→v|| × cos(60°) = 3 × 4 × 0,5 = 6"
        },
        {
            question: "Que vaut →u · →u si ||→u|| = 5 ?",
            answers: ["0", "5", "10", "25"],
            correct: 3,
            explanation: "→u · →u = ||→u||² = 5² = 25"
        },
        {
            question: "L'équation d'un cercle de centre O(0;0) et de rayon 3 est :",
            answers: ["x + y = 3", "x² + y² = 3", "x² + y² = 9", "x + y = 9"],
            correct: 2,
            explanation: "Cercle de centre (0;0) et rayon R : x² + y² = R² = 9"
        }
    ],
    "math-5": [
        {
            question: "Une probabilité est toujours comprise entre :",
            answers: ["-1 et 1", "0 et 1", "0 et 100", "-∞ et +∞"],
            correct: 1,
            explanation: "Par définition, 0 ≤ P(A) ≤ 1 pour tout événement A"
        },
        {
            question: "Si P(A) = 0,7, que vaut P(Ā) ?",
            answers: ["0,3", "0,7", "1,4", "-0,7"],
            correct: 0,
            explanation: "P(Ā) = 1 - P(A) = 1 - 0,7 = 0,3"
        },
        {
            question: "L'espérance de X qui vaut 1 avec probabilité 0,6 et 0 avec probabilité 0,4 est :",
            answers: ["0,4", "0,5", "0,6", "1"],
            correct: 2,
            explanation: "E(X) = 1×0,6 + 0×0,4 = 0,6"
        },
        {
            question: "Pour une loi binomiale B(10, 0,5), que vaut E(X) ?",
            answers: ["0,5", "5", "10", "20"],
            correct: 1,
            explanation: "E(X) = np = 10 × 0,5 = 5"
        },
        {
            question: "On lance un dé équilibré. Quelle est la probabilité d'obtenir un nombre pair ?",
            answers: ["1/6", "1/3", "1/2", "2/3"],
            correct: 2,
            explanation: "3 issues favorables (2,4,6) sur 6 possibles : P = 3/6 = 1/2"
        }
    ]
};
