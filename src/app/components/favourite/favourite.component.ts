import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArtworksService } from 'src/shared/services/artworks.service';
import { FavouriteIdsService } from 'src/shared/services/favourite-ids.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit,OnDestroy {
  artworkData:any=[]
  isLoading:boolean=true
  subscribtion: any;
  ids:any
  constructor(private data:ArtworksService,public favIds:FavouriteIdsService){

  }

  ngOnInit(): void {
    
    this.fetchData()
  }
  ngOnDestroy(): void {
   this.subscribtion.unsubscribe()
  }
  fetchData(){
    this.ids=[]
    for(let id of this.favIds.favouriteList){
      this.ids.push(id)
    }
    // console.log(ids)
    this.subscribtion= this.data.getFavourites(this.ids).subscribe(
       result=>{
         this.isLoading=false
         this.artworkData=result.data
       },
       err=>{console.error(err)}
     )
   }
 
   removeFromFavourite(x:string,index:number){

    this.favIds.favouriteList.delete(this.ids[index])
    this.ids.splice(index,1)
    this.artworkData.splice(index,1)
   }

}
