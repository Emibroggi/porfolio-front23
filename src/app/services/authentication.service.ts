import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { persona } from '../model/person.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://backendeb.onrender.com/';
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
    this.currentUserSubjet = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  public getPerson(): Observable<persona> {
    return this.httpClient.get<persona>(this.url + 'person/look/profile');
  }

  public login(email: string, string: any): Observable<any> {
    return this.httpClient.post<any>(this.url + 'person/login', persona);
  }
}
