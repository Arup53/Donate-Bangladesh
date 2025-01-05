function BannerCard({ data }) {
  const { title, image, division } = data;
  return (
    <div
      className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex flex-col justify-center ">
        <p className="md:self-end relative z-10 md:px-14  text-3xl md:text-5xl text-white text-center md:text-left font-bold tracking-wider leading-normal   ">
          {title} <br /> Campaign Running in <br />
          {division}
        </p>
      </div>
    </div>
  );
}

export default BannerCard;
