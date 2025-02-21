import React from "react";
import "./skeletons.scss";
const SkeletonLoader = () => {
  return (
    <>
      <div className="skeleton-loader">
        <div className="loading-strip"></div>
        <div className="loading-strip"></div>
      </div>
    </>
  );
};

export default SkeletonLoader;
