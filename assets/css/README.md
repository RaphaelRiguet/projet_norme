# Organisation du fichier style.css

## Structure du fichier

Le fichier `style.css` est organisé en **12 sections** clairement délimitées pour faciliter le travail en équipe.

### Guide de répartition du travail

```
┌─────────────────────────────────────────────────────────┐
│  SECTION 1 : RESET & BASE                              │
│  → Styles de base communs (ne pas modifier)            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 2 : NAVIGATION                                 │
│  → Personne 1 : Navbar, logo, liens de navigation       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 3 : HERO SECTION                               │
│  → Personne 1 : Section hero de la page d'accueil       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 4 : COMPOSANTS GLOBAUX                         │
│  → Personne 2 : Boutons, cartes, sections communes      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 5 : PAGE ACCUEIL                               │
│  → Personne 1 : Colonnes, grilles d'infos               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 6 : FOOTER                                     │
│  → Personne 2 : Pied de page commun                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 7 : EN-TÊTES DE PAGES                          │
│  → Personne 2 : Headers des pages intérieures           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 8 : PAGE MENU                                  │
│  → Personne 3 : Styles de la page menu                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 9 : PAGE GALERIE                               │
│  → Personne 4 : Galerie photos et filtres               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 10 : PAGE RÉSERVATION                          │
│  → Personne 5 : Formulaire de réservation               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 11 : PAGE HISTOIRE                             │
│  → Personne 5 : Timeline, équipe, récompenses           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION 12 : ANIMATIONS                                │
│  → Commun à tous (animations globales)                  │
└─────────────────────────────────────────────────────────┘
```

## Suggestion de répartition par personne

### 👤 Personne 1 - Pages principales
- **Section 2** : Navigation
- **Section 3** : Hero Section
- **Section 5** : Page Accueil

### 👤 Personne 2 - Composants globaux
- **Section 4** : Composants globaux (boutons, cartes)
- **Section 6** : Footer
- **Section 7** : En-têtes de pages

### 👤 Personne 3 - Page Menu
- **Section 8** : Page Menu

### 👤 Personne 4 - Page Galerie
- **Section 9** : Page Galerie

### 👤 Personne 5 - Pages Réservation & Histoire
- **Section 10** : Page Réservation
- **Section 11** : Page Histoire

## Règles de collaboration

### ✅ À FAIRE
- Travailler uniquement dans votre section assignée
- Commenter vos modifications importantes
- Tester vos changements sur la page correspondante
- Communiquer avec l'équipe avant de modifier les composants globaux

### ❌ À ÉVITER
- Modifier les sections assignées à d'autres personnes
- Supprimer les commentaires de section
- Créer de nouveaux fichiers CSS (tout va dans style.css)
- Écraser le travail des autres sans coordination

## Comment trouver votre section

Chaque section commence par un grand commentaire :

```css
/* ============================================
   N° SECTION : NOM DE LA SECTION
   Description
   ============================================ */
```

Utilisez **Ctrl + F** (Windows/Linux) ou **Cmd + F** (Mac) pour rechercher le numéro ou le nom de votre section dans le fichier.

## Questions ?

En cas de conflit ou de doute sur l'organisation, référez-vous à ce document ou contactez le formateur.
