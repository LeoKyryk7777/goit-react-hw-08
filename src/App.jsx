import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./index.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {  fetchContactsThunk } from "./redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className={css.pageContainer}>
      <h1 className={css.title}>Phonebook </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
