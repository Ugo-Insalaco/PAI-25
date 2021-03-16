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

import {MatDialogModule} from '@angular/material/dialog';

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
import { ContactResumeComponent } from './contact-resume/contact-resume.component';
import { BannerComponent } from './banner/banner.component';
import { OfferComponent } from './offer/offer.component';
import { CadranComponent } from './cadran/cadran.component';
import { SolutionComponent } from './solution/solution.component';
import { BtnlinkcadransComponent } from './btnlinkcadrans/btnlinkcadrans.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ModifProjectComponent } from './modif-project/modif-project.component';
import { ModifTexteComponent } from './modif-texte/modif-texte.component';
import { ModifImageComponent } from './modif-image/modif-image.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { NewSolutionComponent } from './new-solution/new-solution.component';
import { NewSolutionFormComponent } from './new-solution-form/new-solution-form.component';

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
    ContactResumeComponent,
    BannerComponent,
    OfferComponent,
    CadranComponent,
    SolutionComponent,
    BtnlinkcadransComponent,
    NewProjectComponent,
    ModifProjectComponent,
    ModifTexteComponent,
    ModifImageComponent,
    SidenavMenuComponent,
    NewOfferComponent,
    NewSolutionComponent,
    NewSolutionFormComponent
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
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
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
