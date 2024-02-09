import LoginButton from "./shared/LoginButton";
import RegisterButton from "./shared/RegisterButton";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-9 py-11 bg-gray-100">
      <div className="flex items-center gap-1">
        <img src="/stethoscope.png" alt="Stethoscope" className="w-10" />
        <h1 className="text-3xl font-bold">
          <span className="text-[#10217d]">Health</span>
          <span className="font-light text-[#2e4450]">Care</span>
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <LoginButton />
        <RegisterButton />
      </div>
    </nav>
  );
}

export default NavBar;
