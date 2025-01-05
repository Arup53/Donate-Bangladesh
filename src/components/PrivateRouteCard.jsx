import { useState } from "react";
import toast from "react-hot-toast";

function PrivateRouteCard({ data }) {
  const { image, title, description, status, contactInfo, division } = data;
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState("optionBlank");

  function handleSubmit(e) {
    e.preventDefault();
    setSelected("optionBlank");
    e.target.location.value = "";
    setValue(1);
    toast.success("Donated Successfully");
  }

  function handleIsNegative(e) {
    if (e.target.value < 1) {
      setValue(1);
      alert("You have to Input positive number");
      return;
    }
    setValue(e.target.value);
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 rounded-2xl shadow-2xl p-4">
        <figure>
          <img
            className="w-full h-[400px] object-contain"
            src={`${image}`}
            alt=""
          />
        </figure>
        <div className="basis-3/4 flex flex-col gap-4 justify-center ">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm ">Info: {description}</p>
          <p className="text-sm">Status: {status}</p>
          <p className="text-sm">Contact: {contactInfo}</p>
          <p className="text-sm">Divison: {division}</p>
        </div>
      </div>

      {/* Input field */}
      <div className="my-24 flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className="text-2xl font-bold text-black text-center py-6 ">
            Make a Donation
          </h3>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={value}
                onChange={handleIsNegative}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item</span>
              </label>
              <select
                value={selected}
                onChange={handleChange}
                name="item"
                id="item"
              >
                <option
                  name="default"
                  value="optionBlank"
                  selected
                  disabled
                  hidden
                >
                  Choose here
                </option>
                <option value={"option1"}>Blanket</option>
                <option value={"option2"}>Jacket</option>
                <option value={"option3"}>Sweater</option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-orange-400 text-white border-none">
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PrivateRouteCard;
