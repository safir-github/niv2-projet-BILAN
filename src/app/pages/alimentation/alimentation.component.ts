// Importation des modules nécessaires pour le composant
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisan.service'; // Importation du service et du type Artisan

// Déclaration du composant Angular
@Component({
    selector: 'app-alimentation', // Utilisé pour déclarer un composant autonome
    imports: [CommonModule, RouterModule], // Importation des modules nécessaires pour ce composant
    templateUrl: './alimentation.component.html', // Lien vers le fichier de template
    styleUrl: './alimentation.component.sass' // Lien vers le fichier de style
})
export class AlimentationComponent implements OnInit {

  artisans$: Observable<Artisan[]>; // Propriété pour stocker l'Observable des artisans

  // Injection du service ArtisanService dans le constructeur
  constructor(private artisanService: ArtisanService) {
    // Initialisation de artisans$ en appelant la méthode du service pour obtenir les artisans de la catégorie 'Alimentation'
    this.artisans$ = this.artisanService.getArtisansByCategory('Alimentation');
  }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Aucun code supplémentaire n'est nécessaire ici car artisans$ est déjà initialisé dans le constructeur
  }
}
