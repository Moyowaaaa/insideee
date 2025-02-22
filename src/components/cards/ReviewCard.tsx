import React, { useState } from "react";
import "./ReviewCard.scss";
import { Place, Review, review } from "../../constants/types";
import { StarIcon } from "../skeletons/StarIcon";

const ReviewCard = ({ review }: { review: Partial<Review> }) => {
  const ratingCount = review.rating;
  const roundedRating = Math.round(ratingCount as number);
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      <div className="reviewCard">
        <div className="reviewCard__top-section">
          <p>{review.authorAttribution?.displayName}</p>

          <div className="reviewCard__top-section--ratings-container">
            <div>
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} filled={index < roundedRating} />
              ))}
            </div>
          </div>
        </div>
        <div className="reviewCard__bottom-section">
          <p>{review.text}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
