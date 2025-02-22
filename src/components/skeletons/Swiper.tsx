import React, { SetStateAction } from "react";
import "./swiper.scss";

interface swiperProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<SetStateAction<number>>;
  itemCount: number;
}

const Swiper = ({ currentIndex, setCurrentIndex, itemCount }: swiperProps) => {
  const onPreviousClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onNextClick = () => {
    if (currentIndex !== itemCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="item-swiper">
        <button
          className="item-swiper__left-arrow"
          onClick={() => onPreviousClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M8.70001 9.59996L5.5 6.39996L8.70001 3.19995"
              stroke="#525252"
              strokeWidth="1.28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="item-swiper__right-arrow"
          onClick={() => onNextClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M5.29999 9.59996L8.5 6.39996L5.29999 3.19995"
              stroke="#525252"
              strokeWidth="1.28"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Swiper;
