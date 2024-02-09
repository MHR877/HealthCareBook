import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function RegisterButton() {
  return (
    <Link to="/auth/register">
      <Button className="px-5 py-3 text-xl border-3 border-color-[#10217d] text-[#10217d] bg-gray-100 hover:bg-gray-100 rounded-sm">
        Register
      </Button>
    </Link>
  );
}

export default RegisterButton;
