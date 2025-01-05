import CountUp from "react-countup";
import { PiCityDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="relative z-10 text-center space-y-12">
      <h3 className="text-3xl md:text-4xl font-bold text-white ">
        How it Works
      </h3>
      <div className="w-[80%] mx-auto flex flex-col  gap-2 text-white">
        {/* item-1 */}
        <div className="self-end flex flex-col justify-center items-center space-y-6 mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-left">
            How to Donate
          </h3>
          <p className="text-left">
            You can donate jacket,blanket and sweaters. <br />
            First, you have to login to donate.
          </p>
          <Link
            to={"/auth/login"}
            className="btn w-full bg-lime-300/80 text-white font-bold px-12 "
          >
            Login
          </Link>
        </div>

        {/* item-2 */}
        <div className="self-start flex flex-col justify-center items-center space-y-6 mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-left">
            Donations Collected Till Now
          </h3>
          <p className="text-lime-300/80 text-4xl font-bold">
            <CountUp end={5000} start={0} />
          </p>
        </div>

        {/*item-3  */}
        <div className="self-end flex flex-col justify-center items-center space-y-6 mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-left my-4">
            List of Supported Division
          </h3>
          <ul className=" grid grid-cols-3 gap-6 ">
            <li className="flex flex-col justify-center items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Barishal
            </li>
            <li className="flex flex-col items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Chattogram
            </li>
            <li className="flex flex-col items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Rangpur
            </li>
            <li className="flex flex-col items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Khulna
            </li>
            <li className="flex flex-col items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Sylhet
            </li>
            <li className="flex flex-col items-center bg-lime-300/80 px-4 py-2 rounded-lg">
              <PiCityDuotone />
              Dinajpur
            </li>
          </ul>
        </div>
        {/* item-3 ends */}
      </div>
    </div>
  );
}

export default HowItWorks;
