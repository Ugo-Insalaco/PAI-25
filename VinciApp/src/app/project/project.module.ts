import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BackendService } from '../services/backend.service';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from "./question/question.component";

@NgModule({
    declarations: [
      ProjectComponent,
      QuestionComponent,
    ],
    imports: [
       BrowserModule,
       AppRoutingModule,
       BrowserAnimationsModule,
       MatStepperModule,
       MatCardModule,
       MatButtonModule,
       MatGridListModule,
       FormsModule
    ],
    providers: [
      BackendService
    ],
    exports: [ProjectComponent]
  })
  export class ProjectModule { }