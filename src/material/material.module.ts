import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    
  ],
  exports:[
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule { }
