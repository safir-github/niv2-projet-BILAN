import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Interface pour représenter une adresse
export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

// Interface pour représenter un artisan
export interface Artisan {
  id: number;
  name: string;
  rating: number;
  specialty: string;
  address: Address;
  location: string;
  category: string;
  description: string;
  descriptions: string;
  website?: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private artisansUrl = 'assets/artisans.json'; // URL du fichier JSON contenant les artisans

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir la liste de tous les artisans avec gestion des erreurs
  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.artisansUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors du chargement des artisans:', error);
        return throwError(() => new Error('Erreur de chargement des artisans'));
      })
    );
  }

  // Méthode pour obtenir un artisan par ID
  getArtisanById(id: number): Observable<Artisan | undefined> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((artisan) => artisan.id === id))
    );
  }

  // Méthode pour obtenir les artisans par catégorie
  getArtisansByCategory(category: string): Observable<Artisan[]> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.filter((artisan) => artisan.category === category))
    );
  }
}
