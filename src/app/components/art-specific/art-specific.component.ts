import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data, result } from 'src/shared/models/models';
import { ArtworksService } from 'src/shared/services/artworks.service';

@Component({
  selector: 'app-art-specific',
  templateUrl: './art-specific.component.html',
  styleUrls: ['./art-specific.component.css']
})
export class ArtSpecificComponent implements OnInit{


  id!:number
data!:data
subscriptions!:any
isLoading:boolean=true
  constructor(private activatedRoute:ActivatedRoute,private artworkServive:ArtworksService){


  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id']
     
    })

    this.subscriptions=this.artworkServive.getArtByid(this.id).subscribe(
      dt=>{
        this.isLoading=false
        this.data=dt.data
      },
      err=>{
        console.error(err)
      }
    )
  }


}
