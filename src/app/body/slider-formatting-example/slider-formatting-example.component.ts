import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-slider-formatting-example',
  templateUrl: './slider-formatting-example.component.html',
  styleUrls: ['./slider-formatting-example.component.css']
})



export class SliderFormattingExampleComponent implements OnInit {

  @Output() emitir:EventEmitter<number> = new EventEmitter<number>();
  value= 0;


  showTicks = false;



  subscription :any;
  public simpleObservable:any;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: MatSliderChange) {
    console.log("This is emitted as the thumb slides");
    return event.value;

  }

  public publicar(date: number): void {
    this.emitir.emit(date);
  }




}
