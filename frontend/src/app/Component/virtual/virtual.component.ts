import { Component, OnInit } from '@angular/core';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  buses: any[] = [];
  showTour: boolean = false;
  selectedBus: any = null;

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.fetchBuses();
  }

  fetchBuses(): void {
    this.busService.getAllBuses().subscribe((data: any) => {
      this.buses = data;
    });
  }

  toggleTour(bus: any): void {
    this.selectedBus = bus;
    this.showTour = true;
    this.initializeTour();
  }

  initializeTour(): void {
    if (this.selectedBus && this.selectedBus.images) {
      const panorama = document.getElementById('panorama');
      if (panorama) {
        (window as any).pannellum.viewer(panorama, {
          type: 'equirectangular',
          panorama: this.selectedBus.images,
          autoLoad: true
        });
      }
    }
  }
}
