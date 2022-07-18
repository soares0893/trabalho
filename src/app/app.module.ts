import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './view/components/header/header.component';
import { ScriptsComponent } from './view/components/scripts/scripts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScriptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
