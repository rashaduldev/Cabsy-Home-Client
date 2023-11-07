import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";

const MySchedules = () => {
  const bookings = useLoaderData();
  const { user } = useContext(Authcontext);
  console.log(user.email);
  console.log(bookings);

  return (
    <div className="mx-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-my-schedule</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-5xl text-center my-10 font-bold">My Schedules</h2>
      <div>
        <div>
          <h3 className="text-4xl text-left font-bold my-8">My Bookings ({bookings.length})</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {bookings
            .filter((booking) => booking.serviceemail === user.email)
            .map((book) => (
              <div key={book._id}>
            <div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <img
                className="w-full h-60 rounded-t-xl"
                src={book.serviceimage}
                alt="Image Description"
              />
              <div className="p-4 md:p-5 flex flex-row justify-between items-center gap-2">
                <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {book.servicename}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                {book.specialInstructions}
                </p>
                <p>{book.serviceemail}</p>
                </div>
                <div>
                   <p>Booking Date: <br />{book.serviceDate}</p>
                   <p>Booking Prices: ${book.prices}</p>
                </div>
              </div>
            </div>
          </div>
                
               </div>
            ))}
         </div>
          
        </div>
        <div>
          <h3 className="text-4xl my-8 font-bold">My Pending works</h3>
          <div className="">
         {bookings
            .filter((booking) => booking.serviceemail!== user.email)
            .map((book) => (
              <div key={book._id}>
            <div>
            <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Images</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Age</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><img className="w-12 h-12 rounded-full" src={book.serviceimage} alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          </div>
                
               </div>
            ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
