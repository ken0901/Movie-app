import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId){
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      }else{
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number){
    this.movieService.searchMovies(page).subscribe(data => {
      this.movies = data;
    });
  }

  paginate(event:any){
    const pageNumber = event.page + 1;
    if(this.genreId){
      this.getMoviesByGenre(this.genreId, pageNumber);
    }else{
      this.getPagedMovies(pageNumber);
    }
  }

  getMoviesByGenre(id: string, page: number){
    this.movieService.getMoviesByGerne(id, page).subscribe(data => {
      this.movies = data;
    })
  }

}
