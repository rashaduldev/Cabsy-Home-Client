import bgimg from '../assets/bgimg.jpg';
// import hero from '../assets/hero-app-mockup-silver.png';

const Slider = () => {
  const sliderContainerStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    color: 'white',
    position: 'relative', // Add this to bring the text to the front
    zIndex: 1, // Add this to make the text appear above the overlay
  };

  return (
    <div className="relative mx-10 rounded-xl my-5" style={sliderContainerStyle}>
      <div className='rounded-xl' style={overlayStyle}></div>
      <div className="flex flex-auto justify-center items-center p-4 md:p-5 h-full" style={textStyle}>
        <div className="text-center">
          <h3 className="text-5xl font-bold text-white">
          Get Where You Need to Go, <br /> Safely and Affordably
          </h3>
          <p className="mt-8 text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inventore
          </p>
         <div className='flex gap-5 justify-center mt-10'>
         <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
         Book Our Ride
            </button>
            {/* <button className='btn'>Book Our Ride </button> */}
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all text-sm  dark:hover:bg-gray-600 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800">
            Learn More
            </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
