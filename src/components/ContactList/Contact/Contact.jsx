import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import {  deleteContactThunk } from "../../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {data.name}
        </p>
        <p className={css.phone}>
          <FaPhone className={css.icon} /> {data.number}
        </p>
      </div>

      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContactThunk(data.id))}
      >
        Delete
      </button>
    </div>
  );
}
