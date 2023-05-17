import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'app/models/movie.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
