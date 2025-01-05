import { FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  return (
    <>
      <h3 className="text-bold text-3xl md:text-4xl text-center">
        Testimonial
      </h3>

      <div className=" flex flex-col lg:flex-row  justify-between gap-6 p-12">
        {/* item-1 */}
        <div className="flex flex-col text-center items-center gap-4 bg-white shadow-lg px-24 py-12">
          <p className="text-lime-300/80 ">
            <FaQuoteRight />
          </p>
          <h3 className="font-bold">
            Rahima Begum,
            <br />
            Volunteer
          </h3>
          <p className="text-left">
            Being part of this initiative has been a life-changing experience.
            Distributing warm clothes to families in need and seeing their
            smiles is a reward beyond words. This platform truly makes a
            difference in people's lives.
          </p>
        </div>
        {/* item-2 */}
        <div className="flex flex-col text-center items-center gap-4 bg-white shadow-lg px-24 py-12">
          <p className="text-lime-300/80 ">
            <FaQuoteRight />
          </p>
          <h3 className="font-bold">
            Tanvir Hasan,
            <br />
            Donor
          </h3>
          <p className="text-left">
            I wanted to give back but wasn’t sure how. This platform made it so
            easy to contribute and know my donations were reaching the right
            people. It feels amazing to know I’ve helped someone stay warm this
            winter
          </p>
        </div>
        {/* item-3 */}
        <div className="flex flex-col text-center items-center gap-4 bg-white shadow-lg px-24 py-12">
          <p className="text-lime-300/80 ">
            <FaQuoteRight />
          </p>
          <h3 className="font-bold">
            Donald Trump,
            <br />
            Beneficiary
          </h3>
          <p className="text-left">
            Last winter was especially hard for my family, but the warm clothes
            we received through this initiative brought us comfort and hope. I’m
            so grateful to everyone who made this possible.
          </p>
        </div>
        {/* item-3 ends */}
      </div>
    </>
  );
}

export default Testimonial;
