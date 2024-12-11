// Importation des modules nécessaires et des services
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Importation de FormsModule pour la gestion des formulaires
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArtisanService, Artisan } from '../../services/artisan.service'; // Importation du service ArtisanService
import { ContactService } from '../../services/contact.service'; // Importation du service ContactService

// Décorateur du composant pour indiquer qu'il s'agit d'un composant Angular
@Component({
    selector: 'app-artisan-detail', // Permet au composant d'être autonome sans module
    imports: [CommonModule, FormsModule], // Importation des modules nécessaires
    templateUrl: './artisan-detail.component.html', // Chemin vers le template HTML
    styleUrls: ['./artisan-detail.component.sass'] // Chemin vers le fichier de style SASS
})
export class ArtisanDetailComponent implements OnInit {

  // Propriété pour stocker les détails de l'artisan sous forme d'Observable
  artisan$: Observable<Artisan | undefined> = of(undefined);

  // Injection des services et de l'ActivatedRoute pour récupérer les paramètres de la route
  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService,
    private contactService: ContactService // Injection du service de contact pour gérer les soumissions de formulaire
  ) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Utilisation de la méthode switchMap pour obtenir les détails de l'artisan par ID
    this.artisan$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id')); // Récupération de l'ID de la route
        return this.artisanService.getArtisanById(id); // Appel au service pour obtenir les détails de l'artisan
      })
    );
  }

  // Méthode pour gérer la soumission du formulaire de contact
  onSubmit(form: NgForm): void {
    console.log('Form submitted:', form.value); // Affiche les valeurs soumises dans la console

    // Utilisation du ContactService pour envoyer le message
    this.contactService.sendMessage(form.value)
      .subscribe({
        next: (response) => {
          console.log('Email envoyé avec succès', response); // Log succès dans la console
          alert('Message envoyé avec succès'); // Affiche un message de succès à l'utilisateur
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de l\'email', error); // Log erreur dans la console
          alert('Une erreur s\'est produite lors de l\'envoi du message.'); // Affiche un message d'erreur à l'utilisateur
        },
        complete: () => {
          console.log('Requête terminée.'); // Log la fin de la requête
        }
      });
  }
}
