// Importation des fonctions nécessaires pour démarrer l'application Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Importation de la configuration de l'application
import { AppComponent } from './app/app.component'; // Importation du composant racine de l'application

// Démarrage de l'application Angular avec le composant racine et la configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Gestion des erreurs lors du démarrage de l'application
