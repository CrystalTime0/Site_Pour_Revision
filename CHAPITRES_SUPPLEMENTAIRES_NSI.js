// ============================================
// CHAPITRES SUPPLÉMENTAIRES POUR TOUTE L'ANNÉE
// ============================================
// Copie ces chapitres dans data.js pour avoir le programme complet

// ============================================
// NSI - CHAPITRES SUPPLÉMENTAIRES (6-15)
// ============================================

// À ajouter dans coursData.nsi.chapters après nsi-5 :

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
liste_vide = []
        </pre>
        
        <h4>Accéder aux éléments</h4>
        <p>On utilise l'index (commence à 0) :</p>
        <pre>
fruits = ["pomme", "banane", "orange"]
print(fruits[0])   # Affiche "pomme"
print(fruits[2])   # Affiche "orange"
print(fruits[-1])  # Dernier élément: "orange"
        </pre>
        
        <h4>Modifier une liste</h4>
        <pre>
fruits[1] = "fraise"  # Modifier un élément
fruits.append("kiwi") # Ajouter à la fin
fruits.insert(1, "mangue") # Insérer à l'index 1
fruits.remove("pomme") # Supprimer un élément
del fruits[0]          # Supprimer par index
        </pre>
        
        <h4>Méthodes utiles</h4>
        <ul>
            <li><code>len(liste)</code> : longueur de la liste</li>
            <li><code>liste.sort()</code> : trier la liste</li>
            <li><code>liste.reverse()</code> : inverser l'ordre</li>
            <li><code>liste.count(x)</code> : compter les occurrences de x</li>
            <li><code>x in liste</code> : vérifier si x est dans la liste</li>
        </ul>
        
        <h4>Parcourir une liste</h4>
        <pre>
for fruit in fruits:
    print(fruit)

for i in range(len(fruits)):
    print(f"Index {i}: {fruits[i]}")
        </pre>
    `
},
{
    id: "nsi-7",
    title: "Les dictionnaires",
    description: "Structure clé-valeur",
    content: `
        <h4>Créer un dictionnaire</h4>
        <p>Un dictionnaire associe des clés à des valeurs :</p>
        <pre>
personne = {
    "nom": "Dupont",
    "prenom": "Alice",
    "age": 16,
    "ville": "Paris"
}
dict_vide = {}
        </pre>
        
        <h4>Accéder aux valeurs</h4>
        <pre>
print(personne["nom"])     # "Dupont"
print(personne.get("age")) # 16
print(personne.get("pays", "France")) # Valeur par défaut
        </pre>
        
        <h4>Modifier un dictionnaire</h4>
        <pre>
personne["age"] = 17          # Modifier
personne["email"] = "a@b.fr"  # Ajouter
del personne["ville"]         # Supprimer
        </pre>
        
        <h4>Méthodes utiles</h4>
        <ul>
            <li><code>dict.keys()</code> : liste des clés</li>
            <li><code>dict.values()</code> : liste des valeurs</li>
            <li><code>dict.items()</code> : liste des paires (clé, valeur)</li>
            <li><code>cle in dict</code> : vérifier l'existence d'une clé</li>
        </ul>
        
        <h4>Parcourir un dictionnaire</h4>
        <pre>
for cle, valeur in personne.items():
    print(f"{cle}: {valeur}")

for cle in personne.keys():
    print(cle)
        </pre>
    `
},
{
    id: "nsi-8",
    title: "Tables et fichiers CSV",
    description: "Manipulation de données tabulaires",
    content: `
        <h4>Format CSV</h4>
        <p>CSV (Comma-Separated Values) : format texte pour stocker des données tabulaires.</p>
        <pre>
nom,prenom,age
Dupont,Alice,16
Martin,Bob,17
        </pre>
        
        <h4>Lire un fichier CSV</h4>
        <pre>
import csv

with open('donnees.csv', 'r') as fichier:
    lecteur = csv.reader(fichier)
    for ligne in lecteur:
        print(ligne)
        </pre>
        
        <h4>Lire avec DictReader</h4>
        <pre>
import csv

with open('donnees.csv', 'r') as fichier:
    lecteur = csv.DictReader(fichier)
    for ligne in lecteur:
        print(ligne['nom'], ligne['age'])
        </pre>
        
        <h4>Écrire dans un CSV</h4>
        <pre>
import csv

donnees = [
    ['nom', 'age'],
    ['Alice', '16'],
    ['Bob', '17']
]

with open('sortie.csv', 'w', newline='') as fichier:
    writer = csv.writer(fichier)
    writer.writerows(donnees)
        </pre>
        
        <h4>Manipuler des tables</h4>
        <p>Une table est une liste de dictionnaires :</p>
        <pre>
