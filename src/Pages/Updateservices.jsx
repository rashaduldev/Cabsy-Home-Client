import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

const Updateservices = () => {
  const updateloader = useLoaderData();
  console.log(updateloader);
  const {
    _id,
    pictureURL,
    serviceName,
    description,
    serviceArea,
    price,
    userName,
    useremail,
  } = updateloader;
  const { user } = useContext(Authcontext);
  console.log(user);

  const [serviceData, setServiceData] = useState({
    pictureURL: "",
    userpictureURL: user?.photoURL,
    serviceName: "",
    userName: user?.displayName,
    userEmail: user?.email,
    price: "",
    serviceArea: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleUpdateServices = (event) => {
    event.preventDefault();

    const form = event.target;
    const pictureURL = form.pictureURL.value;
    const serviceName = form.serviceName.value;
    const userpictureURL = user?.photoURL;
    const userName = form.userName.value;
    const useremail = form.useremail.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;

    const updateService = {
      pictureURL,
      serviceName,
      userName,
      useremail,
      price,
      serviceArea,
      description,
      userpictureURL,
    };
    console.log(updateService);

    fetch(`http://localhost:3000/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Services Updated successfully");
        console.log(data);
        // resetForm();
      })
      .catch((error) => {
        toast.error("Error adding services");
        console.error(error);
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-update-service ||Manage-services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <form
          onSubmit={handleUpdateServices}
          className="max-w-full bg-white border border-gray-200 rounded-[36px] p-10 my-5"
        >
          <h2 className="font-bold text-center text-4xl mb-10">
            Update Service
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="mb-4">
              <label className="block text-gray-700">
                Picture URL of the Service
              </label>
              <input
                type="text"
                name="pictureURL"
                defaultValue={pictureURL}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Service Name</label>
              <input
                type="text"
                name="serviceName"
                defaultValue={serviceName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your name</label>
              <input
                type="text"
                name="userName"
                defaultValue={userName}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your email</label>
              <input
                type="email"
                name="useremail"
                defaultValue={useremail}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Service Area</label>
              <input
                type="text"
                name="serviceArea"
                defaultValue={serviceArea}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                //   onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover-bg-blue-600 w-full"
          >
            Update Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateservices;
