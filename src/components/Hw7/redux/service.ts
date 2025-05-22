import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://682eced2746f8ca4a47e623e.mockapi.io/goit-react-hw";

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact: { name: string; phone: string }, thunkApi) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: string, thunkApi) => {
    try {
      const response = await axios.delete("/contacts/" + id);
      return response.data;
    } catch (error: any) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
