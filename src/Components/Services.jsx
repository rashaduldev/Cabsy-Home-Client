

const Services = () => {
    return (
        <div className="mx-10 my-5">
            <h1 className="text-center text-5xl font-bold my-5">Popular Services</h1>
            <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img className="w-full h-auto rounded-t-xl" src="../docs/assets/img/500x300/img1.jpg" alt="Image Description"/>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      Card title
    </h3>
    <p className="mt-1 text-gray-800 dark:text-gray-400">
      Some quick example text to build on the card title and make up the bulk of the card is content.
    </p>
    <a className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
      Go somewhere
    </a>
  </div>
            </div>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img className="w-full h-auto rounded-t-xl" src="../docs/assets/img/500x300/img1.jpg" alt="Image Description"/>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      Card title
    </h3>
    <p className="mt-1 text-gray-800 dark:text-gray-400">
      Some quick example text to build on the card title and make up the bulk of the card is content.
    </p>
    <a className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
      Go somewhere
    </a>
  </div>
            </div>
            </div>
        </div>
    );
};

export default Services;