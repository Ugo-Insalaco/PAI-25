import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectModule } from './project/project.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'; 

import { ConfigService } from './services/config.service'
import { GlobalStorageService } from './services/globalStorage.service' 
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service'

//import { BackendService } from './backend.service';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component'; 




import {MatCardModule} from '@angular/material/card'; 


import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { DesComponent } from './des/des.component';
import { ImagesComponent } from './images/images.component';
import { VideoComponent } from './video/video.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SearchComponent } from './search/search.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { BannerComponent } from './banner/banner.component';
import { OfferComponent } from './offer/offer.component';
import { CadranComponent } from './cadran/cadran.component';
import { SolutionComponent } from './solution/solution.component';
import { BtnlinkcadransComponent } from './btnlinkcadrans/btnlinkcadrans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DesComponent,
    ImagesComponent,
    VideoComponent,
    ContactFormComponent,
    SearchComponent,
    FieldErrorDisplayComponent,
    BannerComponent,
    OfferComponent,
    CadranComponent,
    SolutionComponent,
    BtnlinkcadransComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProjectModule,
    MatToolbarModule,
    MatIconModule ,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    FormsModule, 
    ReactiveFormsModule,
    MatRadioModule,
    ProjectModule
  ],
  providers: [
    ConfigService,
    GlobalStorageService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
