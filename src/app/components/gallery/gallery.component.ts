import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { data } from 'src/shared/models/models';
import { ArtworksService } from 'src/shared/services/artworks.service';
import { FavouriteIdsService } from 'src/shared/services/favourite-ids.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  artworkData: Array<data> = []
  isLoading: boolean = true
  paginatorLength: number = 0

  subscribtion: any
  searchForm:FormGroup
  constructor(private data: ArtworksService, private favIds: FavouriteIdsService) {
    
    this.searchForm=new FormGroup({
      query:new FormControl('')
    })

  }
  ngOnInit(): void {

    this.searchForm.get('query')?.valueChanges.subscribe(value=>{
      this.isLoading=true
      this.fetchData()
    })

    this.fetchData()
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe()
  }

  fetchData() {
    this.subscribtion = this.data.fetchData(this.searchForm.get('query')?.value).subscribe(
      result => {
        this.isLoading = false
        this.artworkData = result.data
        this.paginatorLength = result.pagination?.total ??0
      },
      err => { console.error(err) }
    )
  }

  pageChanged(x: string) {
    this.isLoading = true
    this.fetchData()
  }

  findIsFavourite(id: number) {
    return this.favIds.favouriteList.has(id)
  }
  favouriteAltered(x: [boolean, number]) {
    if (x[0]) {
      this.favIds.favouriteList.add(x[1])
    }
    else {
      this.favIds.favouriteList.delete(x[1])
    }
    // console.warn(this.favouriteList)
  }
}
