import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { ContactInterface } from "./model";

let contactsInitialState: ContactInterface[] = [];
const localstorageContacts = localStorage.getItem("react-hw-contacts");
if (localstorageContacts)
  contactsInitialState = JSON.parse(localstorageContacts);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    // addContact
    addContact: {
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer: (
        state,
        action: PayloadAction<{ id: string; name: string; number: string }>
      ) => {
        state.push(action.payload);
        localStorage.setItem("react-hw-contacts", JSON.stringify(state));
      },
    },
    // deleteContact
    deleteContact(state, action) {
      const index = state.findIndex(
        (elem: ContactInterface) => elem.id === action.payload.id
      );

      state.splice(index, 1);
      localStorage.setItem("react-hw-contacts", JSON.stringify(state));
    },
    // editContact
    editContact(state, action) {
      const index = state.findIndex(
        (elem: ContactInterface) => elem.id === action.payload.id
      );
      state[index] = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      localStorage.setItem("react-hw-contacts", JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
