import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { MainComponent } from './Components/main/main.component';
import { TopWidgetsComponent } from './Components/top-widgets/top-widgets.component';
import { SalesByWorthComponent } from './Components/sales-by-worth/sales-by-worth.component';
import { SalesByCategoryComponent } from './Components/sales-by-category/sales-by-category.component';
import { LastFewTransactionComponent } from './Components/last-few-transaction/last-few-transaction.component';
import { TopThreeProductsComponent } from './Components/top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';
import { AssetsComponent } from './Components/assets/assets.component';
import { LicensesComponent } from './Components/licenses/licenses.component';
import { AccessoriesComponent } from './Components/accessories/accessories.component';
import { ConsumablesComponent } from './Components/consumables/consumables.component';
import { ComponentsComponent } from './Components/components/components.component';
import { PeopleComponent } from './Components/people/people.component';
import { ReportComponent } from './Components/report/report.component';
import { RequestablesComponent } from './Components/requestables/requestables.component';
import { BodyComponent } from './Components/body/body.component';
import { AddAssetsComponent } from './Components/assets/add-assets/add-assets.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddcomponentComponent } from './Components/components/addcomponent/addcomponent.component';
import { AddconsumableComponent } from './Components/consumables/addconsumable/addconsumable.component';
import { AddModelComponent } from './Components/assets/add-assets/add-model/add-model.component';
import { AddStatusComponent } from './Components/assets/add-assets/add-status/add-status.component';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    DashboardComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByWorthComponent,
    SalesByCategoryComponent,
    LastFewTransactionComponent,
    TopThreeProductsComponent,
    AssetsComponent,
    LicensesComponent,
    AccessoriesComponent,
    ConsumablesComponent,
    ComponentsComponent,
    PeopleComponent,
    ReportComponent,
    RequestablesComponent,
    BodyComponent,
    AddAssetsComponent,
    AddcomponentComponent,
    AddconsumableComponent,
    AddModelComponent,
    AddStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ChartModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
