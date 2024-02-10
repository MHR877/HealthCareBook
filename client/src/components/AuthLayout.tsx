import { ReactElement } from "react";
import Logo from "./shared/Logo";

function AuthLayout({ children }: { children: ReactElement }) {
  return (
    <main className="min-h-screen bg-[#2e445055] flex items-center justify-center relative text-lg py-10">
      <img
        src="/hero.jpg"
        alt="hero photo"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      />
      <div className="flex flex-col items-center bg-white rounded-xl gap-5 p-9 relative z-10">
        <Logo />
        <div className="w-[580px]">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;
