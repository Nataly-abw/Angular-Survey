import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyIntroductionComponent } from './welcome/survey-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyIntroductionComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
