import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img') 
  set changeImg (newImg: string){
    this.img = newImg;
    console.log('change just img => ', this.img)
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/img/last.jpg';

  // counter = 0;
  // counterFn: number | undefined;


  constructor() { 
    // Before render
    // no usar async -- any times 
    // console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges (changes: SimpleChanges ){
    // Before & during render 
    //  changes inpust -- times 
    // console.log('ngOnChanges', 'imgValue =>', this.img);
    // console.log('change', changes); 

  }

  ngOnInit(): void {
    // Before render
    // async & await, fetch -- once time
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn =  window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('runcounter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children
    // console.log('ngAfterViewInit');
  }
   ngOnDestroy(): void {
    //  delete  
    // console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
   }

  imgError () {
    this.img = this.imageDefault;
  }
  imgLoad () {
    // console.log('loaded hijo  ');
    this.loaded.emit(this.img);
  } 


}
