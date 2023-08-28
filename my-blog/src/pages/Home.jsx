import React from "react";
import BlogsContainer from "../components/home/BlogsContainer";
import HomeHeader from "../components/home/HomeHeader";
import Navbar from "../components/home/Navbar";
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
