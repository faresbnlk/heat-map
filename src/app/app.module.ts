import { ChartAllModule } from '@syncfusion/ej2-angular-charts';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HeatMapAllModule } from '@syncfusion/ej2-angular-heatmap';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, HeatMapAllModule, ChartAllModule, ButtonModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
