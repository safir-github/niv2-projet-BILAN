import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../../services/artisan.service';
import { Observable, of, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';  // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Importation des modules nécessaires pour le composant
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.sass']
})
export class ArtisanListComponent implements OnInit {

  // Observable qui contiendra la liste des artisans filtrée
  artisans$: Observable<Artisan[]> = of([]);  // Initialisation avec un Observable vide

  constructor(
    private artisanService: ArtisanService, // Service pour récupérer les artisans
    private searchService: SearchService     // Service pour gérer le terme de recherche
  ) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Combine les artisans et le terme de recherche pour créer un flux réactif
    this.artisans$ = combineLatest([
      this.artisanService.getArtisans(), // Récupère la liste des artisans
      this.searchService.searchTerm$.pipe(startWith(''))  // Écoute le terme de recherche et le met à jour
    ]).pipe(
      map(([artisans, searchTerm]) => this.filterArtisans(artisans, searchTerm))  // Applique le filtre en fonction du terme de recherche
    );
  }

  // Filtre les artisans en fonction du terme de recherche
  private filterArtisans(artisans: Artisan[], searchTerm: string): Artisan[] {
    // Si aucun terme de recherche n'est fourni, retourne la liste complète
    if (!searchTerm) {
      return artisans;
    }
    // Convertit le terme de recherche en minuscule pour la comparaison
    const lowerSearchTerm = searchTerm.toLowerCase();
    // Retourne la liste filtrée des artisans qui correspondent au terme de recherche dans le nom, la spécialité ou la ville
    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(lowerSearchTerm) ||
      artisan.specialty.toLowerCase().includes(lowerSearchTerm) ||
      artisan.address.city.toLowerCase().includes(lowerSearchTerm)
    );
  }
}
