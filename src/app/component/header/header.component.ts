import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],  // Ajoute RouterModule ici
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  onSearch(): void {
    // Met à jour le terme de recherche dans le service
    this.searchService.updateSearchTerm(this.searchTerm);

    // Redirige l'utilisateur vers la page "artisan-list"
    this.router.navigate(['/artisan-list']);
  }

  // Ajout d'une méthode pour fermer le menu burger au clic d'un élément du menu
  closeMenu(): void {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Retire la classe 'show' pour fermer le menu
    }
  }
}
