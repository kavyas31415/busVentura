import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';
import { Review } from 'src/app/model/reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
  reviews: Review[] = [];
  review: Partial<Review> = {};

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewsService.getAllReviews().subscribe(
      (reviews) => this.reviews = reviews,
      (error) => console.error('Error loading reviews:', error)
    );
  }

  addReview(): void {
    if (this.review.user && this.review.review && this.review.stars) {
      this.reviewsService.createReview(this.review as Omit<Review, '_id' | 'createdAt' | 'updatedAt'>).subscribe(
        (newReview) => {
          this.reviews.push(newReview);
          this.review = {}; // Reset the form
        },
        (error) => console.error('Error adding review:', error)
      );
    }
  }

  

}
