import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-indigo-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-sans font-extrabold tracking-widest text-9xl text-gray-100">
          CREATORVERSE
        </h1>
        <div className="mt-16 flex flex-row items-center gap-16">
          <Link to="/" className="p-8 bg-white text-3xl text-indigo-900 font-bold rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-gray-200 hover:outline hover:outline-offset-1 hover:outline-1 shadow-md">View All Creators</Link>
          <Link to="/addCreator" className="p-8 bg-white text-3xl text-indigo-900 font-bold rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-gray-200 hover:outline hover:outline-offset-1 hover:outline-1 shadow-md">Add New Creator</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
