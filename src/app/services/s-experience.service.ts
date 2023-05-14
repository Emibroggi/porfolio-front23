import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experience } from '../model/experience';

@Injectable({
  providedIn: 'root',
})
export class sExperienceService {
  expURL = 'http://localhost:8080/explab/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<experience[]> {
    return this.httpClient.get<experience[]>(this.expURL + 'list');
  }

  public detail(id: number): Observable<experience> {
    return this.httpClient.get<experience>(this.expURL + `detail/${id}`);
  }

  public save(experience: experience): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experience);
  }

  public update(id: number, experience: experience): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
