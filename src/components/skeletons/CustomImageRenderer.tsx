import React, { useState } from "react";
import "./customImageViewer.scss";

const CustomImageRenderer = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <div className="custom-image-renderer">
      {isLoading && !hasError && (
        <div className="custom-image-renderer__skeleton-loader">
          <div className="loading-strip"></div>
          <div className="loading-strip"></div>
        </div>
      )}

      <img
        src={image}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        style={{ display: isLoading ? "none" : "block" }} // Hide until loaded
      />
    </div>
  );
};

export default CustomImageRenderer;
