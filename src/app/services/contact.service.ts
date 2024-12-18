import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import de l'environnement


@Injectable({
  providedIn: 'root' // Rend ce service disponible dans toute l'application
})
export class ContactService {
  private apiUrl = environment.apiUrl; // Utilisation de l'URL définie dans l'environnement

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer un message à l'API
  sendMessage(data: { name: string; subject: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, data); // Envoi des données au backend
  }
}
