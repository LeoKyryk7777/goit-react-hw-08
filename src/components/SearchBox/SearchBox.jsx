import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8 pb-4 border-b border-pink-200">
      <p className="text-xl font-semibold text-center text-gray-700 mb-3">
        Find contacts by name
      </p>
      <input
        type="text"
        onChange={(e) => handleChangeQuery(e.target.value)}
        className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
        placeholder="Enter name..."
      />
    </div>
  );
}
