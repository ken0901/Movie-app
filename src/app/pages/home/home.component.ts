import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular')
      .subscribe(
        (data) => {
          this.popularMovies = data;
        }
    );

    this.moviesService.getMovies('top_rated')
      .subscribe(
        (data) => {
          this.topRatedMovies = data;
        }
    );

    this.moviesService.getMovies('upcoming')
      .subscribe(
        (data) => {
          this.upcomingMovies = data;
        }
    );
  }

}
