import React from "react";
import "./skeletons.scss";

const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="empty-state">
      <h1>{message}</h1>
    </div>
  );
};

export default EmptyState;
