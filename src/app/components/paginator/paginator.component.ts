import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtworksService } from 'src/shared/services/artworks.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input()
  paginatorLength:number=0
  @Output()
  pageChanged!:EventEmitter<string>

  constructor(public artwork:ArtworksService){
    this.pageChanged=new EventEmitter<string>
  }


  handlePageEvent(event:any){
    this.artwork.setNumbers(event.pageIndex,event.pageSize)
    this.pageChanged.emit('changed')
   
  }

  
}
