import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { name, chef, photo, _id } = coffee;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-chi-two.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    className="w-40 h-40"
                    alt="Coffee" />
            </figure>
            <div className="flex justify-between w-full ml-4 py-3">
                <div className="mt-5">
                    <h2 className="flex gap-3 mb-3"><strong>Name :</strong>{name}</h2>
                    <h2 className="flex gap-3 mb-3"><strong>Chef :</strong>{chef}</h2>
                    <h2 className="flex gap-3 mb-3"><strong>Price :</strong>890 taka</h2>
                </div>
                <div className=" flex flex-col gap-2 pr-4 mt-5">
                    <button className="text-2xl border p-2 text-white rounded-md bg-[#D2B48C]"><IoEyeSharp /></button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="text-2xl  border p-2 bg-slate-800 text-white rounded-md">
                            <MdEdit />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="text-2xl  border p-2 bg-red-500 text-white rounded-md"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;