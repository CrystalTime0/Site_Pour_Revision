# 🎬 TUTORIEL PAS À PAS : Héberge ton site en 10 minutes

## 🎯 Méthode la plus simple : Glitch

### ⏱️ Temps : 2 minutes | Difficulté : ⭐

---

## 📺 ÉTAPE PAR ÉTAPE

### ▶️ ÉTAPE 1 : Prépare ton projet (1 minute)

```
✅ Tu as déjà le dossier revision-site
✅ Tous les fichiers sont dedans
✅ C'est prêt !
```

---

### ▶️ ÉTAPE 2 : Va sur Glitch (10 secondes)

1. Ouvre ton navigateur
2. Tape dans la barre d'adresse : **glitch.com**
3. Appuie sur Entrée

```
🌐 https://glitch.com
```

---

### ▶️ ÉTAPE 3 : Connecte-toi (30 secondes)

1. Clique sur **"Sign in"** en haut à droite
2. Choisis **"Sign in with GitHub"**
3. *(Si tu n'as pas de compte GitHub, clique "Sign up" d'abord)*
4. Autorise Glitch à accéder à ton GitHub

```
👤 GitHub → Autorise → ✅ Connecté
```

---

### ▶️ ÉTAPE 4 : Crée un nouveau projet (20 secondes)

1. Clique sur **"New Project"** en haut à droite
2. Dans le menu, clique sur **"glitch-hello-node"**
3. Ton projet démarre avec des fichiers d'exemple

```
📁 Nouveau projet créé !
```

---

### ▶️ ÉTAPE 5 : Supprime les fichiers d'exemple (10 secondes)

1. À gauche, tu vois la liste des fichiers
2. Clique sur **"server.js"** → Clic droit → **Delete**
3. Fais pareil pour **"package.json"**
4. Garde seulement le dossier **"public"** (vide-le)

```
🗑️ Anciens fichiers supprimés
```

---

### ▶️ ÉTAPE 6 : Upload tes fichiers (1 minute)

1. Clique sur **"Assets"** en bas à gauche
2. Clique sur **"Upload an asset"**
3. OU directement : **glisse-dépose** ton dossier dans l'éditeur

**Fichiers à uploader :**
```
📄 server.js
📄 package.json
📁 public/
   📄 index.html
   📁 css/
      📄 style.css
   📁 js/
      📄 data.js
      📄 app.js
```

**Astuce** : Tu peux tout sélectionner et glisser-déposer d'un coup !

---

### ▶️ ÉTAPE 7 : Installe les dépendances (automatique)

Glitch détecte automatiquement `package.json` et lance :
```bash
npm install
```

**Tu verras dans les logs :**
```
📦 Installing dependencies...
✅ Dependencies installed
```

---

### ▶️ ÉTAPE 8 : Ton site est EN LIGNE ! (instantané)

1. En haut de la page, tu vois **"Show"**
2. Clique sur **"Show"** → **"In a New Window"**
3. 🎉 **TON SITE S'OUVRE !**

**Ton URL :**
```
https://ton-projet-glitch.glitch.me
```

*(Le nom se génère automatiquement, tu peux le changer)*

---

### ▶️ ÉTAPE 9 : Personnalise le nom (optionnel)

1. Clique sur le nom du projet en haut à gauche
2. Tape un nouveau nom : **"revision-premiere"**
3. Appuie sur Entrée

**Nouvelle URL :**
```
https://revision-premiere.glitch.me
```

---

### ▶️ ÉTAPE 10 : Partage ton site ! 🎊

**Ton site est accessible 24/7 à :**
```
🌐 https://ton-nom.glitch.me
```

Envoie ce lien à ta classe !

---

## 🎬 MÉTHODE ALTERNATIVE : Render (plus pro)

### ⏱️ Temps : 10 minutes | Difficulté : ⭐⭐⭐

---

### ▶️ PARTIE A : Mets ton code sur GitHub (5 min)

#### Option 1 : Avec GitHub Desktop (recommandé)

**Télécharge GitHub Desktop :**
```
🔗 https://desktop.github.com
```

**Une fois installé :**

1. **Lance GitHub Desktop**
2. Connecte-toi avec ton compte GitHub
3. Clique sur **"File"** → **"Add local repository"**
4. Sélectionne le dossier **"revision-site"**
5. Clique sur **"Publish repository"**
6. Décoche **"Keep this code private"**
7. Clique sur **"Publish"**

