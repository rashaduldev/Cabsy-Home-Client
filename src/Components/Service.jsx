/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, pictureURL, serviceName, description, serviceArea, price } = service;

  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <img className="w-full lg:px-28 lg:py-5 h-80 rounded-t-xl" src={pictureURL} alt="Image Description" />
        <div className="p-4 md:p-5 lg:px-10 flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="px-10">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {serviceName}
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              {description}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              Service Area: {serviceArea}
            </p>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              Price: ${price}
            </p>
            <Link to={`/viewdetails/${_id}`}>
              <button className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                View Details
              </button>
            </Link>
          </div>
          <div className="px-5">
            <p>Auth Name:</p>
            <p>img</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
