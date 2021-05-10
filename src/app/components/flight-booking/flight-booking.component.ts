import { Component, OnInit } from '@angular/core';
import { BookingsManageService } from 'src/app/services/bookings-manage.service';
import { DestManageService } from 'src/app/services/dest-manage.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

  flights: Array<any>;
  // dests: string[];


  public passName: string = '';
  public destination: string = '';
  public flightNumber: string = '';

  constructor(private bookingManage: BookingsManageService) { //,private de: DestManageService
    this.flights = this.bookingManage.getFlights();
    // this.dests = this.de.getDests();
  }

  ngOnInit(): void {
  }

  booking() {
    if(this.passName && this.destination && this.flightNumber){
      this.bookingManage.flightBooking({
        'passengerName': this.passName,
        'dest': this.destination,
        'flightNum': this.flightNumber
      });
      this.passName = '';
      this.destination = '';
      this.flightNumber = '';
    }
  }

}
