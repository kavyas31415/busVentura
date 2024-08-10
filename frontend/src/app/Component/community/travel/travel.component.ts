import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit, OnDestroy {
  images: string[] = [
    './assets/community_images/slide1.png',
    './assets/community_images/slide2.png',
    './assets/community_images/slide3.png',
    './assets/community_images/slide4.png',
    './assets/community_images/slide5.png',
    
  ];

  reviews: { name: string; text: string; stars: string; }[] = [
    { name: 'Priya Sharma', text: 'The \'Bangalore Express\' from Bangalore to Chennai was incredibly comfortable and well-maintained. The journey was smooth and timely. Highly recommended!', stars: '★★★★★' },
    { name: 'Rajesh Patel', text: 'The \'Mumbai-Goa Delight\' made our trip from Mumbai to Goa enjoyable. The seats were nice, but the bus could have been cleaner. Overall, a good experience.', stars: '★★★★☆' },
    { name: 'Aisha Khan', text: 'The \'Delhi-Kolkata Cruiser\' provided a pleasant journey from Delhi to Kolkata. The service was friendly, though the ride was slightly delayed.', stars: '★★★★☆' },
    { name: 'Arjun Reddy', text: 'The \'Mysore-Pondicherry Comfort\' was a solid choice for our trip. The journey from Mysore to Pondicherry was decent, but a bit more legroom would have been appreciated.', stars: '★★★☆☆' }
    

  ];

  currentIndex: number = 0;
  slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  get transform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
