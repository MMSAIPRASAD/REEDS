import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }
  image="/assets/med1.png";
  image1="/assets/med2.png";
  image2="/assets/med3.png";
  ngOnInit(): void {
  }

}
