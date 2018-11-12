import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('onLoad', [
      // ...
      state('hideLogo', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('showLogo', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('hideLogo => showLogo', [
        animate('1s')
      ]),
      transition('showLogo => hideLogo', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const element: HTMLMediaElement = <HTMLMediaElement>document.getElementById('video');
      element.muted = true;
  }

}
