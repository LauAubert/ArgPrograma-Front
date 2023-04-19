import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceModalComponent } from './modal/experience-modal/experience-modal.component';
import { SkillModalComponent } from './modal/skill-modal/skill-modal.component';
import { EducationModalComponent } from './modal/education-modal/education-modal.component';
import { ContactModalComponent } from './modal/contact-modal/contact-modal.component';
import { AboutmeComponent } from './cards/aboutme/aboutme.component';
const routes: Routes = [
  {
    path: 'project', 
    component: ExperienceModalComponent,
    data: {
      name: 'Proyecto',
    }
  },
  {
    path: 'job', 
    component: ExperienceModalComponent,
    data: {
      name: 'Trabajo',
    }
  },
  {
    path: 'skill',
    component: SkillModalComponent,
    data: {
      name: 'Habilidad',
    }
  },
  {
    path: 'language',
    component: SkillModalComponent,
    data: {
      name: 'Idioma',
    }
  },
  {
    path: 'education',
    component: EducationModalComponent,
    data: { 
      name: 'Educación',
    }
  },
  {
    path: 'contact',
    component: ContactModalComponent,
    data: {
      name: 'Contacto',
    }
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
    data: {
      name: 'Sobre mi',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
