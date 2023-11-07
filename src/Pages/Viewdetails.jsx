// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Viewdetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailsData = useLoaderData();
  console.log(detailsData);
  const { user} = useContext(Authcontext);
  const { id } = useParams();
  // const parsint=parseInt(id);
  const datas = detailsData.find((data) => data._id === id);
  console.log(datas);
  const {
    pictureURL,
    // serviceArea,
    serviceName,
    userName,
    useremail,
    description,
    price,
    userpictureURL
  } = datas;
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handlePurchase = (e) => {
    e.preventDefault();
    const form=e.target;
    const servicename=serviceName;
    const serviceimage=pictureURL;
    const serviceemail=useremail;
    const prices=price;
    const Useremail=user?.email;
    const serviceDate=form.serviceDate.value;
    const specialInstructions=form.specialInstructions.value;

    const bokking={
        servicename,
        serviceimage,
        serviceemail,
        Useremail,
        serviceDate,
        specialInstructions,
        prices
    }
    console.log('object',bokking)
    fetch('http://localhost:3000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bokking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Services added successfully');
        console.log(data);
        // resetForm();
      })
      .catch((error) => {
        toast.error('Error adding services');
        console.error(error);
      });

    toast.success('Purchased Confirmed');
    setTimeout(() => {
        
        window.location.reload();
      }, 1000);
  };

  return (
    <div className="my-5 mx-10">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-details-service</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={pictureURL}
          alt="Service Image"
          className="w-1/2 rounded-md h-64 object-cover"
        />
        
        <div className="flex justify-between lg:w-1/2 flex-col lg:flex-row gap-10 items-center">
            <div>
            <h2 className="text-2xl font-bold">Service Name:{serviceName}</h2>
        <p className="text-gray-600">Service Description:{description}</p>
      
        <p className="text-xl font-semibold">Service Price: ${price}</p>
        
            </div>
            <div className="">
            <div className="flex flex-col items-center space-y-2">
            <h2>Auth</h2>
          <img
            src={userpictureURL}
            alt="Service Provider"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700">
            {userName}
          </span>
        </div>
            </div>
            
        </div>
        <button
          onClick={openModal}
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          data-hs-overlay="#hs-basic-modal"
        >
          Book Now
        </button>

        {/* Modal for Booking */}
        {isModalOpen && (
          <>
            <div
              id="hs-basic-modal"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      Booking......
                    </h3>
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                      data-hs-overlay="#hs-basic-modal"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3.5 h-3.5"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-100 p-4">
                    <form onSubmit={handlePurchase} action="" className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                      <h1 className="text-2xl font-semibold text-center mb-6">
                        Please confirm Booking
                      </h1>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                         Service Name
                        </label>
                        <input
                          type="text"
                          id="servicename"
                          name="servicename"
                          
                          value={serviceName}
                          required
                          disabled
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                         Service Image
                        </label>
                        <div>
                            <img className="w-full" src={pictureURL} alt="" />
                        </div>
                        <input 
                        hidden
                          type="text"
                          id="servicename"
                          name="serviceimage"
                          
                          value={pictureURL}
                          required
                          disabled
                          className="w-full border border-gray-300 rounded p-2"
                        />
                       
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                         Service Provider email
                        </label>
                        <input
                          type="email"
                          id="serviceemail"
                          name="serviceemail"
                          value={useremail}
                          disabled
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                        User email
                        </label>
                        <input
                          type="email"
                          id="useremail"
                          name="useremail"
                          value={user?.email}
                          disabled
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                          Service Taking Date:
                        </label>
                        <input
                          type="date"
                          id="serviceDate"
                          name="serviceDate"
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="specialInstructions"
                        >
                          Special Instructions:
                        </label>
                        <textarea
                          id="specialInstructions"
                          name="specialInstructions"
                          placeholder="Special Instructions"
                          required
                          rows="4"
                          className="w-full border border-gray-300 rounded p-2"
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="serviceDate"
                        >
                          Prices
                        </label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          value={price}
                          disabled
                          required
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>
                      <div className="mt-6">

                        <button 
                         type="submit" 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                          Booking this Service
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Viewdetails;
