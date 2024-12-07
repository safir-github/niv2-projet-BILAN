import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private artisansUrl = '/artisans.json'; // URL du fichier JSON contenant les artisans

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir la liste de tous les artisans
  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.artisansUrl);
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
      map((artisans) => artisans.filter(artisan => artisan.category === category))
    );
  }
}
