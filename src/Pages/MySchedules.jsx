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
          <h3 className="text-4xl text-left font-bold my-8">
            My Bookings
            {/* My Bookings ({bookings.length}) */}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {bookings
              .filter((booking) => booking.Useremail === user.email)
              .map((book) => (
                <div key={book._id}>
                  <div>
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] lg:h-96">
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
                          <p>
                            Booking Date: <br />
                            {book.serviceDate}
                          </p>
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
            <div>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Images
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Service name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                            >
                              Special Instructions
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                            >
                              Process
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {bookings
                            .filter(
                              (booking) => booking.serviceemail === user.email
                            )
                            .map((book) => (
                              <tr key={book._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                  <img
                                    className="w-12 h-12 rounded-full"
                                    src={book.serviceimage}
                                    alt=""
                                  />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                  {book.servicename}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                  {book.serviceemail}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                  {book.specialInstructions}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                  <div
                                    className="hs-dropdown relative inline-flex"
                                    data-hs-dropdown-auto-close="inside"
                                  >
                                    <button
                                      id="hs-dropdown-item-checkbox"
                                      type="button"
                                      className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                      Pending
                                      <svg
                                        className="hs-dropdown-open:rotate-180 w-4 h-4"
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
                                        <path d="m6 9 6 6 6-6" />
                                      </svg>
                                    </button>

                                    <div
                                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                                      aria-labelledby="hs-dropdown-item-checkbox"
                                    >
                                      <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex items-center h-5 mt-1">
                                          <input
                                            id="hs-dropdown-item-radio-delete"
                                            name="hs-dropdown-item-radio"
                                            type="radio"
                                            className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            aria-describedby="hs-dropdown-item-radio-delete-description"
                                            checked
                                          />
                                        </div>
                                        <label
                                          htmlFor="hs-dropdown-item-radio-delete"
                                          className="ms-3.5"
                                        >
                                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                                            In Progress
                                          </span>
                                        </label>
                                      </div>
                                      <div className="relative flex items-start py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex items-center h-5 mt-1">
                                          <input
                                            id="hs-dropdown-item-radio-archive"
                                            name="hs-dropdown-item-radio"
                                            type="radio"
                                            className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            aria-describedby="hs-dropdown-item-radio-archive-description"
                                          />
                                        </div>
                                        <label
                                          htmlFor="hs-dropdown-item-radio-archive"
                                          className="ms-3.5"
                                        >
                                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                                            Completed
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
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

export default MySchedules;
