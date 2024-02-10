import { create } from "zustand";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  type: string;
  doctor?: string;
  updatedAt: Date
}

interface UserState {
  user: User;
  setUser: (value: User) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    type: "",
    doctor: "",
    updatedAt: new Date()
  },
  setUser: (value) => set(() => ({ user: value })),
}));

export default useUserStore;
