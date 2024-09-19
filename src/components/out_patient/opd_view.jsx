import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { opdHistory } from '../../data/data';

const OpdView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const opdPerPage = 10;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = opdHistory.filter(
    (item) =>
      item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caseId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / opdPerPage);
  const start = (currentPage - 1) * opdPerPage;
  const end = start + opdPerPage;
  const opdToDisplay = filteredData.slice(start, end);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className={"w-full "}>
        <div className="mb-4">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="placeholder:text-secondary-color border-b border-gray-200 w-fit font-Assistant outline-none"
          />
        </div>
        <table className={"w-full table-auto text-secondary-color"}>
          <thead className=" font-Urbanist uppercase border-b text-left text-sm align-top">
            <tr>
              <th scope="col" className="p-2">
                OPD No.
              </th>
              <th scope="col" className="p-2">
                Patient Name
              </th>
              <th scope="col" className="p-2">
                Case ID
              </th>
              <th scope="col" className="p-2">
                Appointment Date
              </th>
              <th scope="col" className="p-2">
                Consultant
              </th>
              <th scope="col" className="p-2">
                Reference
              </th>
              <th scope="col" className="p-2">
                Symptoms
              </th>
              <th scope="col" className="p-2">
                Is Antenatal
              </th>
              <th scope="col" className="p-2">
                Previous Medical Issue
              </th>
              <th scope="col" className="p-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="font-Assistant text-base align-top">
            {opdToDisplay.length > 0 ? (
              opdToDisplay.map((request) => (
                <tr key={request.id}>
                  <td className={"px-2 py-2 border-b text-sm"}>
                    {request.opdNumber}
                  </td>
                  <td className={"px-2 py-2 border-b"}>
                    {request.patientName}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.caseId}</td>
                  <td className={"px-2 py-2 border-b"}>
                    {request.appointmentDate.toLocaleDateString()}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.consultant}</td>
                  <td className={"px-2 py-2 border-b"}>{request.reference}</td>
                  <td className={"px-2 py-2 border-b"}>{request.symptoms ?? request.symptoms}</td>
                  <td className={"px-2 py-2 border-b"}>{request.antenatal}</td>
                  <td className={"px-2 py-2 border-b"}>
                    {request.previousIssue}
                  </td>
                  <td className={"px-2 py-2 border-b"}>{request.consultant}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  Data not available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {filteredData.length > 0 && (
        <div className="flex items-center justify-end gap-2 mt-4">
          <p className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </p>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <Icon icon={"uil:angle-left"} width={20} />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <Icon icon={"uil:angle-right"} width={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default OpdView;