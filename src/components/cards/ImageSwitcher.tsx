import React from "react";
import "./imageSwtcher.scss";

const ImageSwitcher = () => {
  return (
    <>
      <div className="place-details-container__bottom-section">
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
      </div>
    </>
  );
};

export default ImageSwitcher;
