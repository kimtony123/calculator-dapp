import React from "react";
import { Link } from "react-scroll";
import PublisherImage from "../../assets/publisher.webp";
import SubscriberImage from "../../assets/subscriber.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-cyan-400">
            AO Robotics: Calculator dApp.
          </h1>

          <p className="text-gray-300 text-lg mt-4">
            🚀 Explore the power of ao robotics to build advanced IOT and
            robotics applications on ao computer. Experience seamless message
            passing between aocomputer processes and nodes on ROS2.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              Learn More
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <button
              onClick={() => alert("Get Started! 🚀")}
              className="text-white px-6 py-3 rounded-md border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={PublisherImage}
              alt="Publisher Node"
              className="w-3/4 md:w-full rounded-lg hover:scale-105 transform transition duration-300 shadow-lg shadow-cyan-500/50"
            />
            <img
              src={SubscriberImage}
              alt="Subscriber Node"
              className="absolute top-12 right-12 w-1/3 rounded-full hover:scale-105 transform transition duration-300 shadow-lg shadow-blue-500/50"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gray-800 py-12">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-cyan-400">
          Key Features
        </h2>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition duration-300">
            <h3 className="text-2xl font-semibold text-white">
              Ao-computer Calculator dApp.
            </h3>
            <p className="text-gray-400 mt-4">
              allows you to add two intergers on ROS2 nodes.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-300">
            <h3 className="text-2xl font-semibold text-white">Ros2 Node</h3>
            <p className="text-gray-400 mt-4">
              Computes the sum of two intergers and sends it back to your ao
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
