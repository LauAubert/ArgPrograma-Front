import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceModalComponent } from './modal/experience-modal/experience-modal.component';
import { SkillModalComponent } from './modal/skill-modal/skill-modal.component';
import { EducationModalComponent } from './modal/education-modal/education-modal.component';
import { ContactModalComponent } from './modal/contact-modal/contact-modal.component';
import { AboutmeComponent } from './cards/aboutme/aboutme.component';
import { AboutmeModalComponent } from './modal/aboutme-modal/aboutme-modal.component';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
const routes: Routes = [
  {
    path: 'project', 
    component: ExperienceModalComponent,
    data: {
      name: 'Proyecto',
      postURL: 'experience/',
      deleteURL: 'experience/',
      class: 'project',
    }
  },
  {
    path: 'job', 
    component: ExperienceModalComponent,
    data: {
      name: 'Trabajo',
      postURL: 'experience/',
      deleteURL: 'experience/',
      class: 'job',
    }
  },
  {
    path: 'skill',
    component: SkillModalComponent,
    data: {
      name: 'Habilidad',
      postURL: 'skill/',
      deleteURL: 'skill/',
      class: 'skill',
    }
  },
  {
    path: 'language',
    component: SkillModalComponent,
    data: {
      name: 'Idioma',
      postURL: 'skill/',
      deleteURL: 'skill/',
      class: 'language',
    }
  },
  {
    path: 'education',
    component: EducationModalComponent,
    data: { 
      name: 'Educación',
      postURL: 'education/',
      deleteURL: 'education/',
    }
  },
  {
    path: 'contact',
    component: ContactModalComponent,
    data: {
      name: 'Contacto',
      postURL: 'contact/',
    }
  },
  {
    path: 'aboutme',
    component: AboutmeModalComponent,
    data: {
      name: 'Sobre mi',
      postURL: 'aboutme/1',
    }
  },
  {
    path: 'login',
    component: LoginModalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
