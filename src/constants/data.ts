import { review, spot } from "./types";
import outdoorzyy from "../assets/images/outdoorzyy.png";
import food from "../assets/images/food.png";
import others from "../assets/images/others.png";
import outdoorIcon from "../assets/images/outdoorIcon.png";
import foodIcon from "../assets/images/foodIcon.png";

export const spotTypes: spot[] = [
  {
    name: "Outdoorzyy",
    image: outdoorzyy,
    icon: outdoorIcon,
  },
  {
    name: "Food & Drinks",
    image: food,
    icon: foodIcon,
  },
  {
    name: "Others",
    image: others,
  },
];

export const reviews: review[] = [
  {
    author: "Anonymous",
    starRating: 4,
    review:
      "I dined here last night, and it was an outstanding experience. The ambiance was cozy and elegant, and the staff was attentive. The food was beautifully presented and full of flavor, especially the steak and seafood pasta. You can tell the chefs are passionate about their craft. Highly recommend this place!",
  },
  {
    author: "Alex R.",
    starRating: 4,
    review:
      "Great food, fast service, and a cozy atmosphere. Will definitely be back!",
  },
  {
    author: "Jamie S.",
    starRating: 4,
    review: "Amazing flavors! Best meal I’ve had in a long time.",
  },
  {
    author: "Casey L. ",
    starRating: 1,
    review:
      "Disappointing experience. The food took too long, arrived cold, and lacked flavor. The service was inattentive, which made the whole meal underwhelming. Not planning to return.",
  },
];
