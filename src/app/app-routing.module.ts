import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceModalComponent } from './modal/experience-modal/experience-modal.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
