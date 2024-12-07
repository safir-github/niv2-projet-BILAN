import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // Prépare l'environnement de test avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importation du composant à tester
    }).compileComponents(); // Compilation des composants
  });

  // Teste si l'application se crée correctement
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Vérifie que l'instance du composant est bien créée
  });

  // Teste si le titre de l'application est défini correctement
  it(`should have the 'niv2-projet-BILAN' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('niv2-projet-BILAN'); // Vérifie que la propriété 'title' correspond au titre attendu
  });

  // Teste si le titre est rendu dans le DOM
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Détecte les changements dans la vue
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, niv2-projet-BILAN'); // Vérifie que le contenu de l'élément <h1> contient le texte attendu
  });
});
