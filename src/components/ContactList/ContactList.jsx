import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div className={css.contactsList}>
      {contacts.map((contact) => (
        <div className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </div>
      ))}
      {loading && <h2>Loading...</h2>}
      {error && <h2>server is dead...</h2>}
    </div>
  );
}
