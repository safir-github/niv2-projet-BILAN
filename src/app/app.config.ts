import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importez provideHttpClient pour la configuration de l'HTTP client
import { routes } from './app.routes'; // Importation des routes de l'application

// Configuration de l'application avec les providers nécessaires
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Fournit le router avec les routes définies
    provideHttpClient() // Fournit un client HTTP pour effectuer des requêtes HTTP dans l'application
  ]
};
