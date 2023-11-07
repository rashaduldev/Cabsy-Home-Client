import { useLoaderData } from "react-router-dom";
import Service from "../Components/Service";
import { useState } from "react";

const Allservices = () => {
  const services = useLoaderData();
  // console.log(services)
  const initialDisplayCount = 6;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(services);

  const handleShowAll = () => {
    setDisplayCount(services.length);
  };

  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
    setDisplayCount(initialDisplayCount);
  };

  const notFoundMessage = filteredServices.length === 0 && searchQuery !== "" && (
    <p className="text-red-500 text-center text-2xl my-5">No data found for any Service name
    <br />
    Please Search Again
    </p>
   
  );

  return (
    <div>
      {/* <h1>All Services ({services.length})</h1> */}
      <div className="flex justify-center mt-4 mb-5 relative">
        <input
          type="text"
          placeholder="Search services"
          className="px-4 w-1/2 py-2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
        type="button"
        onClick={handleSearch}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Search
        </button>
      </div>

      {notFoundMessage}

      <div className="mx-10 space-y-10">
        {filteredServices.slice(0, displayCount).map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>

      <div className="flex justify-center">
        {displayCount < filteredServices.length && (
          <button
            onClick={handleShowAll}
            className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover-bg-blue-600 focus:outline-none"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Allservices;
