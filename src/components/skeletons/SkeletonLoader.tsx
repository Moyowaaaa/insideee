import React from "react";
import "./skeletons.scss";
const SkeletonLoader = ({
  height,
  width,
}: {
  height?: string | number;
  width?: string | number;
}) => {
  return (
    <>
      <div className="skeleton-loader" style={{ height: height, width }}>
        <div className="loading-strip"></div>
        <div className="loading-strip"></div>
      </div>
    </>
  );
};

export default SkeletonLoader;
