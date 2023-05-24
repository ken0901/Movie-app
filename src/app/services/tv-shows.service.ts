import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvDTO } from 'app/models/tv.model';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) { }

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.http.get<TvDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap( res => {
        return of(res.results.slice(0, count))
      }));
  }

  searchTvShows(page: number) {
    return this.http.get<TvDTO>(`${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap( res => {
        return of(res.results)
      }));
  }
}
