export type spot = {
  name: string;
  image: string;
  icon?: string;
  interests: string[];
};

export type review = {
  author: string;
  starRating?: number;
  review: string;
};

export type Place = google.maps.places.PlaceResult;

export type Review = google.maps.places.Review;

export type Photo = google.maps.places.Photo;
