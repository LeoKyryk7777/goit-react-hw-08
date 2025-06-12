import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(
      isActive
        ? "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1"
        : "text-gray-700 hover:text-pink-500 transition duration-300"
    );
  };
  return (
    <>
      <header className="bg-pink-200 shadow-md px-6 py-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-4xl font-bold text-pink-600 tracking-wide">
            Phonebook
          </h2>
          <nav className="space-x-6 text-lg">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/contacts">
              Contacts
            </NavLink>
            <NavLink className={setActiveClass} to="/login">
              Login
            </NavLink>
            <NavLink className={setActiveClass} to="/register">
              Register
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default AuthNav;
