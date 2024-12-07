import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { ArtisanListComponent } from '../app/pages/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from '../app/pages/artisan-detail/artisan-detail.component';
import { PageNotFoundComponent } from '../app/pages/page-not-found/page-not-found.component'; // Page 404
import { BatimentComponent } from '../app/pages/batiment/batiment.component';
import { ServicesComponent } from '../app/pages/services/services.component';
import { FabricationComponent } from '../app/pages/fabrication/fabrication.component';
import { AlimentationComponent } from '../app/pages/alimentation/alimentation.component';
import { MentionsLegalesComponent } from '../app/pages/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from '../app/pages/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from '../app/pages/accessibilite/accessibilite.component';
import { CookiesComponent } from '../app/pages/cookies/cookies.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'artisan-list', component: ArtisanListComponent },
    { path: 'artisan-detail/:id', component: ArtisanDetailComponent },
    { path: 'batiment', component: BatimentComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'fabrication', component: FabricationComponent },
    { path: 'alimentation', component: AlimentationComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
    { path: 'accessibilite', component: AccessibiliteComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
