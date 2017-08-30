
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {FormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, NgForm } from '@angular/forms';
import {ControlContainer} from '@angular/forms';
import {GrowlModule} from 'primeng/components/growl/growl';
import {UsersComponent} from './login/users/users.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {InputTextModule, ButtonModule, DialogModule} from 'primeng/primeng';
import {UserService} from './login/users/user.service';

import { ConfirmDialogModule , PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { DashbboardComponent } from './dashbboard/dashbboard.component';
import {MigrationService} from "./dashbboard/migration.service";
import { NewComponent } from './new/new.component';
const appRoutes: Routes = [
   { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
    
  { path: 'login', component: LoginComponent },
  

  { path: 'dashboard',  component: DashbboardComponent},
  { path: 'users',  component: UsersComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'new',      component: NewComponent } ,
{ path: '**', redirectTo: '/login',
    pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HomeComponent,
    UsersComponent,
    DashbboardComponent,
    NewComponent,
    
  
  ],
  imports: [

    BrowserModule,AccordionModule, HttpModule, SharedModule, DataTableModule, InputTextModule, ButtonModule, DialogModule,
    TabViewModule, ConfirmDialogModule , SharedModule,
    ButtonModule,   BrowserAnimationsModule,InputTextModule,
    GrowlModule, PanelModule,
    ReactiveFormsModule, FormsModule, InputTextareaModule,
    RouterModule.forRoot(
      appRoutes

    )
  ],
  providers: [  UserService ,MigrationService],

  bootstrap: [AppComponent]
})
export class AppModule { }
