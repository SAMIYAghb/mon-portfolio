export const projects = [
  {
    id: "1",
    title: "Booking & Management App",
    imageUrl: "/images/booking-app.png",
    videoUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7169287452094902272?compact=1",
    description: `
          Cette application complète de réservation hôtelière offre une expérience fluide pour les utilisateurs et une interface de gestion avancée pour les administrateurs.
    
          ✅ Stack technique :
          - Vite + React + TypeScript
          - Material-UI & mui/icons-material
          - React Router DOM / React Hook Form / React Toastify
          - react-pro-sidebar, react-date-range, slick-carousel
          - axios pour les appels API, recharts pour les statistiques
          - Authentification avec JWT, décodée via jwt-decode
          - Intégration de Stripe pour le paiement
          - date-fns pour la gestion des dates
    
          ✅ Fonctions principales :
          - Authentification avec rôles (admin, utilisateur connecté, invité)
          - Pages Admin : Dashboard, Graphiques, CRUD pour utilisateurs, chambres, publicités, réservations, installations
          - Pages Utilisateur : Page d'accueil, Détails des chambres, Favoris, Commentaires, Notation
          - Processus de paiement intégré
          - Module partagé avec mise en page, formulaires validés, gestion de contexte et appels API via axios
    
          👉 Idéal pour les structures hôtelières ou d’hébergement souhaitant une solution moderne, sécurisée et responsive.
        `,
  },
  {
    id: "2",
    title: "Gestion de Projets et Tâches avec Dashboard",   
    imageUrl: "/images/project2.jpg",
    videoUrl:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7169283201645944832?compact=1",
    description: `
    Ce projet est une application de gestion de projets et de tâches, conçue pour répondre aux besoins des entreprises et des équipes. Elle permet de suivre facilement les projets, d'assigner des tâches, de visualiser des graphiques interactifs et d'assurer une gestion claire des utilisateurs grâce à une interface intuitive.

✅ Fonctionnalités principales :
Authentification sécurisée
Un système d'authentification robuste permettant de sécuriser l'accès aux différentes pages en fonction des rôles utilisateurs (Manager / Employé).

Gestion des rôles utilisateurs
Différenciation claire entre les gestionnaires et les employés avec des permissions spécifiques pour chaque rôle.

CRUD Utilisateurs
Opérations de création, lecture, mise à jour et suppression des utilisateurs pour une gestion flexible des membres d’équipe.

Dashboard avec graphiques
Visualisation des données du projet via des graphiques intuitifs et interactifs permettant de suivre l'avancement des projets en temps réel. Utilisation de React Donut Chart pour des indicateurs de performance clé.

Gestion des projets et des tâches
Possibilité de créer, lire, modifier et supprimer des projets et des tâches pour assurer un suivi clair et une bonne organisation des activités au sein de l’équipe.

Drag & Drop pour une gestion intuitive
Implémentation de la fonctionnalité de glisser-déposer pour réorganiser les tâches et projets de manière fluide et interactive grâce à react-beautiful-dnd.

Gestion dynamique des thèmes
Personnalisation de l'interface avec des options de thème clair ou sombre, pour offrir une expérience utilisateur agréable dans toutes les conditions d'éclairage.

Formulaires avec validation
Intégration de formulaires dynamiques pour la création et la mise à jour des utilisateurs, projets et tâches, avec des validations de données pour assurer la qualité des informations saisies.

Opérations CRUD via Axios
Appels API transparents et efficaces grâce à Axios pour interagir avec le backend et gérer les données de manière fluide.

Layout Master/Auth
Mise en place d'un layout cohérent pour toutes les pages administratives et des pages sécurisées pour les utilisateurs connectés, garantissant une interface unifiée et pratique.

✅ Stack technique :
Vite pour une expérience de développement rapide et une meilleure performance du build.

React et TypeScript pour un développement moderne, typé et modulaire.

React Router DOM pour une gestion fluide des routes de l’application.

FontAwesome pour des icônes élégantes et personnalisées.

React Hook Form pour la gestion des formulaires avec validation.

React-Pro-Sidebar pour une barre latérale flexible et responsive.

React-Toastify pour des notifications toast élégantes et informatives.

Axios pour la gestion des appels API.

Bootstrap pour une mise en page réactive et pratique.

✅ Cas d’utilisation :
Manager : Suivi de l’avancement des projets, gestion des utilisateurs, création et mise à jour des tâches, visualisation des statistiques via des graphiques.

Employé : Consultation des projets assignés, mise à jour de son statut de tâche, gestion de ses priorités au sein de l’équipe.

Ce projet vise à améliorer l’organisation des équipes, en facilitant la gestion des projets et des tâches, tout en offrant une expérience utilisateur fluide et moderne grâce à une interface dynamique et interactive.
    `,
  },
  {
    id: "3",
    title: "Gestion de Recettes et Utilisateurs avec Tableau de Bord",
    imageUrl: "/images/project2.jpg",
    videoUrl:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7147974988501811200?compact=1",
    description: `Ce projet est une application web complète de gestion de recettes, d'utilisateurs et de catégories, permettant de créer, lire, mettre à jour et supprimer des recettes, tout en offrant un tableau de bord interactif pour une gestion efficace des utilisateurs et des contenus. Il intègre un système d'authentification, un module de gestion des rôles, ainsi qu'un suivi en temps réel des activités via des graphiques.

✅ Fonctionnalités principales :
Module d’authentification
Accès sécurisé avec un système d’authentification robuste permettant de se connecter en tant qu’administrateur ou utilisateur. La gestion des rôles (admin/utilisateur) permet un contrôle total sur les accès et les actions possibles.

Module de gestion des catégories
Création, gestion et organisation des catégories de recettes (ex : entrées, plats, desserts), pour une navigation plus fluide et un classement clair des recettes.

Tableau de bord (Dashboard)
Un tableau de bord dynamique permettant aux administrateurs de suivre les statistiques, de visualiser l’activité des utilisateurs, et d’avoir une vue d'ensemble sur les recettes et les catégories via des graphiques interactifs.

Module de gestion des recettes
Permet aux utilisateurs et aux administrateurs de créer, consulter, modifier et supprimer des recettes, tout en ajoutant des détails comme les ingrédients, les instructions et les images. Les recettes peuvent être associées à des catégories spécifiques pour une gestion simplifiée.

Module utilisateurs et gestion des rôles
Gestion des utilisateurs avec des rôles distincts (admin/utilisateur). Les administrateurs peuvent gérer les informations des utilisateurs et attribuer des rôles spécifiques, tandis que les utilisateurs peuvent gérer leurs recettes et voir les contenus partagés.

Gestion partagée avec des modules et contextes
Utilisation de contextes partagés et de modules réutilisables pour simplifier la gestion de l’état et améliorer la maintenabilité du code.

Formulaires avec validation
Validation côté client des formulaires de création et de mise à jour des recettes et des utilisateurs, garantissant que seules des informations valides soient envoyées au serveur.

Opérations CRUD avec Axios
Communication fluide avec le backend via Axios pour effectuer des opérations CRUD sur les recettes, les catégories et les utilisateurs.

Interface utilisateur réactive et moderne
Utilisation de Bootstrap et React-Bootstrap pour une interface élégante, moderne et responsive, optimisée pour une utilisation sur tous les types d'appareils.

Déploiement avec Netlify, GitHub et Vercel
Déploiement continu de l’application avec Netlify, GitHub et Vercel, permettant de mettre rapidement à jour et de rendre disponible la dernière version de l’application.

✅ Stack technique :
Vite pour un démarrage rapide et une optimisation des performances de développement.

React pour un développement dynamique et réactif de l’interface.

React-Router-Dom pour une navigation fluide entre les différentes pages de l’application.

FontAwesome pour l’ajout d’icônes modernes et élégantes.

React-Toastify pour l'affichage de notifications utilisateurs non intrusives.

React-Loader-Spinner pour l’affichage de spinners de chargement élégants pendant les appels API.

Bootstrap et React-Bootstrap pour la mise en page responsive et professionnelle.

Axios pour gérer les appels API et la communication avec le backend.

JWT-Dcode pour le décodage sécurisé des tokens JWT et la gestion des sessions utilisateurs.

✅ Cas d’utilisation :
Administrateur : Accéder à un tableau de bord pour gérer les utilisateurs, consulter les recettes, modifier les catégories et gérer les contenus de l’application.

Utilisateur : Créer, modifier, consulter et supprimer des recettes, interagir avec les autres utilisateurs et explorer les recettes par catégorie.

Ce projet est conçu pour améliorer la gestion des recettes, des utilisateurs et des catégories, tout en offrant une interface intuitive et responsive. Il permet une gestion efficace des rôles utilisateurs et des contenus tout en offrant une expérience utilisateur fluide et sécurisée grâce à un système d'authentification et des modules partagés.`,
  },
  
];
