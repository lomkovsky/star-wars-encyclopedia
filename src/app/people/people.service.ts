import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpResponseBody } from '../models/https-response-body';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = environment.apiUrl + '/people/'

  constructor(private http: HttpClient) { }

  getPeopleList(nextApiUrl: string | null): Observable<HttpResponseBody> {
    return this.http.get<HttpResponseBody>(nextApiUrl ? nextApiUrl: this.apiUrl + '/?format=json');
  }

  getPeople(id: string): Observable<People> {
    return this.http.get<People>(this.apiUrl + `${id}` + '?format=json');
  }


  addPeople(starship: People): Observable<People> {
    return this.http.post<People>(this.apiUrl, starship);
  }

  deletePeople(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }

  updatePeople(updatedPeople: People, id?: string, ): Observable<void> {
    // return this.http.put<void>(this.apiUrl + id, updatedPeople); 
    console.log(updatedPeople);
    return of(); //temp solution
  }
}
