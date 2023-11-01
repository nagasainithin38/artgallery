import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteIdsService {
  favouriteList:Set<number>
  constructor() {
    this.favouriteList=new Set()
   }
}
