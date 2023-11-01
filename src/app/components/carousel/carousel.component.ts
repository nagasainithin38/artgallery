import { Component } from '@angular/core';
import { HostListener } from "@angular/core"
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
   containerClass='d-flex'
  images:any[] |undefined=[
{
    itemImageSrc: 'https://artic-web.imgix.net/8e2ae008-16a6-4f66-9f0e-9b9a5fc2778d/V05_P04-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C585%2C3000%2C1687&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687 ',
    thumbnailImageSrc: 'https://artic-web.imgix.net/8e2ae008-16a6-4f66-9f0e-9b9a5fc2778d/V05_P04-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C585%2C3000%2C1687&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
{
  itemImageSrc: 'https://artic-web.imgix.net/7b336bcf-fab7-4faa-817f-8f15d3c904eb/gm_390711EX3_Original_Image17_Claudelimagebank-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C279%2C2384%2C1340&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1686',
  thumbnailImageSrc: 'https://artic-web.imgix.net/7b336bcf-fab7-4faa-817f-8f15d3c904eb/gm_390711EX3_Original_Image17_Claudelimagebank-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C279%2C2384%2C1340&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1686',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://artic-web.imgix.net/3bc33675-1655-4db2-8a7c-0c767b39414e/Caravaggio-TheCardshaprs%3BAP1987_06Caravaggio-unframed-cc-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1688',
  thumbnailImageSrc: 'https://artic-web.imgix.net/3bc33675-1655-4db2-8a7c-0c767b39414e/Caravaggio-TheCardshaprs%3BAP1987_06Caravaggio-unframed-cc-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1688',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://artic-web.imgix.net/496be7df-3725-4d9b-9f20-bf254abc2a0e/J13566-int-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C603%2C3000%2C1689&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
  thumbnailImageSrc: 'https://artic-web.imgix.net/496be7df-3725-4d9b-9f20-bf254abc2a0e/J13566-int-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C603%2C3000%2C1689&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://artic-web.imgix.net/7f4b2617-838a-4659-9db3-ab83984e6b03/P5_KameelahRasheed_jccotto-13-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C9%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
  thumbnailImageSrc: 'https://artic-web.imgix.net/7f4b2617-838a-4659-9db3-ab83984e6b03/P5_KameelahRasheed_jccotto-13-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C9%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://artic-web.imgix.net/8e2ae008-16a6-4f66-9f0e-9b9a5fc2778d/V05_P04-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C585%2C3000%2C1687&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687 ',
  thumbnailImageSrc: 'https://artic-web.imgix.net/8e2ae008-16a6-4f66-9f0e-9b9a5fc2778d/V05_P04-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C585%2C3000%2C1687&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1687',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
itemImageSrc: 'https://artic-web.imgix.net/7b336bcf-fab7-4faa-817f-8f15d3c904eb/gm_390711EX3_Original_Image17_Claudelimagebank-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C279%2C2384%2C1340&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1686',
thumbnailImageSrc: 'https://artic-web.imgix.net/7b336bcf-fab7-4faa-817f-8f15d3c904eb/gm_390711EX3_Original_Image17_Claudelimagebank-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C279%2C2384%2C1340&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1686',
alt: 'Description for Image 1',
title: 'Title 1'
},
{
itemImageSrc: 'https://artic-web.imgix.net/3bc33675-1655-4db2-8a7c-0c767b39414e/Caravaggio-TheCardshaprs%3BAP1987_06Caravaggio-unframed-cc-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1688',
thumbnailImageSrc: 'https://artic-web.imgix.net/3bc33675-1655-4db2-8a7c-0c767b39414e/Caravaggio-TheCardshaprs%3BAP1987_06Caravaggio-unframed-cc-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C0%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=3000&h=1688',
alt: 'Description for Image 1',
title: 'Title 1'
},
{
itemImageSrc: 'https://artic-web.imgix.net/496be7df-3725-4d9b-9f20-bf254abc2a0e/J13566-int-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C603%2C3000%2C1689&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
thumbnailImageSrc: 'https://artic-web.imgix.net/496be7df-3725-4d9b-9f20-bf254abc2a0e/J13566-int-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C603%2C3000%2C1689&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
alt: 'Description for Image 1',
title: 'Title 1'
},
{
itemImageSrc: 'https://artic-web.imgix.net/7f4b2617-838a-4659-9db3-ab83984e6b03/P5_KameelahRasheed_jccotto-13-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C9%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
thumbnailImageSrc: 'https://artic-web.imgix.net/7f4b2617-838a-4659-9db3-ab83984e6b03/P5_KameelahRasheed_jccotto-13-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C9%2C3000%2C1688&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Ccenter&w=1500&h=844',
alt: 'Description for Image 1',
title: 'Title 1'
},

]
responsiveOptions = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 8
  },
  {
      breakpoint: '560px',
      numVisible: 3
  }
];
position:'bottom' | 'top' | 'left' | 'right' | undefined='right'


screenHeight!: number;
screenWidth!: number;

constructor() {
    this.getScreenSize();
}

@HostListener('window:resize', ['$event'])
getScreenSize(event?: any) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      if(this.screenWidth>780){
        this.position='right'
      }
      if(this.screenWidth<=780){
        this.position='bottom'
      }
      
}
  
}
