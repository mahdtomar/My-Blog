import React from "react";
import "./scss/homeheader.css";
const HomeHeader = () => {
  return (
    <div className="home-header">
      <div className="container">
        <span>welcome to our blog</span>
        <h1>Youth Coderz</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea
          excepturi perspiciatis veniam quas itaque dignissimos nesciunt, sequi
          maiores facere soluta ducimus in, temporibus corrupti inventore
          quibusdam eveniet? Magnam, a!
        </p>
        <label htmlFor="main-searchbar" className="main-search-label flex-2">
          <input type="text" name="main-searchbar" id="Main-search" />
          <button>search</button>
        </label>
      </div>
    </div>
  );
};

export default HomeHeader;
