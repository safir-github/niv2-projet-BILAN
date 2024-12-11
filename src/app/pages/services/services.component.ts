import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisan.service';

@Component({
    selector: 'app-services', // Indique que le composant est autonome et indépendant
    imports: [CommonModule, RouterModule], // Importation des modules nécessaires pour le composant
    templateUrl: './services.component.html', // Chemin vers le template HTML du composant
    styleUrl: './services.component.sass' // Chemin vers le fichier de style du composant
})
export class ServicesComponent implements OnInit {
  artisans$: Observable<Artisan[]>; // Déclaration de artisans$ comme Observable pour la liste des artisans

  // Constructeur pour injecter ArtisanService
  constructor(private artisanService: ArtisanService) {
    // Initialisation de artisans$ en appelant la méthode du service pour obtenir les artisans de la catégorie "Services"
    this.artisans$ = this.artisanService.getArtisansByCategory('Services');
  }

  // Méthode ngOnInit exécutée lors de l'initialisation du composant
  // Aucun code nécessaire ici car artisans$ est déjà initialisé dans le constructeur
  ngOnInit(): void {
    // Méthode vide, car la récupération des artisans est déjà gérée par le constructeur
  }
}
