import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";

const URLShortner = () => {
  const { register, handleSubmit } = useForm();
  const [shortlink, setShortlink] = useState();
  const onSubmission = async (data) => {
    console.log(data);
    const shortLink = await axios.post(
      "http://localhost:8000/url/v1/shorten",
      data,
      {
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(shortLink);
    setShortlink(`http://localhost:8000/url/v1/${shortLink.data.ShortURL}`);
  };
  return (
    <div className="min-h-screen flex flex-col body-bg text-body-text-color">
      <Header />
      <div className="flex-grow p-4 justify-center items-center border-2 flex flex-col text-center">
        <form onSubmit={handleSubmit(onSubmission)} className="">
          <label className="font-bold text-3xl block body-text-color">
            Enter the link here:
          </label>
          <input
            className="block border-1 w-[500px] pl-4 p-2 m-2 rounded-xl outline-none "
            {...register("redirectURL", { required: true })}
          />
          <button
            type="submit"
            className="font-mono rounded-xl p-2 px-8 bg-header-blue header-tcolor hover:bg-blue-900 duration-150"
          >
            Submit
          </button>
          {shortlink ? (
            <h1 className="mt-10 font-medium text-2xl">{shortlink}</h1>
          ) : (
            <p className="hidden">dsfdsf</p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default URLShortner;
