import React from "react";
import BlogsContainer from "../components/BlogsContainer";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";
import "./scss/homepage.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <BlogsContainer />
    </div>
  );
};

export default Home;
