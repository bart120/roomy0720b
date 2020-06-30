import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoomsModule } from './pages/rooms/rooms.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MaterialModule,
    RoomsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
