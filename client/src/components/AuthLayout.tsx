import { ReactElement } from "react";
import Logo from "./shared/Logo";

function AuthLayout({ children }: { children: ReactElement }) {
  return (
    <main className="h-screen bg-[#2e445055] flex items-center justify-center relative text-lg">
      <img
        src="/hero.jpg"
        alt="hero photo"
        className="absolute top-0 left-0 w-full h-screen object-cover brightness-50"
      />
      <div className="flex flex-col items-center bg-white rounded-xl py-16 pb-10 px-9 relative z-10">
        <Logo />
        <div className="w-[580px] mt-10">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
