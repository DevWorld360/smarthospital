import React from 'react'
import IpdView from '../components/in_patient/ipd_view';

const InPatient = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center pb-2 border-b">
        <h1 className="text-xl font-Urbanist font-bold text-secondary-color">
          IPD Patient
        </h1>
        <button className="bg-primary-color px-3 py-2 text-white font-Assistant text-sm font-semibold">
          Add Patient
        </button>
      </div>
      <IpdView />
    </div>
  );
}

export default InPatient