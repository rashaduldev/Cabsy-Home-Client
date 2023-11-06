import { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Helmet } from "react-helmet";


const Addservices = () => {
  const { user } = useContext(Authcontext);

  const [serviceData, setServiceData] = useState({
    pictureURL: '',
    serviceName: '',
    userName: user?.displayName,
    userEmail: user?.email,
    price: '',
    serviceArea: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleAddService = () => {
    // Send the serviceData object to your Firebase Firestore or real-time database to add the service.
    // You should have a Firebase function for this purpose.
    // You can use Firebase's Firestore for storing the data.
    // For example, you can use Firebase SDK and call firestore.collection('services').add(serviceData).
  };

  return (
    <div className="container mx-auto p-4">
          <Helmet>
        <meta charSet="utf-8" />
        <title>Cabsy-add-service</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    
      <form className="max-w-full bg-white border border-gray-200 rounded-[36px] p-10 my-5">
      <h2 className="font-bold text-center text-4xl mb-10">Add Service</h2>
        <div className="grid grid-cols-2 gap-5">
        <div className="mb-4">
          <label className="block text-gray-700">Picture URL of the Service</label>
          <input
            type="text"
            name="pictureURL"
            value={serviceData.pictureURL}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Service Name</label>
          <input
            type="text"
            name="serviceName"
            value={serviceData.serviceName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Your name</label>
          <input type="text" value={serviceData.userName} disabled className="w-full bg-gray-100 p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Your email</label>
          <input type="email" value={serviceData.userEmail} disabled className="w-full bg-gray-100 p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={serviceData.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Service Area</label>
          <input
            type="text"
            name="serviceArea"
            value={serviceData.serviceArea}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        </div>
        <button
          type="button"
          onClick={handleAddService}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default Addservices;
