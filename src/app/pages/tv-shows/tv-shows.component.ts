import { Component, OnInit } from '@angular/core';
import { Tv } from 'app/models/tv.model';
import { TvShowsService } from 'app/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvShows: Tv[] = [];

  constructor(private tvShowService: TvShowsService) { }

  ngOnInit(): void {
    this.getPagedMovies(1);
  }

  getPagedMovies(page: number){
    this.tvShowService.searchTvShows(page).subscribe(data => {
      this.tvShows = data;
    });
  }

  paginate(event:any){
    this.getPagedMovies(event.page + 1);
  }

}
