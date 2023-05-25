import { Component, OnInit } from '@angular/core';
import { Genre } from 'app/models/genre.model';
import { MoviesService } from 'app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovieGernes().subscribe(genresData => {
      this.genres = genresData;
    });
  }

}
