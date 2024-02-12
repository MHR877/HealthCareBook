import axios from "axios";
import { Button } from "../ui/button";
import useUserStore from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";

interface Props {
  style?: string
}

function LogoutButton({style} : Props) {
  const { setUser } = useUserStore((state) => state);
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await axios.get("http://localhost:3000/api/v1/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return <Button className={`px-5 py-3 bg-red-500 text-white text-lg hover:bg-red-600 ${style}`} onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
