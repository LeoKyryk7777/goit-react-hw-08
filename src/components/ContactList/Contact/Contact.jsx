import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContactThunk } from "../../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 mb-4 border border-pink-100 hover:shadow-lg transition-shadow duration-300">
      <div className="text-gray-700 space-y-1">
        <p className="flex items-center text-lg font-semibold">
          <FaUser className="text-pink-400 mr-2" /> {data.name}
        </p>
        <p className="flex items-center text-md">
          <FaPhone className="text-blue-400 mr-2" /> {data.number}
        </p>
      </div>
      <div className="card-actions justify-end">
        <button
          className="bg-pink-400 text-white font-medium px-4 py-2 rounded-lg hover:bg-pink-500 transition-colors duration-300"
          onClick={() => dispatch(deleteContactThunk(data.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
