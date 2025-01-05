function Footer() {
  return (
    <div className=" mt-auto py-12 flex flex-col justify-center items-center  gap-6 text-center  bg-gray-200/40">
      <h3 className="text-xl font-bold my-2">Donate Bangladesh</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base font-bold mb-6">Contact Information</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-left  text-gray-500 ">
              Email: donatbangladesh123@example.com
            </p>
            <p className="text-sm text-left  text-gray-500 ">
              Address: Gulshan, Dhaka
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold mb-6">Social Links</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <p className="text-sm text-center text-gray-500 ">
              <img className="h-[30px]" src="/s1.png" alt="" />
            </p>
            <p className="text-sm text-center text-gray-500 ">
              <img className="h-[30px]" src="/s2.png" alt="" />
            </p>
            <p className="text-sm text-center text-gray-500 ">
              <img className="h-[30px]" src="/s3.png" alt="" />
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-6 w-[300px] border-1 border-black" />
      <p className="mt-6 text-center">
        All Rights Received Donate Bangladesh@2024
      </p>
    </div>
  );
}

export default Footer;
