import React from "react";
import "./scss/homeheader.css";
const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="container">
        <h1>Youth Coderz</h1>
        <span>welcome to our blog</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea
          excepturi perspiciatis veniam quas itaque dignissimos nesciunt, sequi
          maiores facere soluta ducimus in, temporibus corrupti inventore
          quibusdam eveniet? Magnam, a!
        </p>
        <input type="search" name="main-searchbar" id="Main-search" />
      </div>
    </div>
  );
};

export default HomeHeader;
