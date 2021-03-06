import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';

const appRoutes: Routes = [
  {
    path: '', component: InfoCardComponent
  },
  {
    path: 'info-card', component: InfoCardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 10], // [x, y],
        onSameUrlNavigation: 'reload'
      }
    ),
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
