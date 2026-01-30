// Base de données des cours et questions
const coursData = {
    nsi: {
        name: "NSI (Numérique et Sciences Informatiques)",
        chapters: [
            {
                id: "nsi-1",
                title: "Représentation des données",
                description: "Types et valeurs de base, bases numériques",
                content: `
                    <h4>Introduction</h4>
                    <p>La représentation des données est fondamentale en informatique. Les ordinateurs ne comprennent que le langage binaire (0 et 1).</p>
                    
                    <h4>Les bases numériques</h4>
                    <p><strong>Base 2 (binaire) :</strong> Utilise uniquement 0 et 1. Par exemple, 1011₂ = 11₁₀</p>
                    <p><strong>Base 10 (décimale) :</strong> Notre système habituel avec les chiffres de 0 à 9.</p>
                    <p><strong>Base 16 (hexadécimale) :</strong> Utilise 0-9 et A-F. Par exemple, FF₁₆ = 255₁₀</p>
                    
                    <h4>Conversion binaire → décimal</h4>
                    <p>Pour convertir 1011₂ en base 10 :</p>
                    <pre>1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11</pre>
                    
                    <h4>Les types de données</h4>
                    <ul>
                        <li><strong>Entiers (int) :</strong> nombres sans virgule (-5, 0, 42)</li>
                        <li><strong>Flottants (float) :</strong> nombres à virgule (3.14, -2.5)</li>
                        <li><strong>Booléens (bool) :</strong> True ou False</li>
                        <li><strong>Chaînes (str) :</strong> texte entre guillemets ("Hello")</li>
                    </ul>
                    
                    <h4>Encodage des caractères</h4>
                    <p><strong>ASCII :</strong> Code les caractères sur 7 bits (128 caractères possibles)</p>
                    <p><strong>UTF-8 :</strong> Encodage universel, compatible ASCII, supporte tous les caractères du monde</p>
                `
            },
            {
                id: "nsi-2",
                title: "Python : Variables et opérations",
                description: "Syntaxe Python, variables, opérateurs",
                content: `
                    <h4>Variables en Python</h4>
                    <p>Une variable est un conteneur pour stocker des données :</p>
                    <pre>
nom = "Alice"
age = 16
taille = 1.65
est_eleve = True</pre>
                    
                    <h4>Les opérateurs arithmétiques</h4>
                    <ul>
                        <li><code>+</code> : addition</li>
                        <li><code>-</code> : soustraction</li>
                        <li><code>*</code> : multiplication</li>
                        <li><code>/</code> : division (résultat flottant)</li>
                        <li><code>//</code> : division entière</li>
                        <li><code>%</code> : modulo (reste de la division)</li>
                        <li><code>**</code> : puissance</li>
                    </ul>
                    
                    <h4>Les opérateurs de comparaison</h4>
                    <pre>
x == y  # égal à
x != y  # différent de
x < y   # inférieur à
x <= y  # inférieur ou égal à
x > y   # supérieur à
x >= y  # supérieur ou égal à</pre>
                    
                    <h4>Les opérateurs logiques</h4>
                    <pre>
and  # ET logique
or   # OU logique
not  # NON logique</pre>
                    
                    <h4>Affichage et saisie</h4>
                    <pre>
# Afficher
print("Bonjour", nom)

# Saisir
reponse = input("Votre nom ? ")
nombre = int(input("Un nombre ? "))</pre>
                `
            },
            {
                id: "nsi-3",
                title: "Structures conditionnelles",
                description: "if, elif, else en Python",
                content: `
                    <h4>Structure if simple</h4>
                    <pre>
if condition:
    # code exécuté si condition vraie
    print("Condition vraie")</pre>
                    
                    <h4>Structure if...else</h4>
                    <pre>
age = 16
if age >= 18:
    print("Majeur")
else:
    print("Mineur")</pre>
                    
                    <h4>Structure if...elif...else</h4>
                    <pre>
note = 15
if note >= 16:
    print("Très bien")
elif note >= 14:
    print("Bien")
elif note >= 12:
    print("Assez bien")
else:
    print("Peut mieux faire")</pre>
                    
                    <h4>Conditions composées</h4>
                    <pre>
age = 16
permis = True

if age >= 18 and permis:
    print("Peut conduire")
elif age >= 18 or permis:
    print("Conditions partielles")
else:
    print("Ne peut pas conduire")</pre>
                    
                    <h4>Opérateur ternaire</h4>
                    <pre>
resultat = "Pair" if nombre % 2 == 0 else "Impair"</pre>
                `
            },
            {
                id: "nsi-4",
                title: "Boucles",
                description: "for et while en Python",
                content: `
                    <h4>Boucle for avec range()</h4>
                    <pre>
# Affiche 0 à 4
for i in range(5):
    print(i)

# Affiche 2 à 8 (pas de 2)
for i in range(2, 10, 2):
    print(i)</pre>
                    
                    <h4>Boucle for sur une liste</h4>
                    <pre>
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(fruit)</pre>
                    
                    <h4>Boucle while</h4>
                    <pre>
compteur = 0
while compteur < 5:
    print(compteur)
    compteur += 1</pre>
                    
                    <h4>Break et continue</h4>
                    <pre>
# Break : sortir de la boucle
for i in range(10):
    if i == 5:
        break
    print(i)  # Affiche 0 à 4

# Continue : passer à l'itération suivante
for i in range(5):
    if i == 2:
        continue
    print(i)  # Affiche 0, 1, 3, 4</pre>
                    
                    <h4>Boucles imbriquées</h4>
                    <pre>
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})")</pre>
                `
            },
            {
                id: "nsi-5",
                title: "Fonctions",
                description: "Définir et utiliser des fonctions",
                content: `
                    <h4>Définir une fonction</h4>
                    <pre>
def dire_bonjour():
    print("Bonjour !")

dire_bonjour()  # Appel de la fonction</pre>
                    
                    <h4>Fonction avec paramètres</h4>
                    <pre>
def saluer(nom):
    print(f"Bonjour {nom} !")

saluer("Alice")
saluer("Bob")</pre>
                    
                    <h4>Fonction avec valeur de retour</h4>
                    <pre>
def carre(x):
    return x ** 2

resultat = carre(5)
print(resultat)  # Affiche 25</pre>
                    
                    <h4>Paramètres par défaut</h4>
                    <pre>
def puissance(nombre, exposant=2):
    return nombre ** exposant

print(puissance(3))      # 9 (exposant=2 par défaut)
print(puissance(3, 3))   # 27</pre>
                    
                    <h4>Portée des variables</h4>
                    <pre>
x = 10  # Variable globale

def fonction():
    x = 5  # Variable locale
    print(x)  # Affiche 5

fonction()
print(x)  # Affiche 10</pre>
                    
                    <h4>Documentation (docstring)</h4>
                    <pre>
def aire_rectangle(longueur, largeur):
    """
    Calcule l'aire d'un rectangle.
    
    Args:
        longueur: longueur du rectangle
        largeur: largeur du rectangle
    
    Returns:
        L'aire du rectangle
    """
    return longueur * largeur</pre>
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
