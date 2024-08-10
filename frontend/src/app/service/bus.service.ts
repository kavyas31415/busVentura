import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bus } from '../model/bus.model';
import { Booking } from '../model/booking.model';
import { BusResponse } from '../model/busresponse.model';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private busbookapi: string = url + 'booking/';
  private apiurl: string = url + 'routes/';
  private allBusesApi: string = url + 'buses/'; 
  private hireRequestsApi: string = url + 'hire-requests/'; 

  constructor(private http: HttpClient) { }

  GETBUSDETAILS(depart: string, arrival: string, date: string): Observable<Bus[]> {
    const url = `${this.apiurl}${depart}/${arrival}/${date}`;
    return this.http.get<Bus[]>(url).pipe(
      catchError(error => {
        console.error('Error fetching bus details:', error);
        return throwError(error);
      })
    );
  }

  GETHIREDETAILS(depart: string, arrival: string, date: string): Observable<BusResponse> {
    const url = `${this.apiurl}${depart}/${arrival}/${date}`;
    return this.http.get<BusResponse>(url).pipe(
      catchError(error => {
        console.error('Error fetching bus details:', error);
        return throwError(error);
      })
    );
  }
 

  addbusmongo(myBooking: any): Observable<Booking> {
    const busbook: Booking = {
      customerId: myBooking.customerId,
      passengerDetails: myBooking.passengerDetails,
      email: myBooking.email,
      phoneNumber: myBooking.phoneNumber,
      fare: myBooking.fare,
      status: myBooking.status,
      bookingDate: myBooking.bookingDate,
      busId: myBooking.busId,
      seats: myBooking.seats,
      departureDetails: myBooking.departureDetails,
      arrivalDetails: myBooking.arrivalDetails,
      duration: myBooking.duration,
      isBusinessTravel: myBooking.isBusinessTravel,
      isInsurance: myBooking.isInsurance,
      isCovidDonated: myBooking.isCovidDonated
    };
    return this.http.post<Booking>(this.busbookapi, busbook).pipe(
      catchError(error => {
        console.error('Error adding bus booking:', error);
        return throwError(error);
      })
    );
  }

  getbusmongo(id: string): Observable<Booking[]> {
    const url = `${this.busbookapi}${id}`;
    return this.http.get<Booking[]>(url).pipe(
      catchError(error => {
        console.error('Error fetching bus booking:', error);
        return throwError(error);
      })
    );
  }

  getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.allBusesApi).pipe(
      catchError(error => {
        console.error('Error fetching all buses:', error);
        return throwError(error);
      })
    );
  }

 
}
