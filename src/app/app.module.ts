import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';


// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load PowerCharts module
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts';
// Load fusion theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Powercharts, FusionTheme, Charts, Candy);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
