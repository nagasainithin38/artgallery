import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteIdsService } from 'src/shared/services/favourite-ids.service';

@Component({
  selector: 'app-favourite-art',
  templateUrl: './favourite-art.component.html',
  styleUrls: ['./favourite-art.component.css']
})
export class FavouriteArtComponent {

  @Input()
  artwork!:any

  @Output()
  removeFromFavourite:EventEmitter<any>

  constructor(private router:Router,private favids:FavouriteIdsService)
  {
    this.removeFromFavourite=new EventEmitter<any>
  }

  removeFromFav(){
    
    this.removeFromFavourite.emit('removed')
  }

  viewMore(){
    this.router.navigateByUrl(`art/${this.artwork.id}`)
   }
}
