/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Manageserve = ({service}) => {
    console.log(service);
    const {_id,pictureURL,serviceName,description,price,userName,useremail}=service;

    const handleDelete=(_id)=>{
        console.log('delete' ,_id);
        fetch(`http://localhost:3000/services/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json)
        .then(data=>{
            console.log(data);
            toast.success('Delete Successful');
            if (data.deletedCount>0) {
                toast.success('Delete Successful');
            }
        })
      }
    return (
        <div>
               <div className="" key={_id}>
            <div className="">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] lg:h-[420px]">
                <img
                  className="w-full h-60 rounded-t-xl"
                  src={pictureURL}
                  alt="Image Description"
                />
                <div className="p-4 md:p-5 flex flex-row justify-between items-center gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {serviceName}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {description}
                    </p>
                    <p>Prices: ${price} bdt</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      User Info: <br />
                      {userName}
                    </p>
                    <p>User email:{useremail}</p>
                  </div>
                </div>
                <div className="text-center flex justify-evenly mx-10">
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <Link to={`/update/${_id}`}>Update</Link>
                  </button>
                 <div>
                 <div className="text-center">
                    <button
                  
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-overlay="#hs-sign-out-alert"
                    >
                     Delete
                    </button>
                  </div>
                  <div
                    id="hs-sign-out-alert"
                    className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
                  >
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                      <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                        <div className="absolute top-2 end-2">
                          <button
                            type="button"
                            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-overlay="#hs-sign-out-alert"
                          >
                            <span className="sr-only">Close</span>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>

                        <div className="p-4 sm:p-10 text-center overflow-y-auto">
                          {/* <!-- Icon --> */}
                          <span className="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
                            <svg
                              className="flex-shrink-0 w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                          </span>
                          {/* <!-- End Icon --> */}

                          <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                            Delete Warning
                          </h3>
                          <p className="text-gray-500">
                            Are you sure you would like to <br /> Delete of your services?
                          </p>

                          <div className="mt-6 flex justify-center gap-x-4">
                            <a
                              onClick={()=>handleDelete(_id)}
                              className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              data-hs-overlay="#hs-sign-out-alert"
                            >
                                
                              Yes ,Of Cource!
                            </a>
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              data-hs-overlay="#hs-sign-out-alert"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Manageserve;