eleves = [
    {'nom': 'Alice', 'note': 15},
    {'nom': 'Bob', 'note': 12}
]

# Filtrer
bons_eleves = [e for e in eleves if e['note'] >= 14]

# Moyenne
moyenne = sum(e['note'] for e in eleves) / len(eleves)
        </pre>
    `
},
{
    id: "nsi-9",
    title: "Traitement de données en table",
    description: "Recherche, tri, filtrage",
    content: `
        <h4>Recherche dans une table</h4>
        <pre>
def chercher(table, cle, valeur):
    """Cherche tous les enregistrements où table[cle] == valeur"""
    resultat = []
    for ligne in table:
        if ligne[cle] == valeur:
            resultat.append(ligne)
    return resultat

# Utilisation
eleves_paris = chercher(eleves, 'ville', 'Paris')
        </pre>
        
        <h4>Tri d'une table</h4>
        <pre>
# Trier par âge
eleves_tries = sorted(eleves, key=lambda x: x['age'])

# Trier par nom (ordre décroissant)
eleves_tries = sorted(eleves, key=lambda x: x['nom'], reverse=True)
        </pre>
        
        <h4>Filtrage</h4>
        <pre>
# Majeurs uniquement
majeurs = [e for e in eleves if e['age'] >= 18]

# Notes supérieures à 12
admis = [e for e in eleves if e['note'] > 12]
        </pre>
        
        <h4>Fusion de tables</h4>
        <pre>
# Jointure sur un champ commun
def fusionner(table1, table2, cle):
    resultat = []
    for ligne1 in table1:
        for ligne2 in table2:
            if ligne1[cle] == ligne2[cle]:
                nouvelle_ligne = {**ligne1, **ligne2}
                resultat.append(nouvelle_ligne)
    return resultat
        </pre>
        
        <h4>Statistiques</h4>
        <pre>
# Moyenne
notes = [e['note'] for e in eleves]
moyenne = sum(notes) / len(notes)

# Maximum
meilleure_note = max(notes)

