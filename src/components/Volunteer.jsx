function Volunteer() {
  return (
    <div className="w-[60%] mx-auto min-h-[500px] flex flex-col lg:flex-row justify-center  border-2 rounded-lg ">
      <figure>
        <img className="h-full rounded-l-lg" src="/volunteer.jpg" alt="" />
      </figure>
      <div className="basis-3/4 flex flex-col p-4 space-y-4">
        <h3 className="text-3xl font-bold">Join Us</h3>
        <p>
          Join us in making a difference this winter by spreading warmth to
          those in need across Bangladesh. Your generosity can provide essential
          clothing and comfort to vulnerable communities facing the cold.
          Together, we can turn compassion into action and bring hope to
          countless lives. Be a part of this mission—because every act of
          kindness counts.
        </p>
      </div>
    </div>
  );
}

export default Volunteer;
