import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/component/header/header.component';
import { FooterComponent } from '../app/component/footer/footer.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet,
        HeaderComponent,
        FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'] // Correction : 'styleUrl' devient 'styleUrls'
})
export class AppComponent {
  title = 'niv2-projet-BILAN';
}
