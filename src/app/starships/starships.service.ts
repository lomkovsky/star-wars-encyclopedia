import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IStarship } from '../models/starship';
import { HttpResponseBody } from '../models/https-response-body';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private apiUrl = environment.apiUrl + "/starships/"

  constructor(private http: HttpClient) { }

  getStarshipsList(nextApiUrl: string | null): Observable<HttpResponseBody> {
    return this.http.get<HttpResponseBody>(nextApiUrl ? nextApiUrl: this.apiUrl + '?format=json');
  }

  getStarship(id: string): Observable<IStarship> {
    return this.http.get<IStarship>(this.apiUrl + `${id}` + '?format=json');
  }


  addStarship(starship: IStarship): Observable<IStarship> {
    return this.http.post<IStarship>(this.apiUrl, starship);
  }

  deleteStarship(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }

  updateStarship(id: string, updatedStarship: IStarship): Observable<void> {
    return this.http.put<void>(this.apiUrl + id, updatedStarship);
  }


}
