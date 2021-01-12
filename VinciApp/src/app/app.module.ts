import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectModule } from './project/project.module';

import { ConfigService } from './services/config.service'
import { GlobalStorageService } from './services/globalStorage.service' 
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
