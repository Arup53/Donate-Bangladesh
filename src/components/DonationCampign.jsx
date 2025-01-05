import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

function DonationCampign() {
  const [campigns, setCampigns] = useState(null);
  const data = useLoaderData();

  useEffect(() => {
    setCampigns(data);
  }, [data]);

  return (
    <div className="bg-[url('')]">
      <section className="relative min-h-[400px] mb-12 p-6 space-y-6 bg-[url('/d-1.jpg')] bg-no-repeat bg-cover">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 text-center py-72 space-y-12">
          <h3 className="text-4xl font-bold text-white ">Campaign</h3>
        </div>
      </section>

      <div className="w-[90%] mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {campigns &&
          campigns?.map((campign) => (
            <Card key={campign.id} campign={campign} />
          ))}
      </div>
    </div>
  );
}

export default DonationCampign;
