/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Manageserve = ({service,delServices ,setDelservices }) => {
    // const [deleteId,setDeleteId]=useState(null);
    console.log(service);
    const {_id,pictureURL,serviceName,description,price,userName,useremail}=service;
// console.log(deleteId);

    const handleDelete=(_id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You want to Delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            // 

            fetch(`http://localhost:3000/services/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                // toast.success('Delete Successful');
                const deletedItem = delServices.filter(serv => serv._id !== _id);
                 setDelservices(deletedItem);    
             
            })

            }
          });
     
      }
    return (
        <div>
               <div className="" key={_id}>
            <div className="">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] lg:h-[420px]">
                <img
                  className="w-full h-60 rounded-t-xl"
                  src={pictureURL}
                  alt="Image Description"
                />
                <div className="p-4 md:p-5 flex flex-row justify-between items-center gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {serviceName}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {description}
                      {_id}
                    </p>
                    <p>Prices: ${price} bdt</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      User Info: <br />
                      {userName}
                    </p>
                    <p>User email:{useremail}</p>
                  </div>
                </div>
                <div className="text-center flex justify-evenly mx-10">
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <Link to={`/update/${_id}`}>Update</Link>
                  </button>
               <button
               className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
               onClick={()=>handleDelete(_id)}
               >Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Manageserve;