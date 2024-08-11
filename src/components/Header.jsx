import enc from "/enc.jpg"
import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";



export const Header = () =>
{
  return (
    //   <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    //   viewport={{ once: true }}
    // >
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
           
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Secure Your Data with Our
              <br className="hidden md:block" />
             
              <span className="inline-block text-deep-purple-accent-400">
               Encryption and Decryption Tool
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             Effortlessly encrypt and decrypt your sensitive data with our easy-to-use online tool.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
           
            <div className="inline-flex items-center justify-center w-full p-4 mb-3 font-medium
                tracking-wide text-white transition duration-200 rounded-lg md:w-auto
                 md:mr-4 md:mb-0 bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
              <Link to="/encryption"
                >
                
          <span className="">Get Started</span>
        </Link>

            </div>
           
          </div>
        </div>
        <div className="relative lg:w-1/2 w-full md:w-[90%]">
            <img className="object-cover w-full h-56 rounded-lg sm:h-[30rem]"
            src={enc}
            alt=""/>
        </div>
      </div>
    </div>
    </>
    // </motion.div>
  );
};