import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import BannerCard from "./BannerCard";

function Banner() {
  const [winterImg, setWinterImg] = useState(null);

  useEffect(() => {
    async function loader() {
      const res = await fetch("/winterImage.json");
      const data = await res.json();
      setWinterImg(data);
    }
    loader();
  }, []);

  return (
    <div className="w-full">
      {winterImg && (
        <div className="w-full   ">
          <div className=" h-[100vh] ">
            <Carousel
              theme={{
                control: {
                  base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 group-hover:bg-yellow-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white hover:scale-105 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden md:flex ",
                  icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
                },

                indicators: {
                  active: {
                    off: "bg-black/30  hover:bg-yellow-300",
                    on: "bg-blue-500 hover:scale-125 hover:bg-yellow-300 ",
                  },
                  base: "h-3 w-3 rounded-full",
                  wrapper:
                    "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
                },
                scrollContainer: {
                  base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
                  snap: "snap-x",
                },
              }}
            >
              {winterImg &&
                winterImg?.map((data) => (
                  <BannerCard key={data.id} data={data} />
                ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
