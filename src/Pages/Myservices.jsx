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
        <title>Cabsy-my-service</title>
        <Link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-5xl text-center font-bold my-10">
        My services <small className="text-2xl">(ONLY MY SERVICE)</small>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {myServices
          .filter((services) => services.useremail === user.email)
          .map((service) => (
            <div className="" key={service.id}>
              <div  className="">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] lg:h-[380px]">
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
             
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Myservices;
