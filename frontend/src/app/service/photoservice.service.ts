import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {
  getData() {
    return [
        {
            itemImageSrc: './assets/story/pondi.png',
            thumbnailImageSrc: './assets/story/pondi.png',
            alt: ' ~ Arjun Mehta',
            title: 'The bus ride to Pondicherry was smooth and comfortable. The seats were nice, the air conditioning was effective, and the scenery was enjoyable. The journey was punctual and relaxing.'
        },
        {
            itemImageSrc: './assets/story/chen.png',
            thumbnailImageSrc: './assets/story/chen.png',
            title: 'The bus ride to Chennai was comfortable and efficient. The seats were spacious, and the air conditioning was a relief in the summer heat. The journey was punctual, and the city’s skyline welcomed me warmly.',
            alt: '~ Rajesh Kumar'
        },
        {
            itemImageSrc: './assets/story/del.png',
            thumbnailImageSrc: './assets/story/del.png',
            title: 'Traveling to Delhi by bus was smooth and hassle-free. The ride was steady, and the onboard amenities made the trip pleasant. Arriving in Delhi, I was ready to explore the city’s vibrant energy.',
            alt: '~ Ananya Sharma'
        },
        {
            itemImageSrc: './assets/story/jai.png',
            thumbnailImageSrc: './assets/story/jai.png',
            title: 'The bus ride to Jaipur was delightful. The comfortable seats and the scenic views of the Rajasthan landscape made the journey enjoyable. I was excited to see the pink city upon arrival.',
            alt: '~ Arjun Mehta'
        },
        {
            itemImageSrc: './assets/story/kol.png',
            thumbnailImageSrc: './assets/story/kol.png',
            title: 'The bus ride to Kolkata was smooth and comfortable. The journey was well-managed, and the views of the changing landscapes kept me entertained. Arriving in Kolkata, I was ready to dive into its cultural richness.',
            alt: '~ Neha Patel'
        },
        {
            itemImageSrc: './assets/story/darl.png',
            thumbnailImageSrc: './assets/story/darl.png',
            title: 'The bus ride to Darjeeling was a scenic delight. The winding roads and breathtaking views of the hills made the journey memorable. The comfortable seats helped make the long ride enjoyable.',
            alt: '~ Vikram Singh'
        },
        {
            itemImageSrc: './assets/story/mum.png',
            thumbnailImageSrc: './assets/story/mum.png',
            title: 'The bus journey to Mumbai was efficient and comfortable. The smooth ride and cozy seats helped me relax before reaching the bustling city. The views of the coast as we approached were a nice touch.',
            alt: '~ Meera Banerjee'
        },
        {
            itemImageSrc: './assets/story/goa.png',
            thumbnailImageSrc: './assets/story/goa.png',
            title: 'Traveling to Goa by bus was a breeze. The comfortable ride and the refreshing air conditioning set the mood for a relaxing holiday. The lush greenery and coastal views added to the excitement.',
            alt: '~ Rahul Sen'
        },
        {
            itemImageSrc: './assets/story/bang.png',
            thumbnailImageSrc:  './assets/story/bang.png',
            title: 'Traveling to Bangalore by bus was comfortable and efficient. The ride was smooth, with good air conditioning. I enjoyed the views of the countryside as we approached the city.',
            alt: '~ Riya Agarwal'
        },
        {
            itemImageSrc: './assets/story/mys.png',
            thumbnailImageSrc: './assets/story/mys.png',
            title: 'The bus journey to Mysore was pleasant and relaxing. The comfortable seating and smooth ride prepared me well for exploring the city’s historic sites and beautiful gardens.',
            alt: '~ Siddharth Rao'
        }
    ];
}

getImages() {
    return Promise.resolve(this.getData());
}
}
