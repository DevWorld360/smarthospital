import React from 'react'

const Pharmacy = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center pb-2 border-b">
        <h1 className="text-xl font-Urbanist font-bold text-secondary-color">
          Pharmacy Bill
        </h1>
        <div className="flex items-center gap-2">
          <button className="bg-primary-color px-3 py-2 text-white font-Assistant text-sm font-semibold">
            Generate Bill
          </button>
          <button className="bg-primary-color px-3 py-2 text-white font-Assistant text-sm font-semibold">
            Medicines
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pharmacy