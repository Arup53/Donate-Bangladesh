import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import { useEffect } from "react";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Volunteer from "../components/Volunteer";

function Home() {
  const { user } = useAuthContext();
  const data = useLoaderData();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [user]);

  return (
    <div>
      <Banner />

      {/* about section */}
      <section
        data-aos="fade-down"
        className="min-h-[400px] bg-[#f6f5f2] my-12 p-6 space-y-6  gap-6 "
      >
        <About />
      </section>
      {/* about section ends */}

      {/* how it work section */}

      <section
        data-aos="fade-up-right"
        className="relative min-h-[600px] my-12 p-6 space-y-6 bg-[url('/background-1.jpg')] bg-no-repeat bg-cover"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <HowItWorks />
      </section>

      {/* how it work section ends*/}

      {/* voulnteer section */}
      <div data-aos="fade-up">
        <Volunteer />
      </div>

      {/* testimonial start */}
      <div
        data-aos="fade-down"
        className="bg-[#f6f5f2] min-h-[400px] mt-12 py-6 "
      >
        <Testimonial />
      </div>

      {/* testimonial ends */}
    </div>
  );
}

export default Home;
