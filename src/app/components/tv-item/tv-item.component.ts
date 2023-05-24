import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Tv } from 'app/models/tv.model';

@Component({
  selector: 'tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.css']
})
export class TvItemComponent implements OnInit {
  @Input() itemData: Tv | null = null;

  imageSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
