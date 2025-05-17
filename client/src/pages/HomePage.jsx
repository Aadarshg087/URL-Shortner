import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col body-bg text-body-text-color">
      <Header />
      <div className="flex-grow p-4 justify-center items-center border-2 text-center flex">
        <h1 className="font-bold text-5xl">Welcome to Utility</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
