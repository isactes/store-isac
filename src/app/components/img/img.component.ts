import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/img/last.jpg';


  constructor() { 
    // Before render
    // no usar async -- once time 
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnInit(): void {
  }

  imgError () {
    this.img = this.imageDefault;
  }
  imgLoad () {
    console.log('loaded hijo  ');
    this.loaded.emit(this.img);
  } 


}
