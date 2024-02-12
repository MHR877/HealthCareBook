import { ReactNode } from "react";
import DashboardNavBar from "./DashboardNavBar";
import RightBar from "./RightBar";

function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <DashboardNavBar />
      <div className="mx-auto w-[860px] mt-9">{children}</div>
      <RightBar />
    </main>
  );
}

export default PatientLayout;
