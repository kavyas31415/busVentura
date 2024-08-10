// frontend/src/model/reviews.model.ts
export interface Review {
  _id?: string;
  user: string;
  review: string;
  stars: number;
  createdAt?: string;
  updatedAt?: string;
}
