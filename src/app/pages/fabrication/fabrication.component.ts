import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisan.service';

@Component({
    selector: 'app-fabrication', // Indique que ce composant est autonome et peut être utilisé indépendamment
    imports: [CommonModule, RouterModule], // Importation des modules nécessaires
    templateUrl: './fabrication.component.html', // Chemin vers le template HTML
    styleUrls: ['./fabrication.component.sass'] // Chemin vers le fichier de styles SCSS
})
export class FabricationComponent implements OnInit {

  artisans$: Observable<Artisan[]>; // Déclaration de l'Observable contenant la liste des artisans

  constructor(private artisanService: ArtisanService) {
    // Initialisation de artisans$ dans le constructeur en appelant le service pour récupérer les artisans par catégorie
    this.artisans$ = this.artisanService.getArtisansByCategory('Fabrication');
  }

  ngOnInit(): void {
    // Le hook ngOnInit est vide car la récupération des artisans est déjà effectuée dans le constructeur
  }
}
