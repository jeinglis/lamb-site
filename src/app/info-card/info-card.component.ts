import { Component } from '@angular/core';



export interface IImage {
  url: string | null;
  href?: string;
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})

export class InfoCardComponent {
  constructor() { }

  imageUrlArray: (string | IImage)[] = [
    { url: '../../assets/lamb-chops.jpg', caption: 'Lamb Bits'},
    { url: '../../assets/lamb-leg.jpg', caption: 'Lamb Lips'},
    { url: '../../assets/roast-lamb.jpg', caption: 'Lamb Arseholes', href: '' },
  ];
}
