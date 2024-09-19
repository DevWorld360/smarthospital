import React, { useState } from 'react'
import PatientView from '../components/out_patient/patient_view';
import OpdView from '../components/out_patient/opd_view';

const OutPatient = () => {
  const [activeTab, setActiveTab] = useState("opd-view");

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex gap-12 font-Urbanist">
          <button
            className={`px-2 pb-1 border-b-2 -mb-6 text-lg font-bold text-secondary-color ${
              activeTab === "opd-view"
                ? "border-primary-color"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("opd-view")}
          >
            OPD View
          </button>
          <button
            className={`px-2 pb-1 border-b-2 -mb-6 text-lg font-bold text-secondary-color ${
              activeTab === "patient-view"
                ? "border-primary-color"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("patient-view")}
          >
            Patient View
          </button>
        </div>

        <button className="bg-primary-color px-3 py-2 text-white font-Assistant text-sm font-semibold">
          Add Patient
        </button>
      </div>

      <div className="">
        {activeTab === "opd-view" && <OpdView />}
        {activeTab === "patient-view" && <PatientView />}
      </div>
    </div>
  );
}

export default OutPatient




