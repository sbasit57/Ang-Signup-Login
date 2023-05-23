import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AssetsComponent } from './Components/assets/assets.component';
import { ComponentsComponent } from './Components/components/components.component';
import { ConsumablesComponent } from './Components/consumables/consumables.component';
import { LicensesComponent } from './Components/licenses/licenses.component';
import { PeopleComponent } from './Components/people/people.component';
import { ReportComponent } from './Components/report/report.component';
import { RequestablesComponent } from './Components/requestables/requestables.component';
import { AccessoriesComponent } from './Components/accessories/accessories.component';
import { AddAssetsComponent } from './Components/assets/add-assets/add-assets.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'assets',component:AssetsComponent},
  {path:'components',component:ComponentsComponent},
  {path:'consumables',component:ConsumablesComponent},
  {path:'license',component:LicensesComponent},
  {path:'people',component:PeopleComponent},
  {path:'report',component:ReportComponent},
  {path:'requestables',component:RequestablesComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'addassets',component:AddAssetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
