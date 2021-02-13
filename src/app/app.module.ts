import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
// import { EditorModule } from '@tinymce/tinymce-angular';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { EventComponent } from './event/event.component';
// import { WavesModule, ModalModule, CarouselModule } from 'angular-bootstrap-md'
import { HomeTilesComponent } from './home-tiles/home-tiles.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    IdeaListComponent,
    EventComponent,
    HomeTilesComponent
  //  ScheduleItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   // EditorModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
