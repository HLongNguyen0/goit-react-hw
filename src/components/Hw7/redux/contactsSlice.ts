import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addContact, deleteContact, getAllContacts } from "./service";
import { StateInterface } from "./model";

const initialState: StateInterface = {
  list: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    initLoad(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      // Load All Contacts
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.rejected, handleRejected)
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.list.isLoading = false;
        state.list.error = null;
        state.list.items = action.payload;
      })
      // Add Contact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.list.isLoading = false;
        state.list.error = null;
        state.list.items.push(action.payload);
      })
      // Delete Contact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list.isLoading = false;
        state.list.error = null;
        const index = state.list.items.findIndex(
          (elem) => elem.id === action.payload.id
        );
        state.list.items.splice(index, 1);
      });
  },
});

const handlePending = (state: StateInterface) => {
  state.list.isLoading = true;
};

const handleRejected = (
  state: StateInterface,
  action: PayloadAction<unknown>
) => {
  state.list.isLoading = false;
  if (action.payload) state.list.error = action.payload as string;
  else state.list.error = "Unknown error";
};

export const contactsReducer = contactSlice.reducer;
