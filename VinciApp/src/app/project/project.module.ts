import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
      ProjectComponent,
    ],
    imports: [
       BrowserModule,
       AppRoutingModule,
       BrowserAnimationsModule,
       MatStepperModule,
       MatCardModule,
       MatButtonModule,
       MatGridListModule
    ],
    providers: [
      
    ],
    exports: [ProjectComponent]
  })
  export class ProjectModule { }