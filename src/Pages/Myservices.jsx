import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";

const Myservices = () => {
  const myServices = useLoaderData();
  console.log(myServices);
  const { user } = useContext(Authcontext);
  console.log(user);

  return (
    <div className="mx-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-my-service ||Manage-services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-5xl text-center font-bold my-10">
        My services || Manage Services
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {myServices
          .filter((services) => services.useremail === user.email)
          .map((service) => (
            <div className="" key={service.id}>
              <div  className="">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] lg:h-[420px]">
                  <img
                    className="w-full h-60 rounded-t-xl"
                    src={service.pictureURL}
                    alt="Image Description"
                  />
                  <div className="p-4 md:p-5 flex flex-row justify-between items-center gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {service.serviceName}
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        {service.description}
                      </p>
                      <p>Prices: ${service.price} bdt</p>
                    </div>
                    <div>
                      <p className="font-bold">
                        User Info: <br />
                        {service.userName}
                      </p>
                      <p>User email:{service.useremail}</p>
                    </div>
                  </div>
                  <div className="text-center flex justify-evenly mx-10">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <Link to={`/update/${service._id}`}>Update</Link>
                    </button>
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Myservices;
