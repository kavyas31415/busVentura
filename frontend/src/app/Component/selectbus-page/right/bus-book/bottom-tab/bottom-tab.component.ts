import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrls: ['./bottom-tab.component.css']
})
export class BottomTabComponent implements AfterViewInit {
  @Input() filledseats: number[] = [];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;
  @Input() operatorname: string = '';
  @Input() busid: string = '';

  tabstate: boolean[] = [false, false, false, false, false, false];  // Added sixth tab state

  ngAfterViewInit() {
    console.log('Pannellum:', window.pannellum); // Check if Pannellum is available
    if (this.tabstate[5]) {
      setTimeout(() => {
        if (window.pannellum && typeof window.pannellum.viewer === 'function') {
          this.initializeViewer(window.pannellum);
        } else {
          console.error('Pannellum is not loaded');
        }
      }, 2000); // Increase timeout duration as necessary
    }
  }

  initializeViewer(pannellum: any) {
    if (pannellum && typeof pannellum.viewer === 'function') {
      const panoramaElement = document.getElementById('panorama');
      if (panoramaElement) {
        const operatorImageMap: { [key: string]: string } = {
          'MetroBus': './assets/metrobus.jpeg',
          'TravelXpress': './assets/travelxpress.jpg',
          'FastTransit': './assets/fasttransit.jpg',
          'CityLink': './assets/citylink.jpg',
          'SwiftTrans': './assets/swifttrans.jpg',
          'ExpressLine': './assets/expressline.jpeg',
          'TransitHub': './assets/transithub.jpg',
          'EliteTravels' : './assets/elitetravels.jpg',
          'TravelMax' : './assets/travelmax.jpg',
          'SunriseTransit' : './assets/metrobus.jpeg',
          'RapidTransport' : './assets/fasttransit.jpg'
        };

        const panoramaImage = operatorImageMap[this.operatorname] || './assets/default-360-image.jpg';  // Ensure image path is correct

        pannellum.viewer('panorama', {
          type: 'equirectangular',
          panorama: panoramaImage,
          autoLoad: true,
          showZoomCtrl: false
        });
      } else {
        console.error('Panorama element not found');
      }
    } else {
      console.error('Pannellum viewer function is not available');
    }
  }

  handletabstate(value: number): void {
    this.tabstate = this.tabstate.map((_, index) => index === value);
    if (value === 5) {
      setTimeout(() => {
        if (window.pannellum && typeof window.pannellum.viewer === 'function') {
          this.initializeViewer(window.pannellum);
        } else {
          console.error('Pannellum is not loaded');
        }
      }, 2000); // Increase timeout duration as necessary
    }
  }
}
