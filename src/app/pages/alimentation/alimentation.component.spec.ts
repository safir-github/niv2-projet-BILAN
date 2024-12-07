// Importation des modules nécessaires pour les tests
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentationComponent } from './alimentation.component';

// Déclaration du bloc de tests pour le composant AlimentationComponent
describe('AlimentationComponent', () => {
  let component: AlimentationComponent; // Instance du composant à tester
  let fixture: ComponentFixture<AlimentationComponent>; // Instance du composant de test

  // Configuration et initialisation avant chaque test
  beforeEach(async () => {
    // Configuration du module de test avec le composant importé
    await TestBed.configureTestingModule({
      imports: [AlimentationComponent]
    })
    .compileComponents(); // Compilation des composants avant les tests

    // Création de l'instance du composant et initialisation de la fixture
    fixture = TestBed.createComponent(AlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Déclenche le cycle de détection des changements
  });

  // Test de création du composant
  it('should create', () => {
    expect(component).toBeTruthy(); // Vérifie que l'instance du composant est bien créée
  });
});
