import React from "react";
import "./topBar.scss";

const TopBar = () => {
  return (
    <>
      <div className="topBar">
        <div className="topBar__title-container">Insidee</div>
        <div className="topBar__container">
          <div className="topBar__container--location-button">
            <h1 className="amatic-sc-bold">APapa, Lagos</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M9.5 9.75C10.7426 9.75 11.75 8.74264 11.75 7.5C11.75 6.25736 10.7426 5.25 9.5 5.25C8.25736 5.25 7.25 6.25736 7.25 7.5C7.25 8.74264 8.25736 9.75 9.5 9.75Z"
                stroke="#333333"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 16.5C12.5 13.5 15.5 10.8137 15.5 7.5C15.5 4.18629 12.8137 1.5 9.5 1.5C6.18629 1.5 3.5 4.18629 3.5 7.5C3.5 10.8137 6.5 13.5 9.5 16.5Z"
                stroke="#333333"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default TopBar;
