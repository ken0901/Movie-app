import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.searchMovies(2).subscribe(data => {
      this.movies = data;
    });
  }

}
