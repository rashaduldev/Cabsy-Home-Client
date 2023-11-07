import { useTypewriter } from "react-simple-typewriter";

const MainBuilding = () => {
    const [text] = useTypewriter({
        words: [' & Hours'],
        loop: 0
      })

  return (
    <div className="mx-10 my-10 mt-24">
      <h2 className="text-5xl text-center font-bold">Our Main Building</h2>
      <div className="flex flex-col lg:flex-row my-8 lg:mt-20">
        <div className="lg:flex-1 lg:w-1/2 space-y-5">
          <h2 className="text-4xl">Locations {text}</h2>
          <p className="text-lg">
            For over 30 years, we have been providing comprehensive orthopedic
            services to patients of all ages across central Indiana.
          </p>
          <p className="text-lg">
            Whatever your need, our team of sports medicine doctors, surgeons,
            orthopedists, physical therapists, and other specialists will help
            you get back to doing what you love-quicker and with less pain.
          </p>
          <div className="text-lg space-y-2 py-5">
            <h3 className="font-bold">See an other Services</h3>
            <p>Request an appointment to see a doctor at one of our convenient locations.</p>
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Request Your Feedback
            </button>
          </div>
        </div>
        <div className="flex-1" style={{ height: "400px", width: "100%" }}>
         <img className="rounded" src="https://i.ibb.co/yggdJ2k/location.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainBuilding;
