import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {
  CoreStateModule,
  coreStateRoutes,
} from '@fem-production-angular/core-state';
import {
  MaterialModule,
  materialRoutes,
} from '@fem-production-angular/material';
import {
  CoreDataModule,
  coreDataRoutes,
} from '@fem-production-angular/core-data';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';

@NgModule({
  declarations: [AppComponent, WidgetsComponent, WidgetsListComponent, WidgetsDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreStateModule,
    MaterialModule,
    CoreDataModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
