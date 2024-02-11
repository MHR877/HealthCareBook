import { ReactNode } from "react";
import DashboardNavBar from "./DashboardNavBar";

function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <main className="">
      <DashboardNavBar />
      <div>{children}</div>
    </main>
  );
}

export default PatientLayout;
