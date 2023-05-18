import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'app/models/movie.model';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
