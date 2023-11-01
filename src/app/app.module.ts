import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/material/material.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ArtworkdisplayComponent } from './components/artworkdisplay/artworkdisplay.component';
import { FavouriteArtComponent } from './components/favourite-art/favourite-art.component';
import { ArtSpecificComponent } from './components/art-specific/art-specific.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    FavouriteComponent,
    PnfComponent,
    PaginatorComponent,
    ArtworkdisplayComponent,
    FavouriteArtComponent,
    ArtSpecificComponent,
    GalleryComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GalleriaModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
