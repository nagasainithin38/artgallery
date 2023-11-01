import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { ArtSpecificComponent } from './components/art-specific/art-specific.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'favourite',
    component:FavouriteComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"art/:id",
    component:ArtSpecificComponent
  },
  {
    path:'**',
    component:PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
