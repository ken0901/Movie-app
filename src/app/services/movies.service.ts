import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresDto } from 'app/models/genre.model';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = environment.api_key;

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap( res => {
        return of(res.results.slice(0, count))
      }));
  }
  
  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie': '/movie/popular';
    return this.http.get<MovieDto>(`${this.baseUrl + uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
    .pipe(switchMap( res => {
      return of(res.results)
    }));
  }
  
  getMovieById(id: string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
  
  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(switchMap( res => {
      return of(res.results)
    }));
  }

  getMovieGernes() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
    .pipe(switchMap( res => {
      return of(res.genres)
    }));
  }

  getMoviesByGerne(id: string, pageNumber: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${id}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(switchMap( res => {
        return of(res.results)
      }));
  }
  
  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
}
