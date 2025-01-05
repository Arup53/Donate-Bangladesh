import { Link } from "react-router-dom";

function Card({ campign }) {
  const { id, image, title, division } = campign;
  return (
    <div>
      <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
        <figure>
          <img
            className="w-full h-[300px] object-cover rounded-2xl  "
            src={`${image}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body px-4 lg:px-0 ">
          <h2 className="card-title">{title}</h2>
          <p>Donation Campign in {division}</p>
          <div className="card-actions flex-none">
            <Link
              to={`/details/${id}`}
              className="btn  w-full btn-primary bg-orange-400 text-white border-none "
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
