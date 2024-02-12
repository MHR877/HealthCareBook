import PatientLayout from "@/components/PatientLayout";

function PatientSettings() {
  return (
    <PatientLayout>
      <div>
        <h1 className="text-4xl ">Settings</h1>
        <div>
          <div>
            <div className="flex items-center gap-9">
              <img src="/default.jpg" alt="default image" className="w-48" />
              <div>Hello</div>
            </div>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}

export default PatientSettings;
