import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreStateModule } from '@fem-production-angular/core-state';
import { MaterialModule } from '@fem-production-angular/material';
import { CoreDataModule } from '@fem-production-angular/core-data';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