✅ **Ton code est sur GitHub !**

---

#### Option 2 : En ligne (sans logiciel)

1. Va sur **github.com**
2. Clique sur **"+"** en haut → **"New repository"**
3. Nom : **"revision-site"**
4. Clique sur **"Create repository"**
5. Clique sur **"uploading an existing file"**
6. Glisse tous tes fichiers (sauf node_modules)
7. Clique sur **"Commit changes"**

✅ **Ton code est sur GitHub !**

---

### ▶️ PARTIE B : Déploie sur Render (5 min)

**1. Va sur Render**
```
🔗 https://render.com
```

**2. Inscris-toi**
- Clique sur **"Get Started"**
- Choisis **"Sign up with GitHub"**
- Autorise Render

**3. Crée un Web Service**
- Clique sur **"New +"** → **"Web Service"**
- Connecte ton repository **"revision-site"**
- Sélectionne-le dans la liste

**4. Configure**
```
Name: revision-site
Environment: Node
Region: Frankfurt (Europe)
Branch: main
Build Command: npm install
Start Command: npm start
Plan: Free
```

**5. Déploie**
- Clique sur **"Create Web Service"**
- ⏳ Attends 2-3 minutes

**6. C'est en ligne !**
```
🌐 https://revision-site.onrender.com
```

---

## 🎯 RÉCAP DES URLS

Selon ta méthode, ton site sera accessible à :

| Hébergeur | Format URL | Exemple |
|-----------|-----------|---------|
| **Glitch** | `nom.glitch.me` | `revision-1ere.glitch.me` |
| **Render** | `nom.onrender.com` | `revision-site.onrender.com` |
| **Railway** | `nom.up.railway.app` | `revision.up.railway.app` |
| **Vercel** | `nom.vercel.app` | `revision-site.vercel.app` |

---

## ✅ CHECKLIST FINALE

Avant de partager ton site, vérifie :

- [ ] Le site s'ouvre correctement
- [ ] Les 3 matières sont accessibles
- [ ] Les cours s'affichent bien
- [ ] Les questions fonctionnent
- [ ] Les tests blancs marchent
- [ ] Ça fonctionne sur mobile

---

## 📱 PARTAGE TON SITE

**Copie ton URL et envoie-la par :**
- 📧 Email
- 💬 WhatsApp / Telegram
- 📱 SMS
- 📋 QR Code (use qr-code-generator.com)

---

## 🔄 MISE À JOUR DU SITE

### Avec Glitch :
1. Retourne sur glitch.com
2. Ouvre ton projet
3. Modifie directement les fichiers
4. ✅ Sauvegarde automatique !

### Avec Render :
1. Modifie sur GitHub
2. Commit et Push
3. ✅ Render met à jour automatiquement !

---

## 🆘 PROBLÈMES COURANTS

### "Site not loading" sur Render
**Solution :**
- Attends 3 minutes (premier déploiement)
- Vérifie les logs dans Render

### "Module not found" 
**Solution :**
```bash
# Localement :
cd revision-site
npm install
# Puis redéploie
```

### Site inaccessible après quelques jours
**Solution :**
- Glitch : Projet mis en veille → Visite-le, il se réveille
- Render (gratuit) : Sommeil après 15 min inactivité

### Fichiers manquants
**Solution :**
- Vérifie que TOUS les fichiers sont uploadés
- Regarde dans l'éditeur que public/, css/, js/ sont là

---

## 💡 ASTUCES PRO

1. **Teste localement AVANT de déployer**
   ```bash
   npm start
   # Vérifie sur localhost:3000
   ```

2. **Sauvegarde ton code**
   - GitHub = sauvegarde automatique
   - Garde aussi une copie locale

3. **Surveille les performances**
   - Render gratuit : 750h/mois
   - Glitch : Sommeil après inactivité
   - Visite régulièrement ton site

4. **Personnalise l'URL**
   - Achète un domaine (namecheap.com)
   - Ou utilise un sous-domaine gratuit

---

## 🎓 RÉSUMÉ EN 3 LIGNES

```
1. Upload sur Glitch → Instantané ✨
2. OU GitHub + Render → Plus pro 🚀
3. Partage l'URL → Toute la classe révise ! 🎉
```

---

**Tu es prêt ! Fonce déployer ton site ! 🚀**

Questions ? Consulte GUIDE_HEBERGEMENT.md pour plus de détails.
