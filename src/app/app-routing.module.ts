import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterPatientComponent } from './patient/register/register.component';
import { RegisterManagerComponent } from './manager/register/register.component';
import { RegisterPhysioComponent } from './physio/register/register.component';

import { PatientPageComponent } from './patient/page/page.component';
import { ManagerPageComponent } from './manager/page/page.component';
import { PhysioPageComponent } from './physio/page/page.component';

import { FormsComponent } from './forms/forms.component';
import { SociodemographicComponent } from './forms/sociodemographic/sociodemographic.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      {
        path: 'novo/fisioterapeuta',
        component: RegisterPhysioComponent
      },
      {
        path: 'novo/paciente',
        component: RegisterPatientComponent
      },
      {
        path: 'novo/atendente',
        component: RegisterManagerComponent
      },
      {
        path: 'fisioterapeuta',
        component: PhysioPageComponent
      },
      {
        path: 'paciente',
        component: PatientPageComponent
      },
      {
        path: 'atendente',
        component: ManagerPageComponent
      },
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'sociodemografico',
        component: SociodemographicComponent
      },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {}
