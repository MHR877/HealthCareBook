import { Button } from "../ui/button";

function RegisterButton() {
  return (
    <a href="/register">
      <Button className="px-5 py-3 text-xl border-3 border-color-[#10217d] text-[#10217d] bg-gray-100 hover:bg-gray-100 rounded-sm">
        Register
      </Button>
    </a>
  );
}

export default RegisterButton;
