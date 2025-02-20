import React, { useState } from "react";
import "./cardGallery.scss";
import TypeCard from "./TypeCard";
import { spotTypes } from "../../constants/data";
import bus from "../../assets/images/bus.png";
import DetailsModal from "../modals/DetailsModal";
import { spot } from "../../constants/types";

type modalProps = {
  open: boolean;
  type: spot | null;
};

const CardGallery = () => {
  const [openModal, setOpenModal] = useState<modalProps>({
    open: false,
    type: null,
  });
  const onOpenModal = (type: spot) => {
    setOpenModal({
      open: true,
      type: type,
    });
  };

  const onCloseModal = () => {
    setOpenModal({
      open: false,
      type: null,
    });
  };

  return (
    <>
      {openModal.type && (
        <DetailsModal type={openModal.type} onCloseModal={onCloseModal} />
      )}
      <div className="card-section">
        <div className="card-section__container">
          {spotTypes?.map((spot, index) => (
            <TypeCard
              key={index}
              spot={spot}
              onOpenModal={(spot: spot) => onOpenModal(spot)}
            />
          ))}
        </div>

        <div className="card-section__first-dash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324 24"
            fill="none"
          >
            <path
              d="M1 6.5L27.0548 1.91628C45.0695 -1.25296 63.6221 2.22755 79.2631 11.7107L80.1172 12.2285C103.698 26.5255 133.281 26.4899 156.827 12.1364V12.1364C178.417 -1.02492 205.241 -2.22224 227.918 8.96313L233.126 11.5317C253.803 21.7303 277.752 23.0255 299.408 15.1164L323 6.5"
              stroke="#7A7A7A"
              stroke-dasharray="9 9"
            />
          </svg>

          <img src={bus} alt="" />
        </div>

        <div className="card-section__second-dash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="324"
            height="24"
            viewBox="0 0 324 24"
            fill="none"
          >
            <path
              d="M1 6.5L27.0548 1.91628C45.0695 -1.25296 63.6221 2.22755 79.2631 11.7107L80.1172 12.2285C103.698 26.5255 133.281 26.4899 156.827 12.1364V12.1364C178.417 -1.02492 205.241 -2.22224 227.918 8.96313L233.126 11.5317C253.803 21.7303 277.752 23.0255 299.408 15.1164L323 6.5"
              stroke="#7A7A7A"
              stroke-dasharray="9 9"
            />
          </svg>

          <img src={bus} alt="" />
        </div>
      </div>
    </>
  );
};

export default CardGallery;
