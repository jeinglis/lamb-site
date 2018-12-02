import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(@Inject(DOCUMENT) document) { }
  ngOnInit() {
  }

@HostListener('window:scroll', ['$event'])
onWindowScroll(e) {
  if (window.pageYOffset > 0) {
    const element = document.getElementById('navbar');
    element.classList.add('sticky');
  } else {
    const element = document.getElementById('navbar');
    element.classList.remove('sticky');
  }
}
}
