# Argent Bank - Frontend Application

## Description

Argent Bank est une application bancaire moderne développée avec React qui permet aux utilisateurs de se connecter, gérer leur profil et visualiser leurs informations bancaires de manière sécurisée.

## Fonctionnalités

- **Authentification sécurisée** : Connexion/déconnexion avec JWT
- **Gestion de profil** : Modification des informations personnelles
- **Navigation protégée** : Routes privées et publiques
- **Persistance des données** : Sauvegarde automatique de la session

## Architecture Technique

### Gestion d'État avec Redux
- **Store centralisé** : Configuration avec Redux Toolkit et persistance locale
- **Slices** : Gestion modulaire de l'état (authentification, utilisateur)
- **Actions asynchrones** : Gestion des appels API avec createAsyncThunk
- **Middleware** : Persistance automatique des données de session

### Authentification
- **JWT Token** : Authentification sécurisée avec tokens
- **Protection des routes** : Accès contrôlé aux pages sensibles
- **Persistance de session** : Maintien de la connexion après rechargement
- **Validation côté client et serveur**

### Structure des Composants
- **Pages** : Home, Login, Profile
- **Composants réutilisables** : Navigation, Forms, PrivateRoute
- **Hooks personnalisés** : useUserData, useAuth
- **Services API** : Gestion centralisée des appels backend

## Technologies Utilisées

### Core
- **React 18.3.1** : Bibliothèque UI
- **Vite 6.0.5** : Build tool et dev server
- **React Router DOM 7.1.5** : Navigation et routing

### State Management
- **Redux Toolkit 2.5.1** : Gestion d'état moderne
- **React Redux 9.2.0** : Intégration React-Redux
- **Redux Persist 6.0.0** : Persistance du state

## API Backend

L'application communique avec une API REST backend qui fournit :
- Endpoints d'authentification (`/login`)
- Gestion du profil utilisateur (`/profile`)
- Validation des tokens JWT
- Base de données MongoDB

## Licence

**Développé avec ❤️ pour OpenClassroom**