# Comptage
nb_admis = sum(1 for e in eleves if e['note'] >= 10)
        </pre>
    `
},
{
    id: "nsi-10",
    title: "Architecture des ordinateurs",
    description: "Composants, modèle de von Neumann",
    content: `
        <h4>Modèle de von Neumann</h4>
        <p>Architecture de base des ordinateurs :</p>
        <ul>
            <li><strong>Unité de contrôle</strong> : orchestre les opérations</li>
            <li><strong>UAL (Unité Arithmétique et Logique)</strong> : effectue les calculs</li>
            <li><strong>Mémoire</strong> : stocke programmes et données</li>
            <li><strong>Entrées/Sorties</strong> : communication avec l'extérieur</li>
        </ul>
        
        <h4>Le processeur (CPU)</h4>
        <p><strong>Fréquence</strong> : nombre d'opérations par seconde (Hz)</p>
        <p><strong>Cœurs</strong> : unités de calcul parallèles</p>
        <p><strong>Cache</strong> : mémoire ultra-rapide intégrée</p>
        
        <h4>La mémoire</h4>
        <p><strong>RAM (Random Access Memory)</strong></p>
        <ul>
            <li>Volatile (perdue à l'extinction)</li>
            <li>Rapide</li>
            <li>Stocke les programmes en cours d'exécution</li>
        </ul>
        
        <p><strong>ROM (Read Only Memory)</strong></p>
        <ul>
            <li>Non volatile</li>
            <li>Contient le BIOS/UEFI</li>
        </ul>
        
        <p><strong>Stockage</strong> : disque dur (HDD) ou SSD</p>
        
        <h4>Unités de mesure</h4>
        <pre>
1 octet = 8 bits
1 Ko = 1024 octets
1 Mo = 1024 Ko = 1 048 576 octets
1 Go = 1024 Mo
1 To = 1024 Go
        </pre>
        
        <h4>Bus de communication</h4>
        <p>Relient les composants :</p>
        <ul>
            <li>Bus de données : transfert des données</li>
            <li>Bus d'adresses : désignation de l'emplacement mémoire</li>
            <li>Bus de contrôle : signaux de synchronisation</li>
        </ul>
    `
},
{
    id: "nsi-11",
    title: "Réseaux et protocoles",
    description: "Modèle OSI, TCP/IP, HTTP",
    content: `
        <h4>Qu'est-ce qu'un réseau ?</h4>
        <p>Ensemble d'ordinateurs interconnectés pour échanger des données.</p>
        
        <h4>Types de réseaux</h4>
        <ul>
            <li><strong>LAN</strong> (Local Area Network) : réseau local (maison, entreprise)</li>
            <li><strong>WAN</strong> (Wide Area Network) : réseau étendu (Internet)</li>
            <li><strong>WiFi</strong> : réseau sans fil</li>
        </ul>
        
        <h4>Adresse IP</h4>
        <p>Identifiant unique d'une machine sur le réseau.</p>
        <p><strong>IPv4</strong> : 192.168.1.1 (4 nombres de 0 à 255)</p>
        <p><strong>IPv6</strong> : 2001:0db8:0000:0000:0000:ff00:0042:8329</p>
        
        <h4>Protocole TCP/IP</h4>
        <p><strong>IP (Internet Protocol)</strong> : routage des paquets</p>
        <p><strong>TCP (Transmission Control Protocol)</strong> : fiabilité de la transmission</p>
        
        <h4>Protocole HTTP</h4>
        <p>Communication Web client-serveur</p>
        <pre>
Requête GET :
GET /index.html HTTP/1.1
Host: www.exemple.fr

Réponse :
HTTP/1.1 200 OK
Content-Type: text/html
...
        </pre>
        
        <h4>DNS (Domain Name System)</h4>
        <p>Traduit les noms de domaine en adresses IP</p>
        <p>www.exemple.fr → 192.0.2.1</p>
        
        <h4>Modèle en couches</h4>
        <ol>
            <li>Application (HTTP, FTP, SMTP)</li>
            <li>Transport (TCP, UDP)</li>
            <li>Internet (IP)</li>
            <li>Accès réseau (Ethernet, WiFi)</li>
        </ol>
    `
},
{
    id: "nsi-12",
    title: "Web : HTML et CSS",
    description: "Structure et mise en forme des pages web",
    content: `
        <h4>HTML : Structure d'une page</h4>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Ma page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Titre principal&lt;/h1&gt;
    &lt;p&gt;Un paragraphe.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
        </pre>
        
        <h4>Balises HTML courantes</h4>
        <ul>
            <li><code>&lt;h1&gt; à &lt;h6&gt;</code> : titres</li>
            <li><code>&lt;p&gt;</code> : paragraphe</li>
            <li><code>&lt;a href="..."&gt;</code> : lien</li>
            <li><code>&lt;img src="..."&gt;</code> : image</li>
            <li><code>&lt;div&gt;</code> : conteneur block</li>
            <li><code>&lt;span&gt;</code> : conteneur inline</li>
            <li><code>&lt;ul&gt;&lt;li&gt;</code> : liste à puces</li>
        </ul>
        
        <h4>CSS : Mise en forme</h4>
        <pre>
/* Sélecteur de balise */
p {
    color: blue;
    font-size: 16px;
}

/* Sélecteur de classe */
.important {
    font-weight: bold;
}

/* Sélecteur d'ID */
#header {
    background-color: #f0f0f0;
}
        </pre>
        
        <h4>Propriétés CSS courantes</h4>
        <ul>
            <li><code>color</code> : couleur du texte</li>
            <li><code>background-color</code> : couleur de fond</li>
            <li><code>font-size</code> : taille du texte</li>
            <li><code>margin</code> : marge externe</li>
            <li><code>padding</code> : marge interne</li>
            <li><code>border</code> : bordure</li>
        </ul>
        
        <h4>Lier CSS à HTML</h4>
        <pre>
&lt;link rel="stylesheet" href="style.css"&gt;
        </pre>
    `
},
{
    id: "nsi-13",
    title: "Algorithmes de tri",
    description: "Tri par sélection, insertion, fusion",
    content: `
        <h4>Tri par sélection</h4>
        <p>Principe : chercher le minimum et le placer au début</p>
        <pre>
def tri_selection(liste):
    for i in range(len(liste)):
        min_index = i
        for j in range(i + 1, len(liste)):
            if liste[j] &lt; liste[min_index]:
                min_index = j
        liste[i], liste[min_index] = liste[min_index], liste[i]
    return liste
        </pre>
        <p><strong>Complexité</strong> : O(n²)</p>
        
        <h4>Tri par insertion</h4>
        <p>Principe : insérer chaque élément à sa place</p>
        <pre>
def tri_insertion(liste):
    for i in range(1, len(liste)):
        cle = liste[i]
        j = i - 1
        while j &gt;= 0 and liste[j] &gt; cle:
            liste[j + 1] = liste[j]
            j -= 1
        liste[j + 1] = cle
    return liste
        </pre>
        <p><strong>Complexité</strong> : O(n²) pire cas, O(n) meilleur cas</p>
        
        <h4>Tri fusion (merge sort)</h4>
        <p>Principe : diviser pour régner</p>
        <pre>
