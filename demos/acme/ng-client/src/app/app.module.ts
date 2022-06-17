import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherReportEditorComponent } from './weather-report/weather-report-editor.component';
import { NavbarLoginComponent } from './navbar/navbar-login.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { SnakesComponent } from './snakes/snakes.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { NavbarLogoComponent } from './navbar/navbar-logo.component';
import { WeatherReportListComponent } from './weather-report/weather-report-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { TokenInterceptor } from './security/token-interceptor';
import { NavbarLogoutComponent } from './navbar/navbar-logout.component';
import { WeatherComponent } from './weather-report/weather-reports.component';
import { SnakeEditorComponent } from './snakes/snake-editor.component';
import { SnakeListComponent } from './snakes/snake-list.component';
import { BeverageListComponent } from './beverages/beverage-list.component';
import { BeverageEditorComponent } from './beverages/beverage-editor.component';
import { BeverageMakerComponent } from './beverages/beverage-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //
    NavbarLoginComponent,
    NavbarLogoutComponent,
    NavbarLogoComponent,
    //
    WeatherReportListComponent,
    WeatherReportEditorComponent,
    WeatherComponent,
    //
    BeveragesComponent,
    BeverageListComponent,
    BeverageEditorComponent,
    BeverageMakerComponent,
    //
    SnakeEditorComponent,
    SnakeListComponent,
    SnakesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Material
    MatTableModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
