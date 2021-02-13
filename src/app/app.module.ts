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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 import {AngularFireModule} from '@angular/fire';
 import {AngularFirestoreModule} from '@angular/fire/firestore';
// import {FirebaseService} from './services/firebase.service';


// firebase deploy --only hosting:remsenfireadmin

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
    HomeTilesComponent,
  ],
  imports: [
    BrowserModule, // EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
     AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
   // FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