def fusion(gauche, droite):
    resultat = []
    i = j = 0
    while i &lt; len(gauche) and j &lt; len(droite):
        if gauche[i] &lt; droite[j]:
            resultat.append(gauche[i])
            i += 1
        else:
            resultat.append(droite[j])
            j += 1
    resultat.extend(gauche[i:])
    resultat.extend(droite[j:])
    return resultat

def tri_fusion(liste):
    if len(liste) &lt;= 1:
        return liste
    milieu = len(liste) // 2
    gauche = tri_fusion(liste[:milieu])
    droite = tri_fusion(liste[milieu:])
    return fusion(gauche, droite)
        </pre>
        <p><strong>Complexité</strong> : O(n log n)</p>
    `
},
{
    id: "nsi-14",
    title: "Algorithmes de recherche",
    description: "Recherche séquentielle et dichotomique",
    content: `
        <h4>Recherche séquentielle</h4>
        <p>Parcourir la liste élément par élément</p>
        <pre>
def recherche_sequentielle(liste, valeur):
    for i in range(len(liste)):
        if liste[i] == valeur:
            return i  # Retourne l'index
    return -1  # Non trouvé
        </pre>
        <p><strong>Complexité</strong> : O(n)</p>
        
        <h4>Recherche dichotomique</h4>
        <p>Pour une liste <strong>triée</strong>, diviser l'espace de recherche par 2</p>
        <pre>
def recherche_dichotomique(liste, valeur):
    gauche = 0
    droite = len(liste) - 1
    
    while gauche &lt;= droite:
        milieu = (gauche + droite) // 2
        
        if liste[milieu] == valeur:
            return milieu
        elif liste[milieu] &lt; valeur:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    
    return -1
        </pre>
        <p><strong>Complexité</strong> : O(log n)</p>
        
        <h4>Version récursive</h4>
        <pre>
def dicho_recursive(liste, valeur, gauche, droite):
    if gauche &gt; droite:
        return -1
    
    milieu = (gauche + droite) // 2
    
    if liste[milieu] == valeur:
        return milieu
    elif liste[milieu] &lt; valeur:
        return dicho_recursive(liste, valeur, milieu + 1, droite)
    else:
        return dicho_recursive(liste, valeur, gauche, milieu - 1)
        </pre>
        
        <h4>Comparaison</h4>
        <p>Pour une liste de 1 000 000 d'éléments :</p>
        <ul>
            <li>Séquentielle : jusqu'à 1 000 000 comparaisons</li>
            <li>Dichotomique : environ 20 comparaisons</li>
        </ul>
    `
},
{
    id: "nsi-15",
    title: "Récursivité",
    description: "Fonctions récursives, pile d'appels",
    content: `
        <h4>Qu'est-ce que la récursivité ?</h4>
        <p>Une fonction récursive s'appelle elle-même.</p>
        
        <h4>Structure d'une fonction récursive</h4>
        <ol>
            <li><strong>Cas de base</strong> : condition d'arrêt</li>
            <li><strong>Cas récursif</strong> : appel à soi-même</li>
        </ol>
        
        <h4>Exemple : factorielle</h4>
        <pre>
def factorielle(n):
    # Cas de base
    if n == 0 or n == 1:
        return 1
    # Cas récursif
    else:
        return n * factorielle(n - 1)

# factorielle(5) = 5 * 4 * 3 * 2 * 1 = 120
        </pre>
        
        <h4>Exemple : suite de Fibonacci</h4>
        <pre>
def fibonacci(n):
    if n &lt;= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# fibonacci(6) = 8
        </pre>
        
        <h4>Exemple : somme d'une liste</h4>
        <pre>
def somme_recursive(liste):
    if len(liste) == 0:
        return 0
    else:
        return liste[0] + somme_recursive(liste[1:])
        </pre>
        
        <h4>Pile d'appels</h4>
        <p>Chaque appel récursif est empilé en mémoire</p>
        <pre>
factorielle(3)
  → 3 * factorielle(2)
       → 2 * factorielle(1)
            → 1
       → 2 * 1 = 2
  → 3 * 2 = 6
        </pre>
        
        <h4>Attention</h4>
        <ul>
            <li>Risque de débordement de pile (stack overflow)</li>
            <li>Moins efficace que les boucles pour certains problèmes</li>
            <li>Toujours prévoir un cas de base !</li>
        </ul>
    `
}

// ============================================
// NSI - QUESTIONS SUPPLÉMENTAIRES (nsi-6 à nsi-15)
// ============================================

// À ajouter dans questionsData :

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
]
