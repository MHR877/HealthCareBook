import PatientLayout from "@/components/PatientLayout";
import DoctorCard from "@/components/cards/DoctorCard";
import SearchBar from "@/components/shared/SearchBar";
import useUserStore from "@/store/useUserStore";

function PatientHome() {
  const { user } = useUserStore((state) => state);

  return (
    <PatientLayout>
      <div>
        <h1 className="text-5xl font-bold">Welcome {user?.firstname}</h1>
        <SearchBar style="w-full mt-9"/>
        <div className="">
          filter
        </div>
        <div className="mt-9">
          <DoctorCard />
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientHome;
