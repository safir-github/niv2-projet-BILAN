import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisan.service';

@Component({
    selector: 'app-home', // Indique que le composant est autonome et n'a pas besoin d'un module Angular dédié
    imports: [CommonModule, RouterModule], // Modules importés pour le fonctionnement du composant
    templateUrl: './home.component.html', // Chemin vers le template HTML du composant
    styleUrl: './home.component.sass' // Chemin vers le fichier de style du composant (Sass)
})
export class HomeComponent implements OnInit {
  artisans$: Observable<Artisan[]>; // Déclaration de artisans$ comme Observable pour contenir la liste des artisans

  // Le constructeur est utilisé pour injecter des services nécessaires au composant
  constructor(private artisanService: ArtisanService) {
    // Initialisation de la propriété artisans$ en appelant la méthode getArtisansByCategory du service
    this.artisans$ = this.artisanService.getArtisansByCategory('best');
  }

  // Méthode ngOnInit appelée après l'initialisation du composant
  // Pas de code nécessaire ici car artisans$ est déjà initialisé dans le constructeur
  ngOnInit(): void {
    // Vide ici, car les données sont déjà chargées dans le constructeur
  }
}
