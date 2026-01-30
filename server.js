const express = require('express');
const path = require('path');
const app = express();

// Port dynamique pour l'hébergement (Render, Railway, etc.)
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static('public'));
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Écouter sur toutes les interfaces (0.0.0.0) pour l'hébergement
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
  if (process.env.PORT) {
    console.log(`🌐 Site accessible publiquement`);
  } else {
    console.log(`🏠 Site accessible sur http://localhost:${PORT}`);
  }
});
