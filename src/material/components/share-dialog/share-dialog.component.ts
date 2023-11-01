import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit{
  copied:boolean=false;
  title:string='Copy'
  constructor(public dialogRef: MatDialogRef<ShareDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit(): void {
  console.log(this.data)
  }
  copyToClipBoard(inputElement:any){
   
        
    inputElement.select() 

    inputElement.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputElement.value);
    this.title='Copied'
    this.copied=true

  }
  close(){
    this.dialogRef.close()
  }
  share(){
    if(navigator.share){
      navigator.share({
        title:'Artwork',
        url:this.data
      }).then(()=>{
        console.log('thankyou')
      })
      .catch(()=>{alert('err')})
    }
    this.dialogRef.close()
    
  }
}

