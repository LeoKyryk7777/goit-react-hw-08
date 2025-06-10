import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div className="px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {contacts.map((contact) => (
        <div key={contact.id}>
          <Contact data={contact} />
        </div>
      ))}
      {loading && (
        <span className="loading loading-dots loading-xl  text-pink-600 ab  bottom-1 "></span>
      )}
      {error && <h2>server is dead...</h2>}
    </div>
  );
}
