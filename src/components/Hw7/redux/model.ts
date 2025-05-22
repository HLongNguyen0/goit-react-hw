import { store } from "./store";

export type AppDispatch = typeof store.dispatch;

export interface ContactInterface {
  createdAt: string;
  id: string;
  name: string;
  phone: string;
}

export interface StateInterface {
  list: {
    items: ContactInterface[];
    isLoading: boolean;
    error: string | null;
  };
  filter: string;
}
