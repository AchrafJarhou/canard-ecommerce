#  Canard E-Commerce - MVP

Boutique e-commerce spécialisée dans la vente de canards en plastique. Une application web fullstack simple, fonctionnelle et évolutive.

##  Table des matières

- [Contexte du projet](#contexte-du-projet)
- [Objectifs du MVP](#objectifs-du-mvp)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement](#lancement)
- [Architecture](#architecture)
- [Données produits](#données-produits)
- [Évolutions prévues](#évolutions-prévues)

##  Contexte du projet

Ce projet vise à développer une application web e-commerce permettant la vente de canards en plastique. L'objectif est de proposer une première version fonctionnelle (MVP) avec :

- Une navigation simple et intuitive
- Une présentation claire des produits
- Une architecture frontend/backend évolutive
- Une base solide pour les évolutions futures

##  Objectifs du MVP

- Présenter une sélection de canards en plastique  
- Gérer plusieurs modèles et plusieurs tailles  
- Offrir une interface claire et cohérente  
- Mettre en place une architecture frontend/backend  
- Préparer l'application à des évolutions futures  

##  Cible utilisateur

- Utilisateur grand public
- Aucun compte requis pour consulter les produits
- Navigation simple et intuitive

##  Fonctionnalités

### Frontend (React)

**Page d'accueil :**
- Titre et présentation de la boutique
- Liste des canards disponibles

**Affichage des produits :**
- Cartes produit avec :
  - Nom du canard
  - Modèle
  - Taille
  - Prix
  - Image
  - Bouton « Acheter » (non fonctionnel pour le MVP)

### Backend (Node.js / Express)

**API REST :**
- Endpoint pour récupérer la liste des canards
- Données produits stockées en mémoire (évolutif vers une base de données)
- CORS activé

##  Prérequis

- Node.js (v14.0.0 ou supérieur)
- npm (v6.0.0 ou supérieur)
- Un navigateur web moderne

##  Installation

### 1. Cloner ou télécharger le projet

```bash
cd canard-ecommerce
```

### 2. Installation du backend

```bash
cd backend
npm install
```

### 3. Installation du frontend

```bash
cd ../frontend
npm install
```

##  Lancement

### Démarrer le backend

```bash
cd backend
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000`

### Démarrer le frontend (dans un autre terminal)

```bash
cd frontend
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

##  Architecture

```
Frontend (React)
    |
    |  HTTP (fetch)
    v
Backend (Node.js / Express)
    |
    v
Données produits (JSON / tableau JS)
```

### Structure du projet

```
canard-ecommerce/
├── backend/
│   ├── server.js           # Point d'entrée du serveur
│   ├── package.json        # Dépendances backend
│   └── routes/             # Routes API (optionnel)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Composant principal
│   │   ├── main.jsx        # Point d'entrée React
│   │   ├── App.css         # Styles globaux
│   │   └── assets/         # Ressources (images, etc.)
│   ├── public/             # Fichiers statiques
│   ├── package.json        # Dépendances frontend
│   ├── vite.config.js      # Configuration Vite
│   └── eslint.config.js    # Configuration ESLint
│
└── README.md               # Ce fichier
```

##  Données produits

Chaque canard possède la structure suivante :

| Champ   | Type   | Description                    |
|---------|--------|--------------------------------|
| id      | number | Identifiant unique             |
| name    | string | Nom du canard                  |
| model   | string | Modèle (classique, pirate...) |
| size    | string | Taille (petit, moyen, grand)   |
| price   | number | Prix                           |
| image   | string | URL de l'image                 |

##  Stack technique

**Frontend :**
- React (composants fonctionnels)
- Hooks (useState, useEffect)
- CSS simple (responsive)
- Vite (bundler)

**Backend :**
- Node.js
- Express
- API REST
- CORS

##  Hors périmètre du MVP

Les fonctionnalités suivantes ne sont **pas incluses** dans cette version mais prévues pour les évolutions :

- 1 Panier d'achat fonctionnel
- 2 Système de paiement
- 3 Authentification utilisateur
- 4 Back-office administrateur
- 5 Base de données persistante

##  Évolutions prévues

Après le MVP, les fonctionnalités suivantes pourront être ajoutées :

1. **Panier d'achat** - Gérer une sélection de produits
2. **Filtrage** - Par modèle et taille
3. **Base de données** - MongoDB ou MySQL pour la persistance
4. **Paiement en ligne** - Intégration Stripe
5. **Interface administrateur** - Gestion des produits
6. **Authentification** - Comptes utilisateur
7. **Système de commandes** - Historique d'achats

##  Livrables

-  Code source frontend (React)
-  Code source backend (Node.js)
-  Application fonctionnelle en local
-  README avec instructions

##  Contribution

Ce projet est un MVP de démonstration. Les contributions et améliorations sont bienvenues !

##  Licence

Libre d'utilisation à titre d'exemple éducatif.

---

**Version:** 1.0.0 MVP  
**Date:** Janvier 2026  
**Statut:** En développement
