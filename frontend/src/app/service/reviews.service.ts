// frontend/src/service/reviews.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Review } from '../model/reviews.model';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private apiUrl: string = `${url}reviews/`; // Adjust API URL as needed

  constructor(private http: HttpClient) { }

  // Get all reviews
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching reviews:', error);
        return throwError(error);
      })
    );
  }

  // Create a new review
  createReview(review: Omit<Review, '_id' | 'createdAt' | 'updatedAt'>): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review).pipe(
      catchError(error => {
        console.error('Error creating review:', error);
        return throwError(error);
      })
    );
  }

  // Get a review by ID
  getReviewById(id: string): Observable<Review> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Review>(url).pipe(
      catchError(error => {
        console.error('Error fetching review by ID:', error);
        return throwError(error);
      })
    );
  }

  // Update a review by ID
  updateReview(id: string, review: Partial<Omit<Review, '_id' | 'createdAt' | 'updatedAt'>>): Observable<Review> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Review>(url, review).pipe(
      catchError(error => {
        console.error('Error updating review:', error);
        return throwError(error);
      })
    );
  }

  // Delete a review by ID
  deleteReview(id: string): Observable<void> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(error => {
        console.error('Error deleting review:', error);
        return throwError(error);
      })
    );
  }
}
