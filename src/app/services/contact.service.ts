import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Rend ce service disponible dans toute l'application
})
export class ContactService {
  private apiUrl = 'http://localhost:3001/send-email'; // URL de l'API pour l'envoi de l'email

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer un message via l'API
  sendMessage(data: { name: string; subject: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, data); // Envoi des données au backend
  }
}
