import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./skeletons.scss";

const Spinner = () => {
  return (
    <>
      <div className="loader-spinner">
        <TailSpin color="#344054" />
      </div>
    </>
  );
};

export default Spinner;
