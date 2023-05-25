import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvItemComponent } from './components/tv-item/tv-item.component';
import { GenresComponent } from './pages/genres/genres.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MoviesComponent,
        SliderComponent,
        ItemsBannerComponent,
        MovieItemComponent,
        MovieDetailComponent,
        VideoEmbedComponent,
        TvShowsComponent,
        TvItemComponent,
        GenresComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PaginatorModule,
        TabViewModule,
        ImageModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
