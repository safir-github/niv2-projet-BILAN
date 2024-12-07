import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Rend ce service accessible dans toute l'application
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>(''); // Initialise le terme de recherche à une chaîne vide
  searchTerm$ = this.searchTermSubject.asObservable(); // Expose l'Observable pour permettre à d'autres composants de s'y abonner

  // Méthode pour mettre à jour le terme de recherche
  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term); // Émet le nouveau terme de recherche
  }
}
