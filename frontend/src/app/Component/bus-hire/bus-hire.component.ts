import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DlogComponent } from './dlog/dlog.component';
import { BusService } from 'src/app/service/bus.service';
import { BusResponse } from 'src/app/model/busresponse.model'; // Import the BusResponse interface
import { Bus } from 'src/app/model/bus.model';
import { SuccessComponent } from './success/success.component';

@Component({
  selector: 'app-bus-hire',
  templateUrl: './bus-hire.component.html',
  styleUrls: ['./bus-hire.component.css']
})
export class BusHireComponent {
  hireForm: FormGroup;
  date: string = '';
  isVisible: boolean = false;
  contactInfo: string = ''; // Ensure contactInfo is always a string
  hiredBus?: Bus; // Add this property to track the hired bus

  @ViewChild('resultDiv') resultDiv!: ElementRef;
  matchedbus: Bus[] = []; // Use Bus[] type
  seats: { [key: string]: any } = {};

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private busService: BusService
  ) {
    this.hireForm = this.fb.group({
      from: [''],
      to: [''],
      pickupDate: [''],
      pickupTime: [''],
      size: [''],
      amenities: [[]]
    });
  }

  fromEvent(option: string) {
    this.hireForm.get('from')?.setValue(option);
  }

  toEvent(option: string) {
    this.hireForm.get('to')?.setValue(option);
  }

  matchDate(event: any) {
    if (event.value) {
      const date = new Date(event.value);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      this.date = `${year}-${month}-${day}`;
    } else {
      this.date = '';
    }
    console.log(this.date);
  }

  submit() {
    const validRoutes = [
      { from: 'Delhi', to: 'Jaipur' },
      { from: 'Mumbai', to: 'Goa' },
      { from: 'Bangalore', to: 'Mysore' },
      { from: 'Kolkata', to: 'Darjeeling' },
      { from: 'Chennai', to: 'Pondicherry' }
    ];

    const formValues = this.hireForm.value;
    const arrivalDate = this.date; // Ensure this is set correctly

    if (formValues.from && formValues.to && arrivalDate) {
      const isValidRoute = validRoutes.some(route =>
        route.from === formValues.from && route.to === formValues.to
      );

      if (isValidRoute) {
        this.isVisible = true;
        this.busService.GETHIREDETAILS(formValues.from, formValues.to, arrivalDate).subscribe((response: BusResponse) => {
          this.matchedbus = response.matchedBuses; // Now correctly typed
          this.seats = response.seats; // Adjust if necessary
          setTimeout(() => {
            this.scrollToResult();
          }, 0); // Scroll after the DOM updates
        }, (error) => {
          console.error('Error fetching bus details:', error);
        });
      } else {
        this.dialog.open(DlogComponent, {
          data: { message: 'Invalid route. Please select a valid route.' }
        });
      }
    } else {
      this.dialog.open(DlogComponent, {
        data: { message: 'Please fill all required fields.' }
      });
    }
  }

  scrollToResult() {
    if (this.resultDiv) {
      this.resultDiv.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  calculateAverageRating(ratings: number[]): number {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    return total / ratings.length;
  }

  hireBus(bus: Bus) {
    // Find the bus with the matching operatorName from the matchedbus array
    const matchedBus = this.matchedbus.find(b => b.operatorName === bus.operatorName);
  
    if (matchedBus && matchedBus.driverContact) {
      this.contactInfo = matchedBus.driverContact;
      this.hiredBus = bus; // Set the hiredBus property
      this.dialog.open(SuccessComponent, {
        data: { message: `Bus ${bus.operatorName} has been hired successfully! Contact: ${this.contactInfo}` }
      });
    } else {
      this.contactInfo = 'Contact information not available';
      this.dialog.open(SuccessComponent, {
        data: { message: `Bus ${bus.operatorName} has been hired successfully! Contact: ${this.contactInfo}` }
      });
    }
  }

  getImagesForOperator(operatorName: string): string[] {
    const bus = this.matchedbus.find(b => b.operatorName === operatorName);
    return bus ? bus.bimage.split(',') : []; 
  }
  
}
