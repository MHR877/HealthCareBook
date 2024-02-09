import React from "react";
import { Button } from "../ui/button";

function LoginButton() {
  return (
    <a href="/login">
      <Button className="flex items-center justify-center px-5 h-12 text-xl border-3 border-[#10217d] bg-[#10217d] text-white rounded-sm">
        Login
      </Button>
    </a>
  );
}
export default LoginButton;
