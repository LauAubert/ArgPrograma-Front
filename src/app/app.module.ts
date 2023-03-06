import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutmeComponent } from './cards/aboutme/aboutme.component';
import { BaseEditorComponent } from './cards/base-editor/base-editor.component';
import { BaseButtonComponent } from './buttons/base-button/base-button.component';
import { ExperienceComponent } from './cards/experience/experience.component';
import { UdButtonComponent } from './buttons/ud-button/ud-button.component';

import { FormsModule } from '@angular/forms';
import { ContactComponent } from './cards/contact/contact.component';
import { SkillComponent } from './cards/skill/skill.component';
import { EducationComponent } from './cards/education/education.component';
import { CurtainComponent } from './modal/curtain/curtain.component';
import { BaseModalComponent } from './modal/base-modal/base-modal.component';
import { CloseButtonComponent } from './buttons/close-button/close-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    BaseEditorComponent,
    BaseButtonComponent,
    ExperienceComponent,
    UdButtonComponent,
    ContactComponent,
    SkillComponent,
    EducationComponent,
    CurtainComponent,
    BaseModalComponent,
    CloseButtonComponent
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
