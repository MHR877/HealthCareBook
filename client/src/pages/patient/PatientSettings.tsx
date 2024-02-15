import PatientLayout from "@/components/PatientLayout";
import Account from "@/components/Settings/Account";


function PatientSettings() {
  

  return (
    <PatientLayout>
      <div> 
        <h1 className="text-4xl ">Settings</h1>
        <div className="rounded-3xl border shadow-sm mt-12 px-9 py-6">
          <Account />
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientSettings;
