import React from "react";
import "./DetailsModal.scss";
import { spot } from "../../constants/types";
import otherImage from "../../assets/images/otherImage.png";
import mainImage from "../../assets/images/mainImage.png";
import ReviewCard from "../cards/ReviewCard";
import { reviews } from "../../constants/data";
import PlaceDetailsCard from "../cards/PlaceDetailsCard";

const DetailsModal = ({
  type,
  onCloseModal,
}: {
  type: spot;
  onCloseModal: VoidFunction;
}) => {
  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>

        <div className="modal__content-container">
          <div className="modal__content-container--title-container">
            <div className="modal__content-container--title-container__title">
              <h1>{type.name}</h1>
              {type.icon && <img src={type.icon} alt="" className="" />}
            </div>

            <div
              className="modal__content-container--title-container__close-button"
              onClick={() => onCloseModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M15.5833 6.41663L6.41663 15.5833M6.41663 6.41663L15.5833 15.5833"
                  stroke="#525252"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="modal__content-container--details-container">
            <div className="modal__content-container--details-container__main-image-container">
              <div className="modal__content-container--details-container__main-image-container--shadow1"></div>
              <div className="modal__content-container--details-container__main-image-container--shadow2"></div>
              <div className="modal__content-container--details-container__main-image-container--image">
                <img src={mainImage} alt="" />
              </div>
              <PlaceDetailsCard />
            </div>

            <div className="modal__content-container--details-container__other-images-container">
              <img src={otherImage} alt="" />
              {/* <div>
                <div className="place-details-container__bottom-section--right-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M8.70001 9.59996L5.5 6.39996L8.70001 3.19995"
                      stroke="#525252"
                      stroke-width="1.28"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="place-details-container__bottom-section--right-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M5.29999 9.59996L8.5 6.39996L5.29999 3.19995"
                      stroke="#525252"
                      stroke-width="1.28"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div> */}
            </div>

            <div className="modal__content-container--details-container__reviews-container">
              {reviews?.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
