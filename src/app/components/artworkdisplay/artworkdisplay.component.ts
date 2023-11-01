import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareDialogComponent } from 'src/material/components/share-dialog/share-dialog.component';

@Component({
  selector: 'app-artworkdisplay',
  templateUrl: './artworkdisplay.component.html',
  styleUrls: ['./artworkdisplay.component.css']
})
export class ArtworkdisplayComponent {

  loading:boolean=true
  
  @Input()
  artwork!:any

  @Input()
  isFavourite!:boolean

  @Output()
  favouriteAltered:EventEmitter<[boolean,number]>

constructor(private router:Router,public dialog: MatDialog){
  this.favouriteAltered=new EventEmitter<[boolean,number]>
}
  isFavouriteAltered(){
    this.favouriteAltered.emit([!this.isFavourite,this.artwork.id])

  }

clicked(){
  this.router.navigateByUrl('art/'+this.artwork.id)
}

onLoad(){
  this.loading=false
}
error(){
  console.log('error occured')
}


openShare(){

  this.dialog.open(ShareDialogComponent, {
   
    data: `${window.location.origin}/art/${this.artwork.id}`
  });
}

}
