import { CommonModule } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionComponent } from '../question/question.component'
import { ModifProjectComponent } from '../modif-project/modif-project.component'
import { ModifQuestionComponent } from '../modif-question/modif-question.component'

@NgModule({
    declarations: [
      ProjectComponent,
      QuestionComponent,
      ModifProjectComponent,
      ModifQuestionComponent
    ],
    imports: [
       CommonModule,
       BrowserModule,
       AppRoutingModule,
       BrowserAnimationsModule,
       MatStepperModule,
       MatCardModule,
       MatButtonModule,
       MatGridListModule,
       FormsModule,
       ReactiveFormsModule
    ],
    providers: [
      BackendService
    ],
    exports: [ProjectComponent]
  })
  export class ProjectModule { }