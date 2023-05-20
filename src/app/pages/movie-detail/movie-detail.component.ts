import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  constructor(private route: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovieById(id);
    });
  }

  getMovieById(id: string){
    this.movieService.getMovieById(id).subscribe(movieData => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }
}
