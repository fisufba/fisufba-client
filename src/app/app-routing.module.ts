import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterPatientComponent } from './patient/register/register.component';
import { RegisterManagerComponent } from './manager/register/register.component';

import { PatientPageComponent } from './patient/page/page.component';

import { RegisterPhysioComponent } from './register-physio/register-physio.component';

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
        path: 'paciente',
        component: PatientPageComponent
      },
      {
        path: 'paciente#settings',
        component: RegisterPhysioComponent
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
