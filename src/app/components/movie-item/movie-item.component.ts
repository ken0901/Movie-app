import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'app/models/movie.model';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imageSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
