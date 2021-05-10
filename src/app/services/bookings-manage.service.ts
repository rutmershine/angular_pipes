import { Injectable } from '@angular/core';

const bookings = [
  {
    'passengerName': 'someone',
    'dest': 'somewhere',
    'flightNum': 'something'
  },
]

@Injectable({
  providedIn: 'root'
})
export class BookingsManageService {

  private bookings = bookings;
  constructor() { }

  flightBooking(booking: typeof bookings[0]) {
    this.bookings.push(booking);
  }

  getFlights(){
    return this.bookings;
  }
}




// flightBooking(passengerName: string, dest: string, flightNum: string) {
//   this.bookings.push({
//     'passengerName': passengerName,
//     'dest': dest,
//     'flightNum': flightNum
//   });
// }
