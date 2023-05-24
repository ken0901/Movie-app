import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'app/constants/images-sizes';
import { Movie, MovieImages, MovieVideo } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovieById(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
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
}
