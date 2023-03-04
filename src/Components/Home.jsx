import React from "react";
import "./Home.css";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Experience from "./Experience/Experience";
import Brands from "./Brands/Brands";
import Stories from "./Stories/Stories";
import FirstFooter from "./FirstFooter/FirstFooter";
import SecondFooter from "./SecondFooter/SecondFooter";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Header />
        <Experience />
        <Brands />
        <Stories />
        <FirstFooter />
        <SecondFooter />
      </div>
    </>
  );
};

export default Home;
