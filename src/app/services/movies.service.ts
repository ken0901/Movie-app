import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming'): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
  }
}
