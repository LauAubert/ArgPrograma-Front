import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceModalComponent } from './modal/experience-modal/experience-modal.component';
import { SkillModalComponent } from './modal/skill-modal/skill-modal.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
