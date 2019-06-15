import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AngularValidateBrLibModule  } from 'angular-validate-br';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { ValidateBrService } from 'angular-validate-br';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterPhysioComponent } from './register-physio/register-physio.component';
import { RegisterPatientComponent } from './patient/register/register.component';
import { RegisterManagerComponent } from './manager/register/register.component';
import { ProfilePatientComponent } from './patient/profile/profile.component';
import { PatientPageComponent } from './patient/page/page.component';
import { UpdateComponent } from './patient/update/update.component';
import { UpdateManagerComponent } from './manager/update/update.component';
import { ManagerPageComponent } from './manager/page/page.component';
import { ProfileComponent } from './manager/profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { SociodemographicComponent } from './forms/sociodemographic/sociodemographic.component';
import { KineticComponent } from './forms/kinetic/kinetic.component';
import { GoniometryComponent } from './forms/goniometry/goniometry.component';
import { MuscleStrengthComponent } from './forms/muscle-strength/muscle-strength.component';
import { AshworthComponent } from './forms/ashworth/ashworth.component';
import { PainScaleComponent } from './forms/pain-scale/pain-scale.component';
import { PiPeComponent } from './forms/pi-pe/pi-pe.component';
import { SensorialComponent } from './forms/sensorial/sensorial.component';
import { TinetiComponent } from './forms/tineti/tineti.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    AuthComponent,
    LoginComponent,
    RegisterPatientComponent,
    RegisterManagerComponent,
    RegisterPhysioComponent,
    ProfilePatientComponent,
    PatientPageComponent,
    UpdateComponent,
    UpdateManagerComponent,
    ManagerPageComponent,
    ProfileComponent,
    FormsComponent,
    SociodemographicComponent,
    KineticComponent,
    GoniometryComponent,
    MuscleStrengthComponent,
    AshworthComponent,
    PainScaleComponent,
    PiPeComponent,
    SensorialComponent,
    TinetiComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgbModule.forRoot(),
    PerfectScrollbarModule,
    AngularValidateBrLibModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
