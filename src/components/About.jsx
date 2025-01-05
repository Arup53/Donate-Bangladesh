function About() {
  return (
    <>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-24">
        About Us
      </h3>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 ">
        <div className="flex flex-col justify-center items-center space-y-4">
          <figure>
            <img className="h-[80px]" src="/mission_1.png" alt="" />
          </figure>
          <p className="text-center">
            Our platform connects compassionate <br /> donors with local
            volunteers.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <figure>
            <img className="h-[80px]" src="/mission_2.webp" alt="" />
          </figure>
          <p className=" text-center">
            Deliver winter clothing <br />
            to the most affected areas
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <figure>
            <img className="h-[80px]" src="/mission_3.webp" alt="" />
          </figure>
          <p className="text-center">
            Through us, Everyone can <br />
            participate in making a difference
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center my-12 p-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
        <p>
          Welcome to our Winter Cloth Donation platform, an initiative dedicated
          to spreading warmth and kindness across Bangladesh. Each winter,
          countless individuals face harsh conditions without access to adequate
          clothing. Our mission is to bridge the gap between generous donors and
          communities in need, ensuring that warm clothing such as jackets,
          blankets, and sweaters reach those who need them most. Through our
          platform, we aim to create a transparent and impactful system where
          every contribution makes a difference. By collaborating with local
          organizations and volunteers, we strive to build a network of support
          that uplifts lives during the challenging winter months. Together, we
          can make this winter a little warmer for everyone.
        </p>
      </div>
    </>
  );
}

export default About;
