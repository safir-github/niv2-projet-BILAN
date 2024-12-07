// Importation des modules nécessaires pour effectuer des tests
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtisanDetailComponent } from './artisan-detail.component'; // Importation du composant à tester

// Bloc de test pour le composant ArtisanDetailComponent
describe('ArtisanDetailComponent', () => {
  let component: ArtisanDetailComponent; // Instance du composant à tester
  let fixture: ComponentFixture<ArtisanDetailComponent>; // Instance de la fixture de test

  // Configuration et initialisation avant chaque test
  beforeEach(async () => {
    // Configuration du module de test pour inclure le composant à tester
    await TestBed.configureTestingModule({
      imports: [ArtisanDetailComponent] // Importation du composant ArtisanDetailComponent
    })
    .compileComponents(); // Compilation des composants de test

    // Création de l'instance du composant et initialisation de la fixture
    fixture = TestBed.createComponent(ArtisanDetailComponent);
    component = fixture.componentInstance; // Récupération de l'instance du composant
    fixture.detectChanges(); // Déclenche la détection des changements pour s'assurer que la vue est à jour
  });

  // Test pour vérifier la création du composant
  it('should create', () => {
    expect(component).toBeTruthy(); // Vérifie que le composant est bien créé et existe
  });
});
