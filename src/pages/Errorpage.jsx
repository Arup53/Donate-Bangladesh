import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center   ">
        <img src="https://i.ibb.co.com/mT9TX95/error.jpg" alt="" />
        <h3 className="text-center text-4xl ">You Have Typed Wrong URL</h3>
        <Link className="btn my-12 bg-orange-400 text-white" to={"/"}>
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Errorpage;
