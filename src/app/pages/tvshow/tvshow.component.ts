import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../components/item/item';
import {
  mapTvShowToItem,
  TvShow,
  TvShowCredits,
  TvShowImages,
  TvShowVideo
} from '../../models/tv';
import { TvShowsService } from '../../services/tvshows.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-tvShow',
  templateUrl: './tvShow.component.html',
  styleUrls: ['./tvShow.component.scss']
})
export class TvShowComponent implements OnInit, OnDestroy {
  tvShow: TvShow | null = null;
  tvShowBanner: Item | null = null;
  tvShowVideos: TvShowVideo[] = [];
  tvShowImages: TvShowImages | null = null;
  tvShowCredits: TvShowCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
    });
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  getTvShow(id: string) {
    this.tvShowsService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShowBanner = mapTvShowToItem(tvShowData);
      this.tvShow = tvShowData;
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowsService.getTvShowVideos(id).subscribe((tvShowVideosData) => {
      this.tvShowVideos = tvShowVideosData;
    });
  }

  getTvShowImages(id: string) {
    this.tvShowsService.getTvShowImages(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowCredits(id: string) {
    this.tvShowsService.getTvShowCredits(id).subscribe((tvShowCreditsData) => {
      this.tvShowCredits = tvShowCreditsData;
    });
  }
}
