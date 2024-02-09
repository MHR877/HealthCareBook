import LoginButton from "./shared/LoginButton";
import Logo from "./shared/Logo";
import RegisterButton from "./shared/RegisterButton";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-9 py-11 bg-gray-100">
      <Logo />
      <div className="flex items-center gap-6">
        <LoginButton />
        <RegisterButton />
      </div>
    </nav>
  );
}

export default NavBar;
