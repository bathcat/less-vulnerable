import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportEditorComponent } from './weather-report/weather-report-editor.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { SnakesComponent } from './snakes/snakes.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { WeatherComponent } from './weather-report/weather-reports.component';
import { BeverageEditorComponent } from './beverages/beverage-editor.component';
import { SnakeEditorComponent } from './snakes/snake-editor.component';
import { BeverageMakerComponent } from './beverages/beverage-maker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //
  { path: 'beverages', component: BeveragesComponent },
  { path: 'beverages/create', component: BeverageMakerComponent },
  { path: 'beverages/:id', component: BeverageEditorComponent },
  //
  { path: 'snakes', component: SnakesComponent },
  { path: 'snakes/create', component: SnakeEditorComponent },
  { path: 'snakes/:id', component: SnakeEditorComponent },
  //
  { path: 'weather-reports', component: WeatherComponent },
  { path: 'weather-reports/create', component: WeatherReportEditorComponent },
  { path: 'weather-reports/:id', component: WeatherReportEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
