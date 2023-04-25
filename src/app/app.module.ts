import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutmeComponent } from './cards/aboutme/aboutme.component';
import { BaseEditorComponent } from './cards/base-editor/base-editor.component';
import { BaseButtonComponent } from './buttons/base-button/base-button.component';
import { ExperienceComponent } from './cards/experience/experience.component';
import { UdButtonComponent } from './buttons/ud-button/ud-button.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './cards/contact/contact.component';
import { SkillComponent } from './cards/skill/skill.component';
import { EducationComponent } from './cards/education/education.component';
import { BaseModalComponent } from './modal/base-modal/base-modal.component';
import { CloseButtonComponent } from './buttons/close-button/close-button.component';
import { ExperienceModalComponent } from './modal/experience-modal/experience-modal.component';
import { SkillModalComponent } from './modal/skill-modal/skill-modal.component';
import { EducationModalComponent } from './modal/education-modal/education-modal.component';
import { ContactModalComponent } from './modal/contact-modal/contact-modal.component';
import { AboutmeModalComponent } from './modal/aboutme-modal/aboutme-modal.component';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

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
    BaseModalComponent,
    CloseButtonComponent,
    ExperienceModalComponent,
    SkillModalComponent,
    EducationModalComponent,
    ContactModalComponent,
    AboutmeModalComponent,
    LoginModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: ['localhost:3000'], // Reemplazar por tu dominio
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
