import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const HomeBookRide = () => {
    return (
        <div className="mx-10 my-10">
            <motion.div
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false,amount:0.7 }}

            className="my-14 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mt-10">Simple Steps to Book Your Ride</h2>
            <p className="text-lg mt-6">Neque porro quisquam est qui dolorem ipsum adipisci velit, <br /> sed quia non numquam eius modi tempora incidunt ut labore et</p>
          <div className="lg:mx-40 mt-5">  <hr /></div>
            </motion.div>
          <div  className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <motion.div
           variants={fadeIn("up",0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once:false,amount:0.7 }}
          
          className="space-y-10 lg:w-1/2">
            <div>
                <h2 className="text-2xl text-green-400 font-bold">1. Type Your Destination</h2>
                <p className="text-lg my-3"> When you request an Uber, we aim to bring you a smooth and seamless experience, from the minute you request a ride until you arrive at your destination. </p>
            </div>
            <div>
                <h2 className="text-2xl text-green-400 font-bold">2. Confirm Pick-up Location</h2>
                <p className="text-lg my-3">In order to optimize efficiency and reduce the time it takes for you to get picked up even more, partner-driver are now able to receive new requests as they complete their current trip.</p>
            </div>
            <div>
                <h2 className="text-2xl text-green-400 font-bold">3. Choose Payment Method</h2>
                <p className="text-lg my-3"> Add a payment method by selecting the cash option, scanning a card, manually entering card info, or adding your payTM wallet.</p>
            </div>
            <div>
                <h2 className="text-2xl text-green-400 font-bold">4. Driver On The Way To Pick-up</h2>
                <p className="text-lg my-3"> This entirely depends on the reason for refusing the pickup. Were you throwing up on the sidewalk when the driver showed up</p>
            </div>
            </motion.div>
            <motion.div 
             variants={fadeIn("right",0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once:false,amount:0.7 }}
            
            className="">
                <img className="w-2/4 mx-auto" src="https://i.ibb.co/vkHmk3B/Step-1.png" alt="" />
            </motion.div>
          </div>
        </div>
    );
};

export default HomeBookRide;