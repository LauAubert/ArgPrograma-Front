import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutmeComponent } from './cards/aboutme/aboutme.component';
import { BaseEditorComponent } from './cards/base-editor/base-editor.component';
import { BaseButtonComponent } from './cards/base-button/base-button.component';
import { ExperienceComponent } from './cards/experience/experience.component';
import { UdButtonComponent } from './buttons/ud-button/ud-button.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    BaseEditorComponent,
    BaseButtonComponent,
    ExperienceComponent,
    UdButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
