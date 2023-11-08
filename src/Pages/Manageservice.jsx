import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import {  useLoaderData } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";
import Manageserve from "./Manageserve";


const Myservices = () => {
  const loadedmyServices = useLoaderData();
  const [delServices,setDelservices]=useState(loadedmyServices);
  const { user } = useContext(Authcontext);
  console.log(user.email);
 


  return (
    <div className="mx-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-manage-services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-5xl text-center font-bold my-10">
        Manage Services (All Services)
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {delServices
        // .filter(se=>se.email === user.email)
        .map((service) => (
       <Manageserve
       key={service._id}
        service={service}
        delServices={delServices}
        setDelservices={setDelservices}
         ></Manageserve>
        ))}
      </div>
    </div>
  );
};

export default Myservices;
