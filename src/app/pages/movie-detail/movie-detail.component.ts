import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'app/constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovieById(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  ngOnDestroy(){
    console.log('component destroyed');
  }

  getMovieById(id: string){
    this.movieService.getMovieById(id).subscribe(movieData => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe(movieVideoData => {
      this.movieVideos = movieVideoData;
      console.log(this.movieVideos);
    });
  }

  getMovieImages(id: string){
    this.movieService.getMovieImages(id).subscribe(movieImagesData => {
      this.movieImages = movieImagesData;
    })
  }

  getMovieCredits(id: string){
    this.movieService.getMovieCredits(id).subscribe(movieCreditsData => {
      this.movieCredits = movieCreditsData;
    })
  }
}
