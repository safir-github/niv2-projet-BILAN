import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisan.service';

@Component({
  selector: 'app-batiment', // Sélecteur utilisé pour le composant
  standalone: true, // Indique que le composant est autonome et n'a pas besoin de module Angular dédié
  imports: [CommonModule, RouterModule], // Modules importés pour le composant
  templateUrl: './batiment.component.html', // Chemin vers le template HTML du composant
  styleUrls: ['./batiment.component.sass'] // Chemin vers le fichier de style SCSS du composant
})
export class BatimentComponent implements OnInit {
  artisans$: Observable<Artisan[]>; // Déclaration de artisans$ comme Observable pour contenir les artisans

  // Constructeur pour injecter le service ArtisanService
  constructor(private artisanService: ArtisanService) {
    // Initialisation de artisans$ avec la méthode du service qui récupère les artisans par catégorie
    this.artisans$ = this.artisanService.getArtisansByCategory('Bâtiment');
  }

  // Méthode ngOnInit, appelée après l'initialisation du composant
  // Pas de logique supplémentaire nécessaire ici puisque artisans$ est déjà initialisé dans le constructeur
  ngOnInit(): void {
    // Aucune initialisation supplémentaire n'est nécessaire ici
  }
}
