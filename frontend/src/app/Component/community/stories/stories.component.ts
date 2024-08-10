import { Component, OnInit } from '@angular/core';
import { PhotoserviceService } from 'src/app/service/photoservice.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {

  images: any[] | undefined;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoserviceService) {}

  ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
  }

}
