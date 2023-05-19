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
    this.getPagedMovies(1);
  }

  getPagedMovies(page: number){
    this.movieService.searchMovies(page).subscribe(data => {
      this.movies = data;
    });
  }

  paginate(event:any){
    this.getPagedMovies(event.page + 1);
  }

}
