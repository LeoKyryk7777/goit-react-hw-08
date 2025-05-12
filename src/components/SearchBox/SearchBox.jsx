import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };

  return (
    <div className={css.filtr}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={(e) => handleChangeQuery(e.target.value)}
      />
    </div>
  );
}
