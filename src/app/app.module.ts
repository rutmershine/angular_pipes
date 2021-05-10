import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowGuessComponent } from './show-guess/show-guess.component';
import { ManageGuessComponent } from './manage-guess/manage-guess.component';
import { UserGuessComponent } from './user-guess/user-guess.component';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { AddDestComponent } from './components/add-dest/add-dest.component';
import { SetCurrentUserComponent } from './components/set-current-user/set-current-user.component';
import { ShowPipesComponent } from './components/show-pipes/show-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowGuessComponent,
    ManageGuessComponent,
    UserGuessComponent,
    FlightBookingComponent,
    AddDestComponent,
    SetCurrentUserComponent,
    ShowPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
