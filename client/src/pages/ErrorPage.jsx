import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col body-bg text-body-text-color">
      <Header />
      <div className="flex-grow p-4 justify-center items-center border-2 text-center flex">
        <h1 className="font-sans text-2xl">
          This service is not available right now!
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
