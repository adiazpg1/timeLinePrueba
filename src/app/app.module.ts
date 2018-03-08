import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HorizontalTimelineComponent } from './components/horizontal-timeline/horizontal-timeline.component';
import { HttpClientModule } from '@angular/common/http';
import { SharepointService } from './services/sharepoint.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalTimelineComponent,
    TimelineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SharepointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
