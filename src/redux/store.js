import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filterReduser } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    addcontacts: contactsReduser,
    filter: filterReduser,
  },
});
