import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";
import HomeBookRide from "../Components/homeBookRide";
import MainBuilding from "../Components/MainBuilding";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const homeLoader = useLoaderData();
  const initialDisplayCount = 4; // Change the initial display count to 4
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Slider />
      <div className="mx-10 space-y-10">
        <h2 className="text-6xl font-bold text-center">Popular Services</h2>
       <div className="grid grid-cols-1 lg:grid-cols-2">
       {homeLoader.slice(0, displayCount).map((service) => (
          <div key={service} className="mx-10 my-5">
            {/* Your card components... */}
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <img className="w-full p-3 h-80 rounded-t-xl" src={service.pictureURL} alt="Image Description" />
        <div className="p-4 md:p-5 lg:px-10 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="px-10">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {service.serviceName}
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              {service.description}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              Service Area: {service.serviceArea}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              Price: ${service.price}
            </p>
            <Link to={`/viewdetails/${service._id}`}>
              <button className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                View Details
              </button>
            </Link>
          </div>
          <div className="px-5 text-center">
            <h2 className='text-center font-bold'>Auth info</h2>
            <p>{service.userName}</p>
            {/* <p>img {userpictureURL}</p> */}
            <img className='h-16 w-16 rounded-full text-center my-3' src={service.userpictureURL} alt="" />
          </div>
        </div>
      </div>
           
          </div>
        ))}
       </div>
      </div>
      <div className="flex justify-center">
        {displayCount < homeLoader.length && (
          <button
            className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover-bg-blue-600 focus:outline-none"
          >
            <Link to={'/allservices'}>Show More</Link>
          </button>
        )}
      </div>
      <HomeBookRide />
      <MainBuilding />
    </div>
  );
};

export default Home;
