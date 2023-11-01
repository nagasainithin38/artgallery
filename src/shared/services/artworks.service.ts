import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { data, result, result1 } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {

  isDataFetched:boolean=false
  pageIndex:number=0
  pageSize:number=12
  data:any=[]
  isLoading:boolean=false
 
  constructor(private http:HttpClient) { }
 

  fetchData(query:string):Observable<result>{

    if(query==''){

      return this.http.get<result>(`https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display&page=${this.pageIndex+1}&limit=${this.pageSize}`) 
    }
    else{
      
      return this.http.get<result>(`https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,artist_display&page=${this.pageIndex+1}&limit=${this.pageSize}&q=${query}`) 
    }

  }

  setNumbers(pageIndex:number,pageSize:number){
    this.pageIndex=pageIndex
    this.pageSize=pageSize
    
  }
  getFavourites(ids:Array<number>):Observable<result>{

    let favIds=''
    for(let i=0;i<ids.length;i++){
      favIds+=ids[i].toString()+','
    }
    let favouriteUrl='https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display&ids='+favIds.slice(0,favIds.length-1)
    if(ids.length==0){
       favouriteUrl='https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display&ids=1111'
    }
    return this.http.get<result>(favouriteUrl)
  }

  getArtByid(id:number):Observable<result1>{
    return this.http.get<result1>(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,thumbnail,description,publication_history,artist_titles,category_titles,date_start,date_end,exhibition_history,image_id`)
  }

}
