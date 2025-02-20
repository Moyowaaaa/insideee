import React from "react";
import "./home.scss";
import CardGallery from "../cards/CardGallery";

const Home = () => {
  return (
    <>
      <div className="home">
        <CardGallery />
      </div>
    </>
  );
};

export default Home;
