import { create } from "zustand";
import Cookies from "js-cookie";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  type: string;
  doctor?: string;
  updatedAt: Date;
}

interface UserState {
  user: User | null; 
  setUser: (value: User | null) => void; 
}

const useUserStore = create<UserState>((set) => {
  const storedUser = Cookies.get("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    setUser: (value) => {
      if (value) {
        Cookies.set("user", JSON.stringify(value), { expires: 7 });
      } else {
        Cookies.remove("user");
      }
      set(() => ({ user: value }));
    },
  };
});


export default useUserStore;